// Array to hold the blog posts
let blogPosts = [];

// Function to render the blog posts
function renderBlogPosts() {
    const blogPostsDiv = document.getElementById('blogPosts');
    blogPostsDiv.innerHTML = '';
    for(let i = 0; i < blogPosts.length; i++) {
        const post = document.createElement('div');
        post.className = 'blogPost';

        const postContent = document.createElement('p');
        postContent.textContent = blogPosts[i].content;

        const postImage = document.createElement('img');
        postImage.src = blogPosts[i].imageUrl;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            deletePost(i);
        };

        post.appendChild(postContent);
        post.appendChild(postImage);
        post.appendChild(deleteButton);
        blogPostsDiv.appendChild(post);
    }
}

// Function to add a new blog post
function addPost(content, imageUrl) {
    blogPosts.push({content: content, imageUrl: imageUrl});
    renderBlogPosts();
}

// Function to delete a blog post
function deletePost(index) {
    blogPosts.splice(index, 1);
    renderBlogPosts();
}

// Add event listener to the add post button
document.getElementById('addPostButton').onclick = function() {
    const newPostContent = document.getElementById('newPostContent');
    const newPostImage = document.getElementById('newPostImage');
    addPost(newPostContent.value, newPostImage.value);
    newPostContent.value = '';
    newPostImage.value = '';
};