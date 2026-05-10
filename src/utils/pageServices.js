import { profileStore } from "@store"

export const pageServices = () => {
  const user = profileStore(s => s.user);

  const pagesData = {
    // profile page
    "/profile-info": {
      pageName: "Profil ma’lumot",
      breadCrumps: [
        {path: "/", title: "Asosiy"},
        {path: "/profile-info", title: user?.["full_name"]}
      ],
    },

    // banners page
    "/banners": {
      pageName: "Bannerlar menyusi"
    },
    "/banner-info": {
      pageName: "Banner haqida malumot",
      breadCrumps: [
        {path: "/banners", title: "Bannerlar menyusi"},
        {path: "/banners-info", title: "banner ma’lumoti"},
      ],
    },
    "/banners/add": {
      pageName: "Banner qo'shish",
      breadCrumps: [
        {path: "/banners", title: "Bannerlar menyusi"},
        {path: "/banners/add", title: "banner qo'shish"},
      ],
    },
    "/banners/edit/:id": {
      pageName: "Banner o’zgartirish",
      breadCrumps: [
        {path: "/banners", title: "Bannerlar menyusi"},
        {path: "", title: "o'zgartirish"},
      ],
    },

    // notifications page
    "notifications": {
      pageName: "Bildirishnomalar"
    },
    "notification-info": {
      pageName: "Bildirishnoma haqida ma’lumot",
      breadCrumps: [
        {path: "/notification", title: "Bildirishnomalar"},
        {path: "/notification-info", title: "Bildirishnoma haqida ma’lumot"},
      ],
    },
    "notifications/add": {
      pageName: "Bildirishnoma qo'shish",
      breadCrumps: [
        {path: "/notification", title: "Bildirishnomalar"},
        {path: "/notification-info", title: "Bildirishnoma qo'shish"},
      ],
    },
    "notifications/edit/:id": {
      pageName: "Bildirishnomani o'zgartirish",
      breadCrumps: [
        {path: "/notification", title: "Bildirishnomalar"},
        {path: "", title: "Bildirishnomalar o'zgartirish"},
      ],
    },
  };

  return pagesData
}