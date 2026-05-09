import { profileStore } from "@store"

export const pageServices = () => {
  const user = profileStore(s => s.user);

  const pagesData = {
    "/profile-info": {
      pageName: "Profil ma’lumot",
      breadCrumps: [
        {path: "/", title: "Asosiy"},
        {path: "/profile-info", title: user?.["full_name"]}
      ],
    },
    "/banner-info": {
      pageName: "Banner haqida malumot",
      breadCrumps: [
        {path: "/banners", title: "Bannerlar menyusi"},
        {path: "/banners-info", title: "banner ma’lumoti"},
      ],
    },
    "/banner-info/add": {
      pageName: "Banner qo'shish",
      breadCrumps: [
        {path: "/banners", title: "Bannerlar menyusi"},
        {path: "/banners/add", title: "banner qo'shish"},
      ],
    },
    "/banner-info/edit/:id": {
      pageName: "Banner o’zgartirish",
      breadCrumps: [
        {path: "/banners", title: "Bannerlar menyusi"},
        {path: "", title: "o'zgartirish"},
      ],
    },
    "notification-info": {
      pageName: "Bildirishnoma haqida ma’lumot",
      breadCrumps: [
        {path: "/notification", title: "Bildirishnomalar"},
        {path: "/notification-info", title: "Bildirishnoma haqida ma’lumot"},
      ],
    },
    "notification-info/add": {
      pageName: "Bildirishnoma qo'shish",
      breadCrumps: [
        {path: "/notification", title: "Bildirishnomalar"},
        {path: "/notification-info", title: "Bildirishnoma qo'shish"},
      ],
    },
    "notification-info/edit/:id": {
      pageName: "Bildirishnomani o'zgartirish",
      breadCrumps: [
        {path: "/notification", title: "Bildirishnomalar"},
        {path: "", title: "Bildirishnomalar o'zgartirish"},
      ],
    },
  };

  return pagesData
}