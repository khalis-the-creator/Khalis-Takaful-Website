/* =============================================================
   NAV TOGGLE (mobile) — same behaviour as homepage
============================================================= */
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

/* =============================================================
   RENDER CAMPAIGN CARDS
============================================================= */
const grid = document.getElementById('campaignGrid');
const emptyState = document.getElementById('campaignEmpty');
const today = new Date();

function isExpired(validUntil) {
  if (!validUntil) return false;
  const end = new Date(validUntil + 'T23:59:59');
  return end < today;
}

const activeCampaigns = CAMPAIGNS.filter(c => !isExpired(c.validUntil));

if (activeCampaigns.length === 0) {
  emptyState.hidden = false;
} else {
  activeCampaigns.forEach(campaign => {
    const card = document.createElement('a');
    card.href = campaign.link;
    card.target = '_blank';
    card.rel = 'noopener';
    card.className = 'campaign-card';

    const posterWrap = document.createElement('div');
    posterWrap.className = 'campaign-poster';

    const img = document.createElement('img');
    img.src = campaign.poster;
    img.alt = campaign.title;
    img.loading = 'lazy';
    img.onerror = () => {
      posterWrap.classList.add('poster-fallback');
      posterWrap.innerHTML = `<span>${campaign.title}</span>`;
    };
    posterWrap.appendChild(img);

    const body = document.createElement('div');
    body.className = 'campaign-body';

    const tag = document.createElement('span');
    tag.className = 'campaign-tag';
    tag.textContent = campaign.tag || 'Promosi';

    const title = document.createElement('h3');
    title.textContent = campaign.title;

    body.appendChild(tag);
    body.appendChild(title);

    if (campaign.validUntil) {
      const validity = document.createElement('span');
      validity.className = 'campaign-validity';
      const formatted = new Date(campaign.validUntil).toLocaleDateString('ms-MY', { day: 'numeric', month: 'short', year: 'numeric' });
      validity.textContent = 'Sehingga ' + formatted;
      body.appendChild(validity);
    }

    const cta = document.createElement('span');
    cta.className = 'campaign-cta';
    cta.textContent = 'Lihat Kempen →';
    body.appendChild(cta);

    card.appendChild(posterWrap);
    card.appendChild(body);
    grid.appendChild(card);
  });
}
