function downloadEmoji(filename) {
    const link = document.createElement('a');
    link.href = filename;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function openPopup(imageSrc) {
    const popup = document.getElementById('emojiPopup');
    const popupImage = document.getElementById('popupImage');
    const downloadBtn = document.getElementById('downloadBtn');

    popupImage.src = imageSrc;
    downloadBtn.href = imageSrc;

    popup.style.display = 'flex';
}

function closePopup() {
    const popup = document.getElementById('emojiPopup');
    popup.style.display = 'none';
}

function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");
}

document.addEventListener("click", function (event) {
    var menu = document.getElementById("menu");
    var icon = document.querySelector(".menu-icon");

    if (!icon.contains(event.target) && !menu.contains(event.target)) {
        menu.classList.remove("show");
    }
});