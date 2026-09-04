 document.addEventListener("DOMContentLoaded", () => {
    // Mengambil semua elemen kotak ekskul
    const ekskulBoxes = document.querySelectorAll(".ekskul-box");

    // Menjalankan animasi masuk dari kanan secara berurutan satu per satu
    ekskulBoxes.forEach((box, index) => {
        setTimeout(() => {
            box.classList.add("show");
        }, index * 200); // Jeda antar box sebesar 200 milidetik (0.2 detik)
    });
});
