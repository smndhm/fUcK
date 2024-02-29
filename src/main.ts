import './style.css'
import svg from './svg/border.svg?raw'

const hue = Math.floor(Math.random() * 360);
const saturation = Math.floor(Math.random() * 101);
const minLightness = 0; // Valeur minimale de luminosité
const maxLightness = 50; // Valeur maximale de luminosité
const lightness = Math.floor(Math.random() * (maxLightness - minLightness + 1)) + minLightness;

console.log({ hue, saturation, lightness });


document.documentElement.style.setProperty('--fUcK-background', `hsl(${hue} ${saturation} ${lightness})`);
document.documentElement.style.setProperty('--fUcK-color', `hsl(${hue} ${saturation} ${lightness + 30})`);

document.body.insertAdjacentHTML('afterbegin', svg);
