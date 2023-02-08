const posts = [
    {
      title: "Post One",
      body: "This is Post One",
    },
    {
      title: "Post Two",
      body: "This is Post Two",
    },
  ];
  function getPosts() {
    setTimeout(() => {
      let output = "";
      posts.forEach((post, index) => {
        output += `<li>${post.title}<li/>`;
      });
      document.body.innerHTML = output;
    }, 1000);
  }
  // post will not be created beyond 1s so async and callback function is introduced
  function createPost(post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        posts.push(post);
  
        const error = false;
        if (!error) {
          resolve();
        } else {
          reject("Error: Sthg went wrong");
        }
      }, 2000);
    });
  }

//   async await
// async function init(){
//     await createPost({title: "Third Post ", body: "This is my Promise post"})

//     getPosts();
// }
// init()

//async await  using fetch
async function fetchUsers(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await res.json();

    console.log(data);
}
fetchUsers();