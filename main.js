const squareDiv = document.querySelector("#square");

const fitSquare = () => {
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;
  // console.log(`Width: ${windowWidth}, height: ${windowHeight}.`);
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

const setAndFillSquare = (n) => {
  squareDiv.style["grid-template-columns"] = `repeat(${n}, 1fr)`;
  squareDiv.style["grid-template-rows"] = `repeat(${n}, 1fr)`;

  // CSS for end of first row and beginning of last one - I do this using JS to learn, I know setting it with CSS is easier.

  // document.querySelector("#square div:nth-child(16)").style[
  //   "background-color"
  // ] = "red";

  let newSquares = [];
  for (let i = 0; i < n * n; i++) {
    let newSquare = document.createElement("div");
    // newSquare.textContent = i + 1;
    newSquares.push(newSquare);
  }
  newSquares.forEach((nSQ) => {
    squareDiv.appendChild(nSQ);
  });

  document.querySelector(`#square div:nth-child(${n})`).style["border-top-right-radius"] = "0.5rem";

  document.querySelector(`#square div:nth-child(${n * (n - 1) + 1})`).style["border-bottom-left-radius"] = "0.5rem";
};

setAndFillSquare(16);
