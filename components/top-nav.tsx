"use client"

import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { SearchCommand } from "@/components/search-command"
import { useEffect, useState } from "react"

interface TopNavProps {
  onToggleSidebar: () => void
}

export function TopNav({ onToggleSidebar }: TopNavProps) {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-border/40 bg-background">
      <div className="flex h-14 items-center px-4 sm:px-6">
        <Button
          variant="ghost"
          size="icon"
          className="mr-4 flex"
          onClick={onToggleSidebar}
          aria-label="Toggle sidebar"
        >
          <Menu className="h-5 w-5" />
        </Button>
        <div className="flex-1">
          <SearchCommand />
        </div>
      </div>
    </header>
  )
}

