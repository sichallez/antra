// API calls
const BASE_URL = "https://jsonplaceholder.typicode.com";
const articlePath = "posts";

const fetchArticle = async () => {
  let result = [];
  const url = BASE_URL + "/" + articlePath;
  await fetch(url)
    .then((res) => res.json())
    .then((data) => (result = data));
  return result;
};

const render = (articles) => {
  const root = document.querySelector("#root");
  root.innerHTML = `
    <div class="home_wrapper flex flex-col space-between">
      <div class="container">
        <header>
          <h1 class="header_title">My Blog</h1>
          <img class="header_image" src="./public/assets/searchIcon.png" alt="search button">
        </header>
        <section class="grid">
          ${articles
            .map(
              (article) => `
            <article class="card span12 span6">
              <h5 class="card_category paragraph_text_blue">World</h5>
              <h2 class="card_title">${article.title}</h2>
              <p class="card_date">Article ID: ${article.id}</p>
              <p class="card_paragraph">${article.body}</p>
              <div>
                  <a class="card_link" href="./sample.html">Continue reading</a>
              </div>
            </article>
          `
            )
            .join("")} 
        </section>
      </div>
    </div>
    `;
};

const init = async () => {
  let articles = await fetchArticle();
  console.log(articles);
  render(articles);
};

init();
