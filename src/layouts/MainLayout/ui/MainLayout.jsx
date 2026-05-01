import { Outlet } from "react-router"
import { styles } from "./styles"

import {Footer, Sidebar} from "@components"

export const MainLayout = () => {
  return (
    <div className={`${styles.layout}`}>
      <Sidebar />
      <div className={`${styles.main}`}>

        <Outlet />
        <Footer text={"© 2024 Developed by Open Web"} textColor={"brand"} />
      </div>
    </div>
  )
}
