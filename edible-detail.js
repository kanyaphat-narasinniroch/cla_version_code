// edible-detail.js — สร้างหน้ารายละเอียดพืชกินได้จาก edible-data.js
// เปิดหน้านี้ด้วย edible-detail.html?id=chaom (id ดูได้ใน edible-data.js)

(function () {
  const host = document.getElementById("edible-detail");
  const missing = document.getElementById("edible-missing");
  const pager = document.getElementById("edible-pager");
  const herbs = window.EDIBLES || [];
  const id = new URLSearchParams(location.search).get("id");
  const index = herbs.findIndex((h) => h.id === id);

  if (index < 0) {
    missing.hidden = false;
    return;
  }
  const herb = herbs[index];
  document.title = herb.th + " / " + herb.en + " - Little Roots";

  const pair = (p) => p.th + " (" + p.en + ")";
  const listItems = (arr) =>
    arr.map((p) => `<li><span class="th">${p.th}</span><span class="en">${p.en}</span></li>`).join("");
  
  // sprite คนนำทาง (ตัวเดียวกับในหน้ารายการ)
  const npc = `
    <svg class="detail-npc" fill="none" viewBox="0 0 32 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect fill="#2b1d0c" height="8" width="16" x="8" y="2" /><rect fill="#2b1d0c" height="8" width="4" x="6" y="6" />
      <rect fill="#2b1d0c" height="8" width="4" x="22" y="6" /><rect fill="#ffd5b5" height="12" width="16" x="8" y="8" />
      <rect fill="#1b1b1b" height="4" width="2" x="10" y="12" /><rect fill="#1b1b1b" height="4" width="2" x="18" y="12" />
      <rect fill="#d95763" height="2" width="4" x="13" y="16" /><rect fill="#387b3e" height="12" width="20" x="6" y="20" />
      <rect fill="#ffccaa" height="4" width="8" x="12" y="20" /><rect fill="#ffd5b5" height="6" width="4" x="24" y="16" />
      <rect fill="#ffd5b5" height="6" width="4" x="2" y="22" /><rect fill="#2b4263" height="8" width="6" x="8" y="32" />
      <rect fill="#2b4263" height="8" width="6" x="18" y="32" />
    </svg>`;

  host.innerHTML = `
    <section class="detail-left">
      <figure class="photo-card">
        <span class="photo-label"><b>รูปภาพจริง</b> / Real Photo</span>
        <img class="photo-main" src="img/edible/${herb.photo}" alt="${herb.th} (${herb.en})">
        <div class="art-chip">
          <span class="art-label"><b>ภาพ 8-bit</b><br>8-bit Art</span>
          <div class="art-box">
            <img src="img/edible/8bit/${herb.photo.replace(/\.[^/.]+$/, '')}_8bit.png" alt="${herb.th} 8-bit">
          </div>
        </div>
      </figure>
      <h1 class="herb-title">${herb.th} <span class="slash">/</span> <span class="title-en">${herb.en}</span></h1>
      <p class="herb-sci"><i>${herb.sci}</i> ${herb.author}</p>
      <p class="herb-family">Family: ${herb.family}</p>
      <div class="herb-attrs">
        <span class="attr-label">Common attributes:</span>
        <span class="mini-tag tag-taste attr-pill">${pair(herb.taste)}</span>
        <span class="mini-tag tag-property-warm attr-pill">🍽️ ${pair(herb.part)}</span>
      </div>
    </section>

    <section class="detail-right">
      ${npc}
      <div class="parchment">
        <div class="detail-tabs" role="tablist">
          <button class="detail-tab active" data-tab="props" role="tab" type="button"><b>คุณค่า &amp; ประโยชน์</b><span>Benefits</span></button>
          <button class="detail-tab" data-tab="usage" role="tab" type="button"><b>วิธีกิน &amp; ข้อมูล</b><span>Eating &amp; Data</span></button>
          <button class="detail-tab" data-tab="caution" role="tab" type="button"><b>ข้อควรระวัง</b><span>Precautions</span></button>
        </div>
        <div class="tab-panels">
          <div class="tab-panel" data-panel="props" role="tabpanel">
            <ul class="bullet-list">${listItems(herb.props)}</ul>
          </div>
          <div class="tab-panel" data-panel="usage" role="tabpanel" hidden>
            <h2 class="panel-heading"><b>วิธีกิน &amp; วิธีปรุง</b> / Eating &amp; Cooking</h2>
            <ul class="bullet-list">${listItems(herb.usage)}</ul>
            <h2 class="panel-heading"><b>ข้อมูลพืช</b> / Plant Data</h2>
            <dl class="data-grid">
              <dt>ส่วนที่กิน / Part eaten</dt><dd>${pair(herb.part)}</dd>
              <dt>รสชาติ / Flavor</dt><dd>${pair(herb.taste)}</dd>
              <dt>เมนูเด่น / Popular dishes</dt><dd>${pair(herb.dishes)}</dd>
              <dt>กลุ่ม / Group</dt><dd>${pair(herb.group)}</dd>
            </dl>
          </div>
          <div class="tab-panel" data-panel="caution" role="tabpanel" hidden>
            <h2 class="panel-heading"><span class="warn-icon">⚠</span> <b>ข้อควรระวัง</b> / Precautions</h2>
            <ul class="bullet-list">${listItems(herb.cautions)}</ul>
            <p class="doctor-note">หากแพ้อาหาร มีโรคประจำตัว หรือกำลังใช้ยา ควรปรึกษาแพทย์ก่อนกินในปริมาณมาก<br>
              <span class="en">If you have a food allergy or a medical condition, or take medication, consult a doctor before eating large amounts.</span></p>
          </div>
        </div>
      </div>
    </section>`;

  // ---------- ยังไม่มีไฟล์รูป: โชว์ emoji แทนรูปจริง และซ่อนรูป 8-bit ----------
  const mainImg = host.querySelector(".photo-main");
  const artChip = host.querySelector(".art-chip");
  const artImg = host.querySelector(".art-box img");
  function photoMissing() {
    const box = document.createElement("div");
    box.className = "photo-main photo-fallback";
    box.textContent = herb.emoji;
    mainImg.replaceWith(box);
  }
  if (mainImg.complete && mainImg.naturalWidth === 0) photoMissing();
  else mainImg.addEventListener("error", photoMissing);
  // กล่อง 8-bit โชว์ตามตำแหน่งเดิมเสมอ (มุมขวาล่างของรูป) ถ้ายังไม่มีไฟล์ให้โชว์ emoji แทน
  function artMissing() {
    const ph = document.createElement("span");
    ph.className = "art-placeholder";
    ph.textContent = herb.emoji;
    artImg.replaceWith(ph);
  }
  if (artImg.complete && artImg.naturalWidth === 0) artMissing();
  else artImg.addEventListener("error", artMissing);

  // ---------- สลับแท็บ ----------
  const tabs = Array.from(host.querySelectorAll(".detail-tab"));
  const panels = Array.from(host.querySelectorAll(".tab-panel"));
  function showTab(name) {
    tabs.forEach((t) => t.classList.toggle("active", t.dataset.tab === name));
    panels.forEach((p) => (p.hidden = p.dataset.panel !== name));
  }
  tabs.forEach((t) => t.addEventListener("click", () => showTab(t.dataset.tab)));

  // ---------- ปุ่มพืชก่อนหน้า / ถัดไป ----------
  const prev = herbs[(index + herbs.length - 1) % herbs.length];
  const next = herbs[(index + 1) % herbs.length];
  pager.innerHTML = `
    <a class="pager-link" href="edible-detail.html?id=${prev.id}">← ${prev.th}</a>
    <a class="pager-link" href="edible-detail.html?id=${next.id}">${next.th} →</a>`;
  pager.hidden = false;
})();
