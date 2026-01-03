
document.getElementById("darkBtn").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});


const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("keyup", () => {
    let value = searchInput.value.toLowerCase();

    cards.forEach(card => {
        let title = card.querySelector("h3").innerText.toLowerCase();
        card.style.display = title.includes(value) ? "block" : "none";
    });
});
