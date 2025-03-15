"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageSquare } from 'lucide-react'

export function AskChatGPT() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [response, setResponse] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the query to your backend,
    // which would then interact with the ChatGPT API
    setResponse('This is a placeholder response. In a real implementation, this would be the response from ChatGPT.')
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
            />
            <Button type="submit">Ask</Button>
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

