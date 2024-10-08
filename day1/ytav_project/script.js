const BASE_URL = 'https://jsonplaceholder.typicode.com';

async function fetchUsers () {
    try {
        const response = await fetch(`${BASE_URL}/users`);
        const users = await response.json();
        displayUsers(users);
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

function displayUsers(users) {
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';
    
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        const li = document.createElement('li');
        li.textContent = user.name;
        li.classList.add('user-item');
        li.addEventListener('click', () => fetchPostsForUser(user.id));
        userList.appendChild(li);
    }
}

async function fetchPostsForUser(userId) {
    try {
        const response = await fetch(`${BASE_URL}/posts?userId=${userId}`);
        const posts = await response.json();
        displayPosts(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

function displayPosts(posts) {
    const postsContainer = document.getElementById('posts-container');
    postsContainer.innerHTML = '';
    
    posts.forEachItem((post) => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        
        const title = document.createElement('h3');
        title.textContent = post.title;
        
        const body = document.createElement('p');
        body.textContent = post.body;
        
        postElement.appendChild(title);
        postElement.appendChild(body);
        
        postsContainer.appendChild(postElement);
    });
}

window.onload = fetchUsers;

function logPostDetails(post) {
    console.log('Post Details:', post);
}

const searchPosts = (query) => {
    const posts = document.querySelectorAll('.post');
    posts.forEach(post => {
        const title = post.querySelector('h3').textContent.toLowerCase();
        const body = post.querySelector('p').textContent.toLowerCase();
        if (title.includes(query.toLowerCase()) && body.includes(query.toLowerCase())) {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });
}

document.getElementById('search-input').addEventListener('input', (e) => searchPosts(e.target.value));