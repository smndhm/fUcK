import "./style.css";
import svg from "./svg/border.svg?raw";

let hue = Math.floor(Math.random() * 360);
let saturation = Math.floor(Math.random() * 101);

const minLightness = 0;
const maxLightness = 50;

let lightness =
  Math.floor(Math.random() * (maxLightness - minLightness + 1)) + minLightness;

const getHSL = (hue: number, saturation: number, lightness: number): string =>
  `hsl(${hue} ${saturation}% ${lightness}%)`;

const setColor = () => {
  document.documentElement.style.setProperty(
    "--fUcK-background",
    getHSL(hue, saturation, lightness)
  );
  document.documentElement.style.setProperty(
    "--fUcK-color",
    getHSL(hue, saturation, lightness + 30)
  );
  console.log({ hue, saturation, lightness });
};

document.body.insertAdjacentHTML("afterbegin", svg);

setInterval(() => {
  hue = (hue + 1) % 360;
  setColor();
}, 10);
