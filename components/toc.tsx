"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface TableOfContentsProps {
  className?: string
}

export function TableOfContents({ className }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([])
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2, h3"))
      .filter(elem => elem.id) // Only get headings with IDs
      .map(elem => ({
        id: elem.id,
        text: elem.textContent ?? "",
        level: Number(elem.tagName.charAt(1))
      }))
    setHeadings(elements)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "-20% 0% -35% 0%" }
    )

    elements.forEach(heading => {
      const elem = document.getElementById(heading.id)
      if (elem) observer.observe(elem)
    })

    return () => observer.disconnect()
  }, [])

  if (headings.length === 0) return null

  return (
    <nav className={cn("space-y-2", className)} aria-label="Table of contents">
      <h2 className="font-medium text-sm">On This Page</h2>
      <ul className="space-y-2.5 text-sm">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={cn(
              "line-clamp-1",
              heading.level === 3 && "ml-4",
              heading.level === 4 && "ml-6"
            )}
          >
            <a
              href={`#${heading.id}`}
              className={cn(
                "inline-block text-muted-foreground hover:text-foreground",
                activeId === heading.id && "font-medium text-foreground"
              )}
              onClick={(e) => {
                e.preventDefault()
                document.querySelector(`#${heading.id}`)?.scrollIntoView({
                  behavior: "smooth",
                  block: "start"
                })
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

