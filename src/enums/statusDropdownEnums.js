import { bannersStore } from "@store"

export const statusDropdownEnums = {
  "/banners": {
    store: bannersStore,
    statusNames: [
      { title: "Barchasi", value: null },
      { title: "Faol", value: 0 },
      { title: "Faol emas", value: 1 },
    ],
  }
}