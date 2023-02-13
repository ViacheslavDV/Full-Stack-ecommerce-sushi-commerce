import { useRef } from "react";

export const useScrollToMenu = () => {
 const menuRef = useRef<HTMLDivElement>(null);
 const executeScroll = () =>
  menuRef.current?.scrollIntoView({
   behavior: "smooth",
  });
 console.log("Scrolled");
 return {
  menuRef,
  executeScroll,
 };
};
