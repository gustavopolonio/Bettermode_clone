import { Menu, MessageCircleMore, Bell, X, Moon, Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Sidebar } from './Sidebar'

export function Header() {
  const [isMenuHambOpen, setIsMenuHambOpen] = useState(false)

  function toggleMenuHamb() {
    setIsMenuHambOpen((prev) => !prev)
  }

  useEffect(() => {
    if (isMenuHambOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }

    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [isMenuHambOpen])

  return (
    <header className="sticky top-0 bg-zinc-50 shadow-md z-[1]">
      <div className="h-16 flex items-center justify-between px-4 max-w-[1344px] my-0 mx-auto">
        <div className="flex gap-2 sm:gap-8">
          <button onClick={toggleMenuHamb} className="lg:hidden">
            <Menu className="size-8" />
          </button>

          <Link to="/feed">
            <img
              src="https://tribe-s3-production.imgix.net/gCPFqrUCfVkzMEukQKqKs?fit=max&w=1000&auto=compress,format"
              alt="Bettermode"
              className="size-8 sm:hidden"
            />
            <img
              src="https://tribe-s3-production.imgix.net/GV7xVRrfDEXMuc8p8y2O3?fit=max&w=1000&auto=compress,format"
              alt="Bettermode"
              className="hidden w-[170px] h-auto sm:block"
            />
          </Link>
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

            <Sidebar />
          </div>
        </aside>
      </div>
    </header>
  )
}
