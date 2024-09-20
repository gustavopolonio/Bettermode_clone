import { Outlet } from 'react-router-dom'

import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'

export function Layout() {
  return (
    <>
      <Header />
      <main className="bg-zinc-100">
        <div className="max-w-[1344px] my-0 mx-auto lg:flex">
          <Sidebar className="hidden w-[22%] pt-5 pl-5 lg:block" />
          <Outlet />
        </div>
      </main>
    </>
  )
}
