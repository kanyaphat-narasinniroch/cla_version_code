// edible.js — หน้ารายการพืชกินได้ (edible.html)
// ถ้ายังไม่มีไฟล์รูปในโฟลเดอร์ img/edible/ ให้ซ่อนรูปที่เสีย แล้วโชว์ emoji ที่อยู่ด้านหลังแทน
(function () {
  document.querySelectorAll(".plant-thumb-box img").forEach((img) => {
    const hide = () => img.remove();
    if (img.complete && img.naturalWidth === 0) hide();
    else img.addEventListener("error", hide);
  });
})();
