import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./client-layout"
import "./globals.css"

export const metadata: Metadata = {
  title: "PrimapePrediction Documentation",
  description: "Comprehensive documentation for the PrimapePrediction platform - a multi-outcome prediction market built on Arbitrum One",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}

