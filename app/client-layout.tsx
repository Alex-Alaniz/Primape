"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { SideNav } from "@/components/side-nav"
import { SearchCommand } from "@/components/search-command"
import { TopNav } from "@/components/top-nav"
import { AskChatGPT } from "@/components/ask-chatgpt"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

interface RootLayoutProps {
  children: React.ReactNode
}

export default function ClientLayout({ children }: RootLayoutProps) {
  const [sidebarVisible, setSidebarVisible] = useState(false)

  const toggleSidebar = useCallback(() => {
    setSidebarVisible((prev) => !prev)
  }, [])

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "min-h-screen bg-background")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <div className="flex flex-1">
              <SideNav visible={sidebarVisible} onToggleSidebar={toggleSidebar} />
              <div
                className={cn(
                  "flex flex-1 flex-col transition-all duration-300",
                  sidebarVisible ? "md:ml-72" : "md:ml-0",
                )}
              >
                <TopNav onToggleSidebar={toggleSidebar} />
                <div className="container mx-auto flex flex-1">
                  <main className="flex-1 px-4 py-6 md:px-8">
                    <div className="mx-auto max-w-4xl">{children}</div>
                  </main>
                </div>
                <Footer />
              </div>
            </div>
          </div>
          <SearchCommand />
          <AskChatGPT />
        </ThemeProvider>
      </body>
    </html>
  )
}

