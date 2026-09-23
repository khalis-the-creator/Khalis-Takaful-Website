/* =============================================================
   TOOL #3 — A-LIFE KRITIKAL PROTECTOR QUICK QUOTE
   =============================================================
   Rates: MYR monthly premium, Non-Smoker only, indexed by age
   25–60 (index 0 = age 25). Each entry is the plan's BASE
   coverage & premium as printed on the official rate card —
   note the base coverage amount itself changes partway through
   the age range once the RM50,000 tier alone would fall below
   AIA's RM50/month minimum contribution:

   - Male, Non-Smoker:   RM100,000 base for ages 25–35, then
                         RM50,000 base for ages 36–60
   - Female, Non-Smoker: RM100,000 base for ages 25–38, then
                         RM50,000 base for ages 39–60

   Basic  = base coverage & premium exactly as in the table
   Standard = base × 2 (coverage and premium)
   Premium  = base × 4 (coverage and premium)
   (confirmed linear: RM50,000 → RM50 means RM100,000 → RM100)
============================================================= */

const KRITIKAL_RATES = {
  male: [
    { coverage: 100000, premium: 66.50 },  // 25
    { coverage: 100000, premium: 69.25 },  // 26
    { coverage: 100000, premium: 72.08 },  // 27
    { coverage: 100000, premium: 75.17 },  // 28
    { coverage: 100000, premium: 78.50 },  // 29
    { coverage: 100000, premium: 81.92 },  // 30
    { coverage: 100000, premium: 85.67 },  // 31
    { coverage: 100000, premium: 89.58 },  // 32
    { coverage: 100000, premium: 93.83 },  // 33
    { coverage: 100000, premium: 98.25 },  // 34
    { coverage: 100000, premium: 103.00 }, // 35
    { coverage: 50000,  premium: 54.04 },  // 36
    { coverage: 50000,  premium: 56.75 },  // 37
    { coverage: 50000,  premium: 59.67 },  // 38
    { coverage: 50000,  premium: 62.79 },  // 39
    { coverage: 50000,  premium: 66.12 },  // 40
    { coverage: 50000,  premium: 69.71 },  // 41
    { coverage: 50000,  premium: 73.58 },  // 42
    { coverage: 50000,  premium: 77.75 },  // 43
    { coverage: 50000,  premium: 82.25 },  // 44
    { coverage: 50000,  premium: 87.08 },  // 45
    { coverage: 50000,  premium: 92.33 },  // 46
    { coverage: 50000,  premium: 98.12 },  // 47
    { coverage: 50000,  premium: 104.50 }, // 48
    { coverage: 50000,  premium: 111.54 }, // 49
    { coverage: 50000,  premium: 119.42 }, // 50
    { coverage: 50000,  premium: 123.83 }, // 51
    { coverage: 50000,  premium: 129.08 }, // 52
    { coverage: 50000,  premium: 133.21 }, // 53
    { coverage: 50000,  premium: 138.37 }, // 54
    { coverage: 50000,  premium: 143.67 }, // 55
    { coverage: 50000,  premium: 149.08 }, // 56
    { coverage: 50000,  premium: 153.46 }, // 57
    { coverage: 50000,  premium: 165.42 }, // 58
    { coverage: 50000,  premium: 166.17 }, // 59
    { coverage: 50000,  premium: 170.04 }  // 60
  ],
  female: [
    { coverage: 100000, premium: 54.25 },  // 25
    { coverage: 100000, premium: 56.42 },  // 26
    { coverage: 100000, premium: 58.67 },  // 27
    { coverage: 100000, premium: 61.00 },  // 28
    { coverage: 100000, premium: 63.50 },  // 29
    { coverage: 100000, premium: 66.08 },  // 30
    { coverage: 100000, premium: 68.92 },  // 31
    { coverage: 100000, premium: 71.75 },  // 32
    { coverage: 100000, premium: 74.83 },  // 33
    { coverage: 100000, premium: 78.08 },  // 34
    { coverage: 100000, premium: 81.42 },  // 35
    { coverage: 100000, premium: 85.00 },  // 36
    { coverage: 100000, premium: 88.83 },  // 37
    { coverage: 100000, premium: 92.92 },  // 38
    { coverage: 50000,  premium: 52.25 },  // 39
    { coverage: 50000,  premium: 52.79 },  // 40
    { coverage: 50000,  premium: 53.29 },  // 41
    { coverage: 50000,  premium: 60.96 },  // 42
    { coverage: 50000,  premium: 64.46 },  // 43
    { coverage: 50000,  premium: 71.42 },  // 44
    { coverage: 50000,  premium: 78.79 },  // 45
    { coverage: 50000,  premium: 86.83 },  // 46
    { coverage: 50000,  premium: 93.50 },  // 47
    { coverage: 50000,  premium: 98.50 },  // 48
    { coverage: 50000,  premium: 104.12 }, // 49
    { coverage: 50000,  premium: 110.50 }, // 50
    { coverage: 50000,  premium: 111.00 }, // 51
    { coverage: 50000,  premium: 111.50 }, // 52
    { coverage: 50000,  premium: 112.00 }, // 53
    { coverage: 50000,  premium: 112.50 }, // 54
    { coverage: 50000,  premium: 113.00 }, // 55
    { coverage: 50000,  premium: 113.50 }, // 56
    { coverage: 50000,  premium: 114.00 }, // 57
    { coverage: 50000,  premium: 114.50 }, // 58
    { coverage: 50000,  premium: 115.00 }, // 59
    { coverage: 50000,  premium: 115.29 }  // 60
  ]
};

const KRITIKAL_PLAN_INFO = {
  basic: {
    multiplier: 1,
    features: [
      "Pampasan tunai sekaligus apabila didiagnosis sakit kritikal",
      "Perlindungan asas mengikut had minimum penyertaan",
      "Sesuai untuk permulaan perlindungan tanpa komitmen tinggi"
    ]
  },
  standard: {
    multiplier: 2,
    features: [
      "2× ganda jumlah pampasan berbanding pelan Basic",
      "Perlindungan lebih menyeluruh untuk keluarga muda",
      "Keseimbangan baik antara perlindungan dan premium"
    ]
  },
  premium: {
    multiplier: 4,
    features: [
      "4× ganda jumlah pampasan berbanding pelan Basic",
      "Perlindungan maksimum untuk ketenangan fikiran",
      "Disyorkan untuk ketua keluarga & profesional"
    ]
  }
};

let lastKritikalQuote = null; // {name, age, gender, plans: {basic, standard, premium}}

const kritikalForm = document.getElementById('kritikalForm');
const kritikalPricingGrid = document.getElementById('kritikalPricingGrid');
const kritikalAgeWarning = document.getElementById('kritikalAgeWarning');
const kritikalDisclaimer = document.getElementById('kritikalDisclaimer');

function fmtRM(n) {
  return Math.round(n).toLocaleString('en-MY');
}

function buildKritikalPlanMessage(planKey) {
  const plan = lastKritikalQuote.plans[planKey];
  const planLabel = planKey.charAt(0).toUpperCase() + planKey.slice(1);
  const genderLabel = lastKritikalQuote.gender === 'male' ? 'Lelaki' : 'Perempuan';
  return (
    `Hai Khalis, saya berminat dengan pelan ${planLabel} (A-Life Kritikal Protector).\n\n` +
    `Nama: ${lastKritikalQuote.name}\n` +
    `Umur: ${lastKritikalQuote.age}\n` +
    `Jantina: ${genderLabel}\n` +
    `Perlindungan: RM${fmtRM(plan.coverage)}\n` +
    `Anggaran premium: RM${plan.premium.toFixed(2)} / bulan\n\n` +
    `Boleh kita bincang langkah seterusnya?`
  );
}

kritikalForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('k-name').value.trim();
  const age = parseInt(document.getElementById('k-age').value, 10);
  const gender = document.getElementById('k-gender').value;

  if (!age || age < 25 || age > 60 || !gender) {
    kritikalAgeWarning.hidden = false;
    kritikalPricingGrid.hidden = true;
    kritikalDisclaimer.hidden = true;
    return;
  }
  kritikalAgeWarning.hidden = true;

  const idx = age - 25;
  const base = KRITIKAL_RATES[gender][idx];

  const plans = {
    basic: { coverage: base.coverage, premium: base.premium },
    standard: { coverage: base.coverage * 2, premium: base.premium * 2 },
    premium: { coverage: base.coverage * 4, premium: base.premium * 4 }
  };

  document.getElementById('kritikalTitleBasic').textContent = 'RM' + fmtRM(plans.basic.coverage) + ' Perlindungan';
  document.getElementById('kritikalTitleStandard').textContent = 'RM' + fmtRM(plans.standard.coverage) + ' Perlindungan';
  document.getElementById('kritikalTitlePremium').textContent = 'RM' + fmtRM(plans.premium.coverage) + ' Perlindungan';

  document.getElementById('kritikalPremBasic').textContent = 'RM' + plans.basic.premium.toFixed(2);
  document.getElementById('kritikalPremStandard').textContent = 'RM' + plans.standard.premium.toFixed(2);
  document.getElementById('kritikalPremPremium').textContent = 'RM' + plans.premium.premium.toFixed(2);

  lastKritikalQuote = { name, age, gender, plans };

  document.querySelectorAll('.kritikal-wa-btn').forEach(btn => {
    const planKey = btn.dataset.plan;
    btn.href = buildWhatsappLink(buildKritikalPlanMessage(planKey));
  });

  kritikalPricingGrid.hidden = false;
  kritikalDisclaimer.hidden = false;
  kritikalPricingGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

/* --- Modal --- */
const kritikalModal = document.getElementById('kritikalModal');
const kritikalModalClose = document.getElementById('kritikalModalClose');

document.querySelectorAll('.kritikal-detail-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (!lastKritikalQuote) return;
    const planKey = btn.dataset.plan;
    const info = KRITIKAL_PLAN_INFO[planKey];
    const plan = lastKritikalQuote.plans[planKey];

    document.getElementById('kritikalModalTag').textContent = planKey.charAt(0).toUpperCase() + planKey.slice(1);
    document.getElementById('kritikalModalTitle').textContent = 'RM' + fmtRM(plan.coverage) + ' Perlindungan';
    document.getElementById('kritikalModalPremium').textContent = 'RM' + plan.premium.toFixed(2);

    const featuresList = document.getElementById('kritikalModalFeatures');
    featuresList.innerHTML = '';
    info.features.forEach(f => {
      const li = document.createElement('li');
      li.textContent = f;
      featuresList.appendChild(li);
    });

    document.getElementById('kritikalModalWhatsapp').href = buildWhatsappLink(buildKritikalPlanMessage(planKey));

    kritikalModal.hidden = false;
  });
});

kritikalModalClose.addEventListener('click', () => { kritikalModal.hidden = true; });
kritikalModal.addEventListener('click', (e) => {
  if (e.target === kritikalModal) kritikalModal.hidden = true;
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !kritikalModal.hidden) kritikalModal.hidden = true;
});
