/* =============================================================
   NAV TOGGLE (mobile)
============================================================= */
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

/* =============================================================
   WHATSAPP HELPER
============================================================= */
const WHATSAPP_NUMBER = '60108609408'; // +60 10-860 9408
function buildWhatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/* =============================================================
   TOOL #1 — PROTECTION GAP ASSESSMENT
============================================================= */
const assessmentForm = document.getElementById('assessmentForm');
const assessmentResults = document.getElementById('assessmentResults');

const MEDICAL_TARGET = 1000000;

function statusIcon(pct) {
  if (pct >= 80) return '🟢';
  if (pct >= 40) return '🟡';
  return '🔴';
}

function fmt(n) {
  return Math.round(n).toLocaleString('en-MY');
}

assessmentForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('a-name').value.trim();
  const expenses = parseFloat(document.getElementById('a-expenses').value) || 0;
  const medical = parseFloat(document.getElementById('a-medical').value) || 0;
  const life = parseFloat(document.getElementById('a-life').value) || 0;
  const ci = parseFloat(document.getElementById('a-ci').value) || 0;

  const lifeTarget = expenses * 12 * 10;
  const ciTarget = expenses * 12 * 5;

  const medPct = MEDICAL_TARGET > 0 ? Math.min(100, (medical / MEDICAL_TARGET) * 100) : 0;
  const lifePct = lifeTarget > 0 ? Math.min(100, (life / lifeTarget) * 100) : 0;
  const ciPct = ciTarget > 0 ? Math.min(100, (ci / ciTarget) * 100) : 0;

  const medGap = Math.max(0, MEDICAL_TARGET - medical);
  const lifeGap = Math.max(0, lifeTarget - life);
  const ciGap = Math.max(0, ciTarget - ci);
  const totalGap = medGap + lifeGap + ciGap;

  document.getElementById('resultName').textContent = name || 'Anda';

  document.getElementById('medIcon').textContent = statusIcon(medPct);
  document.getElementById('lifeIcon').textContent = statusIcon(lifePct);
  document.getElementById('ciIcon').textContent = statusIcon(ciPct);

  document.getElementById('medPct').textContent = Math.round(medPct);
  document.getElementById('lifePct').textContent = Math.round(lifePct);
  document.getElementById('ciPct').textContent = Math.round(ciPct);

  document.getElementById('medGap').textContent = fmt(medGap);
  document.getElementById('lifeGap').textContent = fmt(lifeGap);
  document.getElementById('ciGap').textContent = fmt(ciGap);
  document.getElementById('totalGap').textContent = fmt(totalGap);

  assessmentResults.hidden = false;

  // animate bars on next frame so the transition actually plays
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.getElementById('medBar').style.width = medPct + '%';
      document.getElementById('lifeBar').style.width = lifePct + '%';
      document.getElementById('ciBar').style.width = ciPct + '%';
    });
  });

  const message =
    `Hai Khalis, ini laporan Financial Health Check saya:\n\n` +
    `Nama: ${name}\n` +
    `Perbelanjaan bulanan: RM${fmt(expenses)}\n\n` +
    `Perubatan: RM${fmt(medical)} / RM${fmt(MEDICAL_TARGET)} target (${Math.round(medPct)}%)\n` +
    `Hayat/Hibah: RM${fmt(life)} / RM${fmt(lifeTarget)} target (${Math.round(lifePct)}%)\n` +
    `Penyakit Kritikal: RM${fmt(ci)} / RM${fmt(ciTarget)} target (${Math.round(ciPct)}%)\n\n` +
    `Jumlah jurang perlindungan: RM${fmt(totalGap)}\n\n` +
    `Boleh kita bincang langkah seterusnya?`;

  document.getElementById('assessmentWhatsapp').href = buildWhatsappLink(message);

  assessmentResults.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

/* =============================================================
   TOOL #2 — QUICK QUOTE CALCULATOR
   Rates: MYR monthly premium, indexed by age 25–60 (index 0 = age 25)
   NOTE: Female / 1M Hibah / age 45 (index 20) corrected from a
   data anomaly (319.67) to an interpolated value between age 44
   (386.71) and age 46 (413.51) — pending confirmation of the
   official AIA rate table figure.
============================================================= */
const RATES = {
  350: {
    male: [81.76, 81.86, 81.95, 82.14, 82.23, 84.44, 87.89, 91.46, 95.38, 100.10, 104.73, 110.19, 116.02, 122.99, 130.94, 139.80, 146.69, 152.94, 159.87, 167.23, 175.25, 183.71, 192.55, 207.78, 227.59, 397.54, 441.78, 491.91, 550.32, 615.57, 690.69, 773.93, 866.41, 970.48, 1085.97, 1218.18],
    female: [54.70, 56.77, 59.84, 62.32, 66.49, 69.34, 73.30, 78.63, 83.41, 88.23, 94.48, 101.33, 109.55, 116.90, 127.01, 139.70, 143.11, 144.40, 146.60, 148.89, 150.79, 159.20, 163.86, 173.54, 181.79, 305.20, 347.40, 390.09, 433.27, 477.89, 522.12, 567.40, 610.49, 680.29, 759.18, 847.15]
  },
  500: {
    male: [116.81, 116.94, 117.08, 117.35, 117.49, 120.63, 125.56, 130.65, 136.25, 143.00, 149.61, 157.41, 165.74, 175.70, 187.05, 199.73, 209.55, 218.49, 228.38, 238.90, 250.36, 262.44, 275.06, 296.83, 325.13, 567.91, 631.12, 702.73, 786.15, 879.38, 986.70, 1105.60, 1237.73, 1386.40, 1551.37, 1740.25],
    female: [78.15, 81.10, 85.49, 89.04, 95.00, 99.07, 104.71, 112.33, 119.16, 126.05, 134.96, 144.76, 156.50, 166.99, 181.45, 199.58, 204.44, 206.28, 209.44, 212.69, 215.42, 227.43, 234.09, 247.92, 259.70, 436.00, 496.29, 557.27, 618.95, 682.69, 745.89, 810.58, 872.12, 971.85, 1084.55, 1210.21]
  },
  1000: {
    male: [212.38, 212.63, 212.87, 213.36, 213.61, 219.32, 228.29, 237.55, 247.72, 259.22, 272.02, 286.20, 301.35, 319.45, 340.09, 363.14, 381.01, 397.26, 415.25, 434.38, 455.20, 477.16, 500.13, 539.68, 591.15, 1032.57, 1147.49, 1277.71, 1429.38, 1598.88, 1794.01, 2010.20, 2250.43, 2520.74, 2820.68, 3164.10],
    // index 20 (age 45) corrected: 319.67 -> 400.11 (interpolated between age 44 & 46)
    female: [142.08, 147.45, 155.44, 161.88, 172.72, 180.12, 190.38, 204.23, 216.67, 229.19, 245.40, 263.22, 284.55, 303.63, 329.91, 362.87, 371.70, 375.05, 380.79, 386.71, 400.11, 413.51, 425.62, 450.76, 472.19, 792.74, 902.34, 1013.23, 1125.38, 1241.25, 1356.17, 1473.78, 1585.69, 1767.00, 1971.90, 2200.40]
  }
};

const PLAN_INFO = {
  basic: { label: 'RM350,000 Hibah' },
  standard: { label: 'RM500,000 Hibah' },
  premium: { label: 'RM1,000,000 Hibah' }
};

let lastQuote = null; // stores {name, age, gender, premiums}

const quoteForm = document.getElementById('quoteForm');
const pricingGrid = document.getElementById('pricingGrid');
const ageWarning = document.getElementById('ageWarning');
const quoteDisclaimer = document.getElementById('quoteDisclaimer');

function buildPlanMessage(planKey) {
  const info = PLAN_INFO[planKey];
  const premium = lastQuote.premiums[planKey];
  const genderLabel = lastQuote.gender === 'male' ? 'Lelaki' : 'Perempuan';
  return (
    `Hai Khalis, saya berminat dengan pelan ${info.label} (A-Life Sejuta Makna).\n\n` +
    `Nama: ${lastQuote.name}\n` +
    `Umur: ${lastQuote.age}\n` +
    `Jantina: ${genderLabel}\n` +
    `Anggaran premium: RM${premium.toFixed(2)} / bulan\n\n` +
    `Boleh kita bincang langkah seterusnya?`
  );
}

quoteForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('q-name').value.trim();
  const age = parseInt(document.getElementById('q-age').value, 10);
  const gender = document.getElementById('q-gender').value;

  if (!age || age < 25 || age > 60 || !gender) {
    ageWarning.hidden = false;
    pricingGrid.hidden = true;
    quoteDisclaimer.hidden = true;
    return;
  }
  ageWarning.hidden = true;

  const idx = age - 25;
  const premiums = {
    basic: RATES[350][gender][idx],
    standard: RATES[500][gender][idx],
    premium: RATES[1000][gender][idx]
  };

  document.getElementById('premBasic').textContent = 'RM' + premiums.basic.toFixed(2);
  document.getElementById('premStandard').textContent = 'RM' + premiums.standard.toFixed(2);
  document.getElementById('premPremium').textContent = 'RM' + premiums.premium.toFixed(2);

  lastQuote = { name, age, gender, premiums };

  // set each card's direct WhatsApp button now that we have a quote
  document.querySelectorAll('.plan-wa-btn').forEach(btn => {
    const planKey = btn.dataset.plan;
    btn.href = buildWhatsappLink(buildPlanMessage(planKey));
  });

  pricingGrid.hidden = false;
  quoteDisclaimer.hidden = false;
  pricingGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
