import { Outlet } from "react-router"
import { styles } from "./styles"

import {Footer, Sidebar, Header} from "@components"

import { ModalRegistry } from "@modals"

import { profileStore } from "@store"

import { useEffect } from "react"

export const MainLayout = () => {
  const apiProfile = profileStore((s) => s.apiProfile)

  useEffect(() => {
    apiProfile()
  }, [apiProfile])

  return (
    <div className={`${styles.layout}`}>
      <Sidebar />
      <div className={`${styles.main}`}>
        <Header />
        <Outlet />
        <Footer text={"© 2024 Developed by Open Web"} textColor={"brand"} />
      </div>
      <ModalRegistry />
    </div>
  )
}
