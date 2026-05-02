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
    icon: <GrowthIcon />,
    title: "Asosiy",
    path: "/"
  },
  {
    icon: <TileThumbIcon />,
    title: "Filiallar",
    path: "/branches"
  },
  {
    icon: <UsersIcon />,
    title: "Kuriyerlar",
    path: "/couriers"
  },
  {
    icon: <CardICon />,
    title: "Bannerlar",
    path: "/banners"
  },
  {
    icon: <GridIcon />,
    title: "Mijozlar",
    path: "/clients"
  },
  {
    icon: <FileDocsIcon />,
    title: "Adminlar",
    path: "/admins"
  },
  {
    icon: <CardViewIcon />,
    title: "Buyurtmalar",
    path: "/orders"
  },
  {
    icon: <CoinsIcon />,
    title: "Tranzaksiyalar",
    path: "/transactions"
  },
  {
    icon: <ImgIcon />,
    title: "boshqalar",
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