const jsAlbum = document.getElementById('jsAlbum');
const lovebombAlbum = document.getElementById('lovebombAlbum');
const albumSection = document.getElementById('albumSection');
const jsSongs = document.getElementById('jsSongs');
const lovebombSongs = document.getElementById('lovebombSongs');
const albumAbout = document.getElementById('albumAbout');

/* toggle mechanic using list*/
lovebombAlbum.addEventListener('click', () => {
  /* removes jsAlbum from the front */
  jsAlbum.classList.remove('front');
  /* adds jsAlbum to the back */
  jsAlbum.classList.add('back');
  /* removes lovebombalbum from the back */
  lovebombAlbum.classList.remove('back');
   /* adds lovebombalbum to the front */
  lovebombAlbum.classList.add('front');
  albumSection.style.setProperty(
      '--album-bg',
      "url('assets/images/LovebombAlbumcover.jpeg')"
    );

  /* hides songs under jsAlbum by adding hidden*/
  jsSongs.classList.add('hidden');
  /* shows songs under lovebombalbum by removing hidden*/
  lovebombSongs.classList.remove('hidden');
  /* change album title and album about */
  albumAbout.innerHTML = `
    <h1>Love Bomb</h1>
    <p>Love Bomb is a brief but potent exploration of love in its many forms, delivered with raw emotion and smooth R&B sensibilities. Across four tracks, JasonTheWeen takes listeners on a journey through the highs and lows of romance, from infatuation and longing to reflection and nostalgia.</p>
  `;
});

jsAlbum.addEventListener('click', () => {
  lovebombAlbum.classList.remove('front');
  lovebombAlbum.classList.add('back');
  jsAlbum.classList.remove('back');
  jsAlbum.classList.add('front');
   albumSection.style.setProperty(
      '--album-bg',
      "url('assets/images/JSAlbumcover.jpeg')"
    );
  lovebombSongs.classList.add('hidden');
  jsSongs.classList.remove('hidden');
  albumAbout.innerHTML = `
    <h1>J+S</h1>
    <p>“J+S” marks a turning point for JasonTheWeen, revealing a more personal and emotional side of his artistry. The album blends soulful melodies with experimental sounds, capturing the contrast between his on-stream energy and his quiet, introspective creativity off-camera.</p>
  `;
});
