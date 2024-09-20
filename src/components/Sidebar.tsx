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

import { NavItem } from './NavItem'

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={className}>
      <div className="space-y-3">
        <nav className="space-y-1">
          <NavItem Icon={House} href="#" title="Home" bgIcon="bg-indigo-400" />
          <NavItem
            Icon={List}
            href="/"
            title="Feed"
            bgIcon="bg-indigo-400"
            active
          />
        </nav>
        <div className="space-y-4">
          <nav className="space-y-1">
            <h3 className="text-xs font-semibold sm:text-sm">From the Team</h3>
            <NavItem
              Icon={CalendarCheck2}
              href="#"
              title="Events"
              bgIcon="bg-lime-400"
            />
            <NavItem
              Icon={Megaphone}
              href="#"
              title="Announcements"
              bgIcon="bg-lime-400"
            />
          </nav>
          <nav className="space-y-1">
            <h3 className="text-xs font-semibold sm:text-sm">Connect</h3>
            <NavItem
              Icon={Network}
              href="#"
              title="Intros & Networking"
              bgIcon="bg-lime-400"
            />
            <NavItem
              Icon={MessagesSquare}
              href="#"
              title="Ask the Community"
              bgIcon="bg-lime-400"
            />
          </nav>
          <nav className="space-y-1">
            <h3 className="text-xs font-semibold sm:text-sm">Learn</h3>
            <NavItem
              Icon={GraduationCap}
              href="#"
              title="Academy"
              bgIcon="bg-orange-400"
            />
            <NavItem
              Icon={BadgeHelp}
              href="#"
              title="Help Center"
              bgIcon="bg-orange-400"
            />
          </nav>
          <nav className="space-y-1">
            <h3 className="text-xs font-semibold sm:text-sm">Product</h3>
            <NavItem
              Icon={ScrollText}
              href="#"
              title="Wishlist"
              bgIcon="bg-orange-400"
            />
            <NavItem
              Icon={Sun}
              href="#"
              title="Highlightsr"
              bgIcon="bg-orange-400"
            />
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
