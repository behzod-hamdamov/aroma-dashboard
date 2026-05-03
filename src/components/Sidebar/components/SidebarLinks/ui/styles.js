export const styles = {
  sidebar_links: "p-[16px_12px] flex flex-col gap-2",
  heading_4: "font-bold text-[11px] leading-3.25 tracking-[2.2px] uppercase text-(--theme-color-gray) invinsible opacity-0 p-[0_16px] h-3.25",
  ul: "flex flex-col gap-2",

  // hover classlari
  hover_heading_4: "group-hover:opacity-100 group-hover:visible group-hover:delay-300",
  hover_link: "hover:bg-(--bg-hover-color) hover:text-(--brand-color)",
  hover_span: "group-hover:block",
  hover_icon: "group-hover/link:fill-(--brand-color)",
  hover_arrow_icon: "group-hover:block group-hover/link:fill-(--brand-color) duration-300",
  hover_sub_link: "hover:text-(--brand-color)",

  // show classlari
  show_heading_4: "opacity-100 visible",
  show_link: "bg-(--bg-hover-color) text-(--brand-color)",
  show_span: "block",

  //active classlari
  active_icon: "fill-(--brand-color)",
  active_link: "bg-(--bg-hover-color) text-(--brand-color)",
  active_arrow_icon: "rotate-90 fill-(--brand-color)",
  active_sub_links: "block",

  //disable classlari
  disable_link: "bg-none text-(--body-color)",
  disable_icon: "fill-(--theme-color-gray)",

  // hide classlari
  hide: "hidden",

  // Link classlari
  link: "flex p-[10px_12px] font-(family-name:--font-nunito) font-bold text-[15px] leading-5 tracking-[0.16px] items-center rounded-[5px] gap-3 cursor-pointer group/link duration-300",
  span: "duration-300 grow",
  icon: "duration-300 min-w-6",
  arrow_icon: "hidden fill-(--theme-color-gray)",
  sub_links: "flex flex-col gap-3 m-[6px_36px] overflow-hidden",
  sub_link: "min-w-48.5 text-[14px] leading-5 font-(family-name:--font-roboto) text-(--body-color) cursor-pointer duration-300",
}