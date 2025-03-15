"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Sun, Moon } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

interface SideNavProps {
  visible: boolean
  onToggleSidebar: () => void
}

export function SideNav({ visible, onToggleSidebar }: SideNavProps) {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [openCategories, setOpenCategories] = useState<string[]>(['overview', 'get-started', 'develop'])
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 768)
    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  const toggleCategory = (category: string) => {
    setOpenCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  const NavContent = () => (
    <div className="flex flex-col h-full">
      <div className="flex items-center h-14 px-6 border-b border-border/40">
        <Link href="/" className="font-semibold text-xl">
          PrimapePrediction
        </Link>
      </div>
      <nav className="flex-1 space-y-4 overflow-y-auto px-4 py-6">
        <div className="space-y-4">
          <Category 
            title="Overview" 
            isOpen={openCategories.includes('overview')} 
            onClick={() => toggleCategory('overview')}
          >
            <NavLink href="/" active={pathname === '/'}>Home</NavLink>
            <NavLink href="/about" active={pathname === '/about'}>About</NavLink>
            <NavLink href="/architecture" active={pathname === '/architecture'}>Architecture</NavLink>
          </Category>
          <Category 
            title="Get Started" 
            isOpen={openCategories.includes('get-started')} 
            onClick={() => toggleCategory('get-started')}
          >
            <NavLink href="/quick-start" active={pathname === '/quick-start'}>Quick Start</NavLink>
            <NavLink href="/connect-wallet" active={pathname === '/connect-wallet'}>Connect Wallet</NavLink>
          </Category>
          <Category 
            title="Develop" 
            isOpen={openCategories.includes('develop')} 
            onClick={() => toggleCategory('develop')}
          >
            <NavLink href="/develop/contracts" active={pathname === '/develop/contracts'}>Smart Contracts</NavLink>
            <NavLink href="/develop/sdk" active={pathname === '/develop/sdk'}>SDK Integration</NavLink>
          </Category>
        </div>
      </nav>
      <div className="border-t border-border/40 p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Theme</span>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme('light')}
              className={cn(theme === 'light' && "bg-accent")}
            >
              <Sun className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme('dark')}
              className={cn(theme === 'dark' && "bg-accent")}
            >
              <Moon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )

  if (isMobile) {
    return (
      <Sheet open={visible} onOpenChange={onToggleSidebar}>
        <SheetContent side="left" className="w-72 p-0">
          <SheetHeader>
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          </SheetHeader>
          <NavContent />
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <div
      className={cn(
        "fixed inset-y-0 z-40 w-72 flex-col border-r border-border/40 bg-background transition-all duration-300",
        visible ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <NavContent />
    </div>
  )
}

function Category({ title, isOpen, onClick, children }: { 
  title: string
  isOpen: boolean
  onClick: () => void
  children: React.ReactNode 
}) {
  return (
    <div>
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between rounded-md px-2 py-1 text-sm font-medium hover:bg-accent"
      >
        {title}
        <ChevronDown className={cn(
          "h-4 w-4 transition-transform",
          isOpen && "rotate-180"
        )} />
      </button>
      {isOpen && (
        <div className="mt-1 space-y-1 pl-4">
          {children}
        </div>
      )}
    </div>
  )
}

function NavLink({ href, active, children }: { 
  href: string
  active?: boolean
  children: React.ReactNode 
}) {
  return (
    <Link
      href={href}
      className={cn(
        "block rounded-md px-2 py-1 text-sm hover:bg-accent hover:text-accent-foreground",
        active ? "bg-accent/50 font-medium" : "text-muted-foreground"
      )}
    >
      {children}
    </Link>
  )
}

