import { LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

interface NavItemProps {
  title: string
  Icon: LucideIcon
  bgIcon: string
  href: string
  active?: boolean
}

export function NavItem({
  href,
  Icon,
  title,
  bgIcon,
  active = false,
}: NavItemProps) {
  return (
    <Link
      to={href}
      className={`flex items-center gap-3 py-2 px-2.5 rounded-lg ${active ? 'bg-zinc-200' : ''} hover:bg-zinc-200`}
    >
      <span className={`${bgIcon} rounded-full p-1`}>
        <Icon className="size-4" />
      </span>
      {title}
    </Link>
  )
}
