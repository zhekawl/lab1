import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Course Catalog',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="p-4 border-b">
          <nav className="flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/courses">Courses</Link>
            <Link href="/about">About</Link>
          </nav>
        </header>
        <main className="p-6">{children}</main>
      </body>
    </html>
  )
}
