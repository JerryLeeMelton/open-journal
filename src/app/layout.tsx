import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "The Open Journal",
  description: "The personal blog of Jerry Lee Melton",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
