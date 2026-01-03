


let main = document.querySelector("main");

async function getnews() {
    let res = await fetch('https://newsapi.org/v2/everything?q=india&sortBy=publishedAt&apiKey=80a25b7b9fc34a9eb929b75f43df41b5');
    let data = await res.json();

    displayNews(data.articles);
}

getnews();

function displayNews(articles) {
    for (let n of articles) {
        main.innerHTML += `
        <div class="card">
            <img src="${n.urlToImage}" alt="Image">
            <h2>${n.title}</h2>
            <p>${n.description}</p>
            <a href="${n.url}">
                <button>Read More</button>
          </a>
        </div>`;
    }
}