import {
  CardICon,
  FileDocsIcon,
  GridIcon,
  GrowthIcon,
  TileThumbIcon,
  UsersIcon,
  CardViewIcon,
  CoinsIcon,
  ImgIcon
} from "../icons";

export const links = [
  {
    icon: GrowthIcon,
    title: "Asosiy",
    path: "/"
  },
  {
    icon: TileThumbIcon,
    title: "Filiallar",
    path: "/branches"
  },
  {
    icon: CardICon,
    title: "Bannerlar",
    path: "/banners"
  },
  {
    icon: UsersIcon,
    title: "Kuriyerlar",
    path: "/couriers"
  },
  {
    icon: GridIcon,
    title: "Mijozlar",
    path: "/clients"
  },
  {
    icon: FileDocsIcon,
    title: "Adminlar",
    path: "/admins"
  },
  {
    icon: CardViewIcon,
    title: "Buyurtmalar",
    path: "/orders"
  },
  {
    icon: CoinsIcon,
    title: "Tranzaksiyalar",
    path: "/transactions"
  },
  {
    icon: ImgIcon,
    title: "Boshqalar",
    childrens: [
      {
        title: "Bildirishnomalar",
        path: "/notifications"
      },
      {
        title: "Statik sahifalar",
        path: "/static-pages"
      },
    ]
  }
]