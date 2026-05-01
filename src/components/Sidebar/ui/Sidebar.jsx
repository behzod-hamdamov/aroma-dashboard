import { useState } from "react"
import { SidebarHead } from "../components"

import { styles } from "./styles"

export const Sidebar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  return (
    <div className={`${styles.sidebar} ${showNavbar ? styles.show_sidebar : ""}`}>
      <nav className={`${styles.nav} ${showNavbar ? styles.show_nav : styles.hover_nav}`}>
        <SidebarHead show={showNavbar} setShowNavbar={setShowNavbar} />
      </nav>
    </div>
  )
}
