import { Outlet } from "react-router"
import { styles } from "./styles"

import {Footer, Sidebar, Header} from "@components"

export const MainLayout = () => {
  return (
    <div className={`${styles.layout}`}>
      <Sidebar />
      <div className={`${styles.main}`}>
        <Header />
        <Outlet />
        <Footer text={"© 2024 Developed by Open Web"} textColor={"brand"} />
      </div>
    </div>
  )
}
