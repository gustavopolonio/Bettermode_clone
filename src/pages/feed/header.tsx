import {
  Menu,
  MessageCircleMore,
  Bell,
  X,
  Moon,
  Search,
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
import { useState } from 'react'

export function Header() {
  const [isMenuHambOpen, setIsMenuHambOpen] = useState(false)

  function toggleMenuHamb() {
    setIsMenuHambOpen((prev) => !prev)
  }

  return (
    <header className="h-16 flex items-center justify-between shadow-md px-4">
      <div className="flex gap-2">
        <button onClick={toggleMenuHamb}>
          <Menu className="size-8" />
        </button>

        <a href="/feed">
          <img
            src="https://tribe-s3-production.imgix.net/gCPFqrUCfVkzMEukQKqKs?fit=max&w=1000&auto=compress,format"
            alt="Bettermode"
            className="size-8"
          />
        </a>
      </div>

      <div className="flex gap-2">
        <button className="border-2 border-zinc-300 rounded-full size-10 flex items-center justify-center">
          <MessageCircleMore className="size-5" />
        </button>
        <button className="border-2 border-zinc-300 rounded-full size-10 flex items-center justify-center">
          <Bell className="size-5" />
        </button>
        <img
          src="https://avatars.githubusercontent.com/u/69776883?v=4"
          alt="Gustavo Polonio"
          className="size-10 rounded-full"
        />
      </div>

      <div
        className={`fixed inset-0 bg-black ${isMenuHambOpen ? 'opacity-60 flex' : 'opacity-0 hidden'}`}
        onClick={toggleMenuHamb}
      />

      <aside
        className={`fixed left-0 inset-y-0 w-80 bg-zinc-100 px-3 py-4 overflow-y-auto transition-all duration-300 ${isMenuHambOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <X className="size-7 text-zinc-600" onClick={toggleMenuHamb} />

        <div className="mt-5 space-y-3 text-zinc-700">
          <nav className="space-y-1">
            <span className="flex items-center gap-3 py-2">
              <Moon className="size-5" />
              Dark mode
            </span>
            <span className="flex items-center gap-3 py-2">
              <Search className="size-5" />
              Search
            </span>
          </nav>
          <div className="space-y-3">
            <nav>
              <a href="#" className="flex items-center gap-3 py-2">
                <span className="bg-indigo-400 rounded-full p-1">
                  <House className="size-4" />
                </span>
                Home
              </a>
              <a href="/" className="flex items-center gap-3 py-2">
                <span className="bg-indigo-400 rounded-full p-1">
                  <List className="size-4" />
                </span>
                Feed
              </a>
            </nav>
            <div className="space-y-4">
              <nav>
                <h3 className="text-xs font-semibold mb-1">From the Team</h3>
                <a href="#" className="flex items-center gap-3 py-2">
                  <span className="bg-lime-400 rounded-full p-1">
                    <CalendarCheck2 className="size-4" />
                  </span>
                  Events
                </a>
                <a href="#" className="flex items-center gap-3 py-2">
                  <span className="bg-lime-400 rounded-full p-1">
                    <Megaphone className="size-4" />
                  </span>
                  Announcements
                </a>
              </nav>
              <nav>
                <h3 className="text-xs font-semibold mb-1">Connect</h3>
                <a href="#" className="flex items-center gap-3 py-2">
                  <span className="bg-lime-400 rounded-full p-1">
                    <Network className="size-4" />
                  </span>
                  Intros & Networking
                </a>
                <a href="#" className="flex items-center gap-3 py-2">
                  <span className="bg-lime-400 rounded-full p-1">
                    <MessagesSquare className="size-4" />
                  </span>
                  Ask the Community
                </a>
              </nav>
              <nav>
                <h3 className="text-xs font-semibold mb-1">Learn</h3>
                <a href="#" className="flex items-center gap-3 py-2">
                  <span className="bg-orange-400 rounded-full p-1">
                    <GraduationCap className="size-4" />
                  </span>
                  Academy
                </a>
                <a href="#" className="flex items-center gap-3 py-2">
                  <span className="bg-orange-400 rounded-full p-1">
                    <BadgeHelp className="size-4" />
                  </span>
                  Help Center
                </a>
              </nav>
              <nav>
                <h3 className="text-xs font-semibold mb-1">Product</h3>
                <a href="#" className="flex items-center gap-3 py-2">
                  <span className="bg-orange-400 rounded-full p-1">
                    <ScrollText className="size-4" />
                  </span>
                  Wishlist
                </a>
                <a href="#" className="flex items-center gap-3 py-2">
                  <span className="bg-orange-400 rounded-full p-1">
                    <Sun className="size-4" />
                  </span>
                  Highlights
                </a>
              </nav>
            </div>
          </div>
        </div>

        <nav className="mt-12 text-xs text-zinc-700">
          <a href="https://bettermode.com/legal/terms-of-service">Terms</a>
          <span> · </span>
          <a href="https://bettermode.com/legal/privacy-policy?">Privacy</a>
          <span> · </span>
          <span>Cookies</span>
          <span> · </span>
          <span>Copyright 2024</span>
        </nav>
      </aside>
    </header>
  )
}
