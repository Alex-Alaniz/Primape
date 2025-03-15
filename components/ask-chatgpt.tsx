"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageSquare } from 'lucide-react'

export function AskChatGPT() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [response, setResponse] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!query.trim()) return
    
    setIsLoading(true)
    setResponse('')
    
    try {
      const res = await fetch('/api/chatgpt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      })
      
      if (!res.ok) {
        throw new Error('Failed to get response')
      }
      
      const data = await res.json()
      setResponse(data.answer)
    } catch (error) {
      console.error('Error asking ChatGPT:', error)
      setResponse('Sorry, there was an error processing your request. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-full max-w-[320px] sm:max-w-[380px]">
      {!isOpen ? (
        <Button onClick={() => setIsOpen(true)} className="rounded-full p-3">
          <MessageSquare className="h-6 w-6" />
        </Button>
      ) : (
        <div className="w-full rounded-lg bg-background p-4 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Ask about the docs..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              disabled={isLoading}
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Thinking...' : 'Ask'}
            </Button>
          </form>
          {response && (
            <div className="mt-4 rounded bg-muted p-2 text-sm">
              {response}
            </div>
          )}
          <Button onClick={() => setIsOpen(false)} className="mt-4" variant="outline">
            Close
          </Button>
        </div>
      )}
    </div>
  )
}

