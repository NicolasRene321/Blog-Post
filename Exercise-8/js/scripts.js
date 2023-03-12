var postsPage = '1&';
var postsLimit = 20;
var loadButton = document.querySelector('#loadPosts');

var url = `https://jsonplaceholder.typicode.com/posts?_page=${postsPage}_limit=${postsLimit}`;


const loadingElement = document.querySelector('#loading');
const postsContainer = document.querySelector('#posts-container');

// Get all posts
async function getAllPosts() {
    
    const response = await fetch(url);

    console.log(response);

    const data = await response.json();

    console.log(data);

    loadingElement.classList.add("hide");

    data.map((post) => {
        const div = document.createElement('div');
        const title = document.createElement('h2');
        const body = document.createElement('p');
        const link = document.createElement('a');

        title.innerText = post.title;
        body.innerText = post.body;
        link.innerText = "Read";
        link.setAttribute("href", `/post.html?id=${post.id}`);

        div.appendChild(title);
        div.appendChild(body);
        div.appendChild(link);

        postsContainer.appendChild(div);
    })

    if (postsLimit === 20) {
        loadButton.style.display = "block";
    } else {
        loadButton.style.display = "none"
    }
    
}

loadButton.addEventListener('click', () => {
    postsLimit = 100;
    url = `https://jsonplaceholder.typicode.com/posts?_page=${postsPage}_limit=${postsLimit}`;
    
    getAllPosts();
    
});

  

getAllPosts();