import Link from 'next/link'
import { ArrowUpRight, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'

const links = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/portfolio' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
]

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5 text-white" aria-label="Northstar home">
          <span className="flex size-8 items-center justify-center rounded-lg bg-[#5b8cff] text-sm font-bold text-white">N</span>
          <span className="text-sm font-semibold tracking-[0.18em]">NORTHSTAR</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {links.map((link) => <Link key={link.href} href={link.href} className="text-sm text-white/70 transition hover:text-white">{link.label}</Link>)}
        </nav>
        <div className="flex items-center gap-3">
          <Button asChild className="hidden rounded-full bg-white px-5 text-[#0a1d3a] hover:bg-white/90 sm:inline-flex">
            <Link href="/contact">Let&apos;s talk <ArrowUpRight className="ml-1 size-4" /></Link>
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 md:hidden" aria-label="Open navigation"><Menu /></Button>
        </div>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return <footer className="bg-[#071a35] text-white"><div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-8"><div><Link href="/" className="flex items-center gap-2.5"><span className="flex size-8 items-center justify-center rounded-lg bg-[#5b8cff] text-sm font-bold">N</span><span className="text-sm font-semibold tracking-[0.18em]">NORTHSTAR</span></Link><p className="mt-4 max-w-xs text-sm leading-6 text-white/50">A digital studio for ambitious businesses ready to move forward.</p></div><div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/60">{[...links, { label: 'Contact', href: '/contact' }].map((link) => <Link key={link.href} href={link.href} className="hover:text-white">{link.label}</Link>)}</div><p className="text-sm text-white/40">© {new Date().getFullYear()} Northstar Studio</p></div></footer>
}

export function PageShell({ children }: { children: React.ReactNode }) { return <><SiteHeader />{children}<SiteFooter /></> }

export const Arrow = ArrowUpRight

// Backend placeholders: connect these UI entry points to your inquiries/packages API.
export type InquiryPayload = { name: string; email: string; company?: string; message: string }
export type Package = { id: string; name: string; price: string; features: string[] }

export async function createInquiry(_payload: InquiryPayload) { return { ok: true, message: 'Inquiry endpoint placeholder' } }
export async function listPackages(): Promise<Package[]> { return [] }
