import { useEffect, useState } from "react";

export const useScrollToTop = () => {
 const [showButton, setShowButton] = useState(false);
 useEffect(() => {
  window.addEventListener("scroll", () => {
   if (window.scrollY > 400) {
    setShowButton(true);
   } else setShowButton(false);
  });
 }, []);

 const scrollToTop = () => {
  window.scrollTo({
   top: 0,
   behavior: "smooth",
  });
 };
 return {
  scrollToTop,
  setShowButton,
  showButton,
 };
};
