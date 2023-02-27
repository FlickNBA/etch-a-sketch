const fitSquare = () => {
  let squareDiv = document.querySelector("#square");
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;
  console.log(`Width: ${windowWidth}, height: ${windowHeight}.`);
  // Determine which is bigger
  if (windowWidth > windowHeight) {
    squareDiv.style["width"] = `${windowHeight * 0.6667}px`;
    squareDiv.style["height"] = `${windowHeight * 0.6667}px`;
  } else {
    squareDiv.style["width"] = `${windowWidth * 0.6667}px`;
    squareDiv.style["height"] = `${windowWidth * 0.6667}px`;
  }
};

fitSquare();
window.addEventListener("resize", fitSquare);
