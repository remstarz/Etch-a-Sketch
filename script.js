// Select grid container and resize button
const gridContainer = document.getElementById("grid-container");
const resizeButton = document.getElementById("resizeButton");

function createGrid(size) {
  gridContainer.innerHTML = '';  // Clear previous grid
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  // Create the grid squares
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    // Set hover effect for a fairy-tale feel
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 80%)`; // Random pastel color
    });

    gridContainer.appendChild(square);
  }
}

// Prompt user to enter grid size and recreate grid
resizeButton.addEventListener("click", () => {
  let newSize = parseInt(prompt("Enter new grid size (1-100):", "16"));
  if (newSize && newSize > 0 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert("Please enter a valid number between 1 and 100.");
  }
});

// Initialize with a 16x16 grid
createGrid(16);
