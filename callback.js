const posts =[
    {
        title: "Post One",
        body: "This is Post One"
    },
    {
        title: "Post Two",
        body: "This is Post Two"
    }
];
function getPosts(){
    setTimeout(()=>{
        let output = '';
        posts.forEach((post, index)=>{
            output += `<li>${post.title}<li/>`
        });
        document.body.innerHTML = output;
    },1000)
}
// post will not be created beyond 1s so async and callback function is introduced
function createPost(post, callback){
    setTimeout(()=> {
        posts.push(post)
        callback();
    },2000)
}
// getPosts();
createPost({ title: "Post Three", body: "This is post Three"}, getPosts);