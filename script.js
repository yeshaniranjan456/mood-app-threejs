// mood to image filenames mapping
const moodToImages = {
  happy: ['seed01-000.png', 'seed01-002.png'],
  sad: ['seed01-001.png'],
  calm: ['seed01-003.png'],
  anxious: ['seed01-004.png'],
  excited: ['seed01-005.png']
};

const moods = Object.keys(moodToImages);
const moodButtonsDiv = document.getElementById('mood-buttons');
const artGalleryDiv = document.getElementById('art-gallery');

// create buttons for each mood
moods.forEach(mood => {
  const btn = document.createElement('button');
  btn.textContent = mood.charAt(0).toUpperCase() + mood.slice(1); // capitalize
  btn.onclick = () => showImagesForMood(mood);
  moodButtonsDiv.appendChild(btn);
});

// show images for the selected mood
function showImagesForMood(mood) {
  artGalleryDiv.innerHTML = ''; // clear previous images
  const images = moodToImages[mood] || [];
  if(images.length === 0) {
    artGalleryDiv.textContent = "No images for this mood yet.";
    return;
  }
  images.forEach(filename => {
    const img = document.createElement('img');
    img.src = './assets/' + filename; // assumes images are in /images folder
    img.alt = mood;
    img.style.width = '200px';
    img.style.margin = '10px';
    artGalleryDiv.appendChild(img);
  });
}
