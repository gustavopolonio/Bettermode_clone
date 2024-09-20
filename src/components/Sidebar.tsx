import {
  House,
  List,
  CalendarCheck2,
  Megaphone,
  Network,
  MessagesSquare,
  GraduationCap,
  BadgeHelp,
  ScrollText,
  Sun,
} from 'lucide-react'

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={className}>
      <div className="space-y-3">
        <nav className="space-y-1">
          <a
            href="#"
            className="flex items-center gap-3 py-2 px-2.5 rounded-lg hover:bg-zinc-200"
          >
            <span className="bg-indigo-400 rounded-full p-1">
              <House className="size-4" />
            </span>
            Home
          </a>
          <a
            href="/"
            className="flex items-center gap-3 py-2 px-2.5 bg-zinc-300 rounded-lg"
          >
            <span className="bg-indigo-400 rounded-full p-1">
              <List className="size-4" />
            </span>
            Feed
          </a>
        </nav>
        <div className="space-y-4">
          <nav className="space-y-1">
            <h3 className="text-xs font-semibold sm:text-sm">From the Team</h3>
            <a
              href="#"
              className="flex items-center gap-3 py-2 px-2.5 rounded-lg hover:bg-zinc-200"
            >
              <span className="bg-lime-400 rounded-full p-1">
                <CalendarCheck2 className="size-4" />
              </span>
              Events
            </a>
            <a
              href="#"
              className="flex items-center gap-3 py-2 px-2.5 rounded-lg hover:bg-zinc-200"
            >
              <span className="bg-lime-400 rounded-full p-1">
                <Megaphone className="size-4" />
              </span>
              Announcements
            </a>
          </nav>
          <nav className="space-y-1">
            <h3 className="text-xs font-semibold sm:text-sm">Connect</h3>
            <a
              href="#"
              className="flex items-center gap-3 py-2 px-2.5 rounded-lg hover:bg-zinc-200"
            >
              <span className="bg-lime-400 rounded-full p-1">
                <Network className="size-4" />
              </span>
              Intros & Networking
            </a>
            <a
              href="#"
              className="flex items-center gap-3 py-2 px-2.5 rounded-lg hover:bg-zinc-200"
            >
              <span className="bg-lime-400 rounded-full p-1">
                <MessagesSquare className="size-4" />
              </span>
              Ask the Community
            </a>
          </nav>
          <nav className="space-y-1">
            <h3 className="text-xs font-semibold sm:text-sm">Learn</h3>
            <a
              href="#"
              className="flex items-center gap-3 py-2 px-2.5 rounded-lg hover:bg-zinc-200"
            >
              <span className="bg-orange-400 rounded-full p-1">
                <GraduationCap className="size-4" />
              </span>
              Academy
            </a>
            <a
              href="#"
              className="flex items-center gap-3 py-2 px-2.5 rounded-lg hover:bg-zinc-200"
            >
              <span className="bg-orange-400 rounded-full p-1">
                <BadgeHelp className="size-4" />
              </span>
              Help Center
            </a>
          </nav>
          <nav className="space-y-1">
            <h3 className="text-xs font-semibold sm:text-sm">Product</h3>
            <a
              href="#"
              className="flex items-center gap-3 py-2 px-2.5 rounded-lg hover:bg-zinc-200"
            >
              <span className="bg-orange-400 rounded-full p-1">
                <ScrollText className="size-4" />
              </span>
              Wishlist
            </a>
            <a
              href="#"
              className="flex items-center gap-3 py-2 px-2.5 rounded-lg hover:bg-zinc-200"
            >
              <span className="bg-orange-400 rounded-full p-1">
                <Sun className="size-4" />
              </span>
              Highlights
            </a>
          </nav>
        </div>
      </div>

      <nav className="mt-12 pb-3 text-xs text-zinc-700 lg:px-3">
        <a href="https://bettermode.com/legal/terms-of-service">Terms</a>
        <span> · </span>
        <a href="https://bettermode.com/legal/privacy-policy?">Privacy</a>
        <span> · </span>
        <span>Cookies</span>
        <span> · </span>
        <span>Copyright 2024</span>
      </nav>
    </div>
  )
}
