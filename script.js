fetch('mood_to_images.json')
  .then(response => response.json())
  .then(data => {
    const moodButtons = document.getElementById('mood-buttons');
    const gallery = document.getElementById('art-gallery');

    Object.keys(data).forEach(mood => {
      const button = document.createElement('button');
      button.innerText = mood;
      button.onclick = () => {
        gallery.innerHTML = '';
        data[mood].forEach(filename => {
          const img = document.createElement('img');
          img.src = `assets/${filename}`;
          img.alt = `${mood} artwork`;
          gallery.appendChild(img);
        });
      };
      moodButtons.appendChild(button);
    });
  });
