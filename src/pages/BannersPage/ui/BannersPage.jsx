import { styles } from "./styles";

import { PageHeaderSecondary } from "@components";

import { bannersStore } from "@store";

import { useEffect } from "react";


export const BannersPage = () => {
  const apiGetBanners = bannersStore(s => s.apiGetBanners);

  useEffect(() => {
    apiGetBanners();
  }, [apiGetBanners]);

  return (
    <main className={`${styles.banners_page}`}>
      <PageHeaderSecondary />
    </main>
  );
};
