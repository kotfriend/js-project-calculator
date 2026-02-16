import { buttons } from "./dom.js";
import { handleClick } from "./ui.js";

buttons.forEach(btn => {
  btn.addEventListener("click", () => handleClick(btn.dataset));
});