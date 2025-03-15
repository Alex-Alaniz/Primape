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
  CommandList,
  CommandLoading
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"
import { DialogTitle } from "@/components/ui/dialog"

// Define our search results structure
interface SearchResult {
  title: string
  url: string
  excerpt: string
}

export function SearchCommand() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  // Default search items for when no query is entered
  const defaultItems = [
    // Overview
    { title: "Home", url: "/", excerpt: "Overview" },
    { title: "About", url: "/about", excerpt: "Overview" },
    { title: "Architecture", url: "/architecture", excerpt: "Overview" },
    
    // Get Started
    { title: "Quick Start", url: "/quick-start", excerpt: "Get Started" },
    { title: "Connect Wallet", url: "/connect-wallet", excerpt: "Get Started" },
    
    // Development
    { title: "Smart Contracts", url: "/develop/contracts", excerpt: "Development" },
    { title: "SDK Integration", url: "/develop/sdk", excerpt: "Development" },
  ]

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

  useEffect(() => {
    if (!query.trim()) {
      setResults(defaultItems)
      return
    }

    const fetchResults = async () => {
      setIsLoading(true)
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`)
        if (!res.ok) {
          throw new Error('Failed to fetch search results')
        }
        const data = await res.json()
        setResults(data.results)
      } catch (error) {
        console.error('Error fetching search results:', error)
        setResults([])
      } finally {
        setIsLoading(false)
      }
    }

    const debounce = setTimeout(() => {
      fetchResults()
    }, 300)

    return () => clearTimeout(debounce)
  }, [query, defaultItems])

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
        <CommandInput 
          placeholder="Search documentation..." 
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {isLoading ? (
            <CommandLoading>Searching...</CommandLoading>
          ) : (
            <CommandGroup heading="Results">
              {results.map((item) => (
                <CommandItem
                  key={item.url}
                  onSelect={() => {
                    router.push(item.url)
                    setOpen(false)
                  }}
                >
                  <div className="flex flex-col">
                    <span>{item.title}</span>
                    <span className="text-xs text-muted-foreground">{item.excerpt}</span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  )
}

