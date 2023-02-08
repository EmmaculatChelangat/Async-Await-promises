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
// fetching one item
// createPost({title: "Third Post ", body: "This is my Promise post"})
// .then(getPosts)
// .catch(err => console.log(err));

// promise.all
const promise1 = Promise.resolve("Hellow World");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, "Goodbye")
);

const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
  res => res.json()
);

Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
  console.log(values)
);
