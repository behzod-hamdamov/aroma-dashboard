export const styles = {
  // overlay stili
  style_overlay: "fixed w-full min-h-screen flex items-center justify-center bg-(--bg-overlay) z-100 cursor-pointer",
  
  // input stillari
  style_input_box: "flex flex-col w-full min-h-23.75",
  style_input: "p-[11px_16px] rounded-[4px] border data-[error=false]:border-(--border-color) data-[error=true]:border-(--error-color) bg-(--bg-none) font-(family-name:--font-robot placeholder:opacity-50 outline-0 data-[error=false]:focus:shadow-[0_0_0_3px_#b79f7c1a] data-[error=false]:focus:border-(--brand-color) duration-300 data-[error=true]:focus:shadow-[0_0_0_3px_#e853471a]",
  style_input_label: "leading-5.75 font-medium text-[14px] font-(family-name:font-roboto) text-(--theme-color-secondary) mb-2",

  // button stillari
  style_button_brand: "p-[8px_24px] rounded-[3px] bg-(--brand-color) text-(color-none) font-(family-name:--font-nunito) font-bold text-[13px] leading-5 tracking-[0.26px] outline-0 flex items-center cursor-pointer gap-3 border-0 text-(--color-none)",
  style_button_danger: "p-[8px_30px] rounded-[3px] bg-(--error-color) text-(--color-none) font-(family-name:--font-nunito) font-normal text-[13px] leading-5 tracking-[0.26px] flex flex-col items-center cursor-pointer",
  style_button_secondary: "bg-(--bg-none) border border-(--border-color) p-[8px_18px] leading-5 font-bold text-[13px] tracking-[0.26px] flex items-center gap-3 text-(--body-color) rounded-[4px] cursor-pointer",

  // modal stillari
  style_modal: "p-6 bg-(--bg-none) rounded-[6px] gap-5 flex flex-col cursor-auto",
  style_modal_head_title: "font-(family-name:--font-roboto) leading-5.5 font-bold text-[20px] tracking-[-0.16px] font-(family-name:--font-roboto) text-(--theme-color-secondary)",
  style_modal_paragraph: "text-center font-normal text-[16px] leading-[23.1px] font-(family-name:--font-roboto) text-(--body-color)",

  // error text stili
  style_input_error_text: "text-[11px] italic font-(--font-roboto) text-(--error-color)",

  // page title stillari
  style_page_head_title: "leading-8 font-(family-name:--font-nunito) text-[28px] font-bold tracking-[-0.84px] text-(--theme-color-secondary) mb-2",
  
  // table stillari
  style_box: "w-full p-6 rounded-[4px] border border-(--border-color) bg-(--bg-none)",
  style_table_head_title: "text-(--theme-color-secondary) tracking-[-0.2px] leading-5.5 text-[20px] font-bold font-(family-name:--font-nunito) p-[4px_0_23px]",
  style_table_vector: "w-full h-0.25 bg-(--border-color)",
  style_table_primary: "w-full rounded-[6px] border border-(--border-color) overflow-hidden flex flex-col",
  style_table_primary_row: "p-[12px_20px] flex items-center",
  style_table_primary_col: "min-w-100 flex gap-2.5 min-h-6 font-(family-name:--font-roboto) leading-[23.1px] text-[14px]",
  style_table_primary_col_title: "grow font-normal text-(--theme-color-gray)",
  style_table_primary_col_body: "grow-3 font-semibold text-(--theme-color-secondary)",
}