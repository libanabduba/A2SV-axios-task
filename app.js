
const axios = require('axios');

// Define the URL you want to make a GET request to
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

// Make a GET request using Axios
function getPost() {
  return axios.get(apiUrl)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      throw error;
    });
}



// const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
function getPosts() {
  return axios.get(apiUrl)
    .then(function (response) {
      const posts = response.data;

    // Log the list of posts in the console
    console.log('List of Posts:');
    posts.forEach(function (post) {
      console.log(`ID: ${post.id}`);
      console.log(`User ID: ${post.userId}`);
      console.log(`Title: ${post.title}`);
      console.log(`Body: ${post.body}`);
      console.log('-----------------------------------');
      // handle success
      return posts;
    })
    .catch(function (error) {
      // handle error
      throw error;
    });
})}
  

// Function to add a new post
function addNewPost(title, body, userId) {
  const newPostData = {
    title,
    body,
    userId
  };

  return axios.post(apiUrl, newPostData)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      throw error;
    });
}

// Usage: Call the function with the desired data
addNewPost('New Post', 'This is the body of the new post', 1)
  .then(function (newPost) {
    console.log('New Post:', newPost);
  })
  .catch(function (error) {
    console.error('Error:', error);
  });
    

// Function to filter posts by userId
function filterPostsByUserId(userId) {
  return axios.get(`${apiUrl}?userId=${userId}`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      throw error;
    });
}

// Usage: Call the function with the desired userId
filterPostsByUserId(1)
  .then(function (filteredPosts) {
    console.log(`Posts by userId 1:`, filteredPosts);
  })
  .catch(function (error) {
    console.error('Error:', error);
  });
      
  
