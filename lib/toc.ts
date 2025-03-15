export interface TableOfContentsItem {
  title: string
  url: string
  items?: TableOfContentsItem[]
}

export function getTableOfContents(content: string): TableOfContentsItem[] {
  const headings = content.match(/<h[23][^>]*>(.*?)<\/h[23]>/g) || []
  const toc: TableOfContentsItem[] = []

  headings.forEach((heading) => {
    const title = heading.replace(/<[^>]*>/g, '')
    const url = `#${title.toLowerCase().replace(/\s+/g, '-')}`
    const level = parseInt(heading.charAt(2))

    if (level === 2) {
      toc.push({ title, url })
    } else if (level === 3 && toc.length > 0) {
      const parent = toc[toc.length - 1]
      if (!parent.items) parent.items = []
      parent.items.push({ title, url })
    }
  })

  return toc
}

