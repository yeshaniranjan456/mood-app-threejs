const moodToImages = {
  happy: ["seed0000.png", "seed0003.png"],
  sad: ["seed0001.png"],
  calm: ["seed0002.png"],
  anxious: ["seed0004.png"],
  excited: ["seed0003.png"]
};

const moodButtonsDiv = document.getElementById("mood-buttons");
const artGalleryDiv = document.getElementById("art-gallery");

// Create mood buttons
Object.keys(moodToImages).forEach((mood) => {
  const btn = document.createElement("button");
  btn.innerText = mood;
  btn.onclick = () => showImagesForMood(mood);
  moodButtonsDiv.appendChild(btn);
});

// Display images for selected mood
function showImagesForMood(mood) {
  artGalleryDiv.innerHTML = "";
  moodToImages[mood].forEach((imageFile) => {
    const img = document.createElement("img");
    img.src = `assets/${imageFile}`;
    img.alt = mood;
    img.style.width = "200px";
    img.style.margin = "10px";
    artGalleryDiv.appendChild(img);
  });
}

