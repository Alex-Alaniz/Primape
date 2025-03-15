"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Search } from 'lucide-react'
import { 
  CommandDialog, 
  CommandEmpty, 
  CommandGroup, 
  CommandInput, 
  CommandItem, 
  CommandList 
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"
import { DialogTitle } from "@/components/ui/dialog"

// Define our search items structure
interface SearchItem {
  title: string
  href: string
  group: string
}

// Define all searchable items
const searchItems: SearchItem[] = [
  // Overview
  { title: "Home", href: "/", group: "Overview" },
  { title: "About", href: "/about", group: "Overview" },
  
  // Get Started
  { title: "Quick Start", href: "/quick-start", group: "Get Started" },
  { title: "Connect Wallet", href: "/connect-wallet", group: "Get Started" },
  
  // Development
  { title: "Smart Contracts", href: "/develop/contracts", group: "Development" },
  { title: "SDK Integration", href: "/develop/sdk", group: "Development" },
]

export function SearchCommand() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <Button
        variant="outline"
        className="relative h-8 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:w-64 sm:pr-12"
        onClick={() => setOpen(true)}
      >
        <Search className="mr-2 h-4 w-4" />
        Search documentation...
        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-background px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <DialogTitle className="sr-only">Search documentation</DialogTitle>
        <CommandInput placeholder="Search documentation..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {Array.from(new Set(searchItems.map(item => item.group))).map((group) => (
            <CommandGroup key={group} heading={group}>
              {searchItems
                .filter(item => item.group === group)
                .map((item) => (
                  <CommandItem
                    key={item.href}
                    onSelect={() => {
                      router.push(item.href)
                      setOpen(false)
                    }}
                  >
                    {item.title}
                  </CommandItem>
                ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  )
}

