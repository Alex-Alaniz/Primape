export function Footer() {
  return (
    <footer className="border-t border-border/40 mt-auto">
      <div className="container flex h-14 items-center justify-between px-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Primape Markets | BearifiedCo LLC
        </p>
        <p className="text-sm text-muted-foreground">
          Last updated on December 16, 2024
        </p>
      </div>
    </footer>
  )
}

