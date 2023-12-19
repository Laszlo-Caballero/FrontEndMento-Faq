import { useState } from "react";

function FAQs({ titulo, descripcion }) {
  const [open, setOpen] = useState(false);
  const Styles = `font-WorkSansSemiBlod list-none after:${
    !open ? "content-Open" : "content-Close"
  } flex items-center justify-between sm:text-lg  
  cursor-pointer sm:hover:text-[#a43ed1] pb-5 Mobile:hover:text-[#2f1533] Mobile:text-sm Mobile:gap-6`;
  const ToggleOpen = () => {
    setOpen(!open);
  };
  return (
    <details
      open={open}
      onToggle={ToggleOpen}
      className="mt-8 border-b-2 border-[#f9f0ff]"
    >
      <summary className={Styles}>{titulo}</summary>
      <p className="whitespace-normal text-[#828282] text-base my-5">
        {descripcion}
      </p>
    </details>
  );
}

export default FAQs;
