// app.js
// File JS rời để gắn vào main_cursor_glow.html

document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ app.js đã được load thành công");

  // Fix nhỏ: đảm bảo audio có thể play sau khi người dùng click lần đầu
  const audioEls = document.getElementsByTagName("audio");
  document.addEventListener("click", () => {
    for (const a of audioEls) {
      if (a.paused) {
        // chỉ để browser cấp quyền audio context, không ép play
        a.load();
      }
    }
  }, { once: true });
});
