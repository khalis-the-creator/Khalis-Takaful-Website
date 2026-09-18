/* =============================================================
   RENDER VIDEO HUB CARDS
============================================================= */
const videoGrid = document.getElementById('videoGrid');
const videoEmpty = document.getElementById('videoEmpty');

if (!VIDEOS || VIDEOS.length === 0) {
  videoEmpty.hidden = false;
} else {
  VIDEOS.forEach(video => {
    const card = document.createElement('a');
    card.href = video.link;
    card.target = '_blank';
    card.rel = 'noopener';
    card.className = 'video-placeholder small video-card-link';

    const ring = document.createElement('div');
    ring.className = 'play-ring small';
    ring.innerHTML = '<span class="play-triangle"></span>';

    const caption = document.createElement('p');
    caption.textContent = video.title;

    card.appendChild(ring);
    card.appendChild(caption);

    if (video.tag) {
      const tag = document.createElement('span');
      tag.className = 'campaign-tag video-tag';
      tag.textContent = video.tag;
      card.appendChild(tag);
    }

    videoGrid.appendChild(card);
  });
}
