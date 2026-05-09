import { pageServices } from "@utils"

import { useLocation } from "react-router"

export const usePages = () => {
  const { pathname } = useLocation()
  const pagesData = pageServices()
  const normalizedPath = pathname.replace(/[a-f0-9-]{36}/g, ":id")
  return pagesData[normalizedPath]
}