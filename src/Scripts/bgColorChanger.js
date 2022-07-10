// access to ColorThief package (which imported by CDN)
const ColorThief = window.ColorThief;

document.body.onload = () => {
  const image = document.querySelector(
    "#root  section:nth-child(1) li:nth-child(1)  img"
  );

  const headerElem = document.querySelector("#root> .App > header"),
    mainElem = document.querySelector("#root > .App> main");

  const colorThief = new ColorThief();

  // get dominant color of image:
  let rgb = colorThief.getColor(image);
  rgb = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;

  headerElem.style += `; background-color : ${rgb}`;
  mainElem.style += `; background-image: linear-gradient(-45deg,#000 87%, ${rgb})`;
};
