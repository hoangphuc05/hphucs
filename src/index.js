
function getBlogPost() {

    let postHTML = ``;
    // pull blog posts
    axios.get("https://hphucs.me/blog/wp-json/wp/v2/posts")
      .then(function (response) {
        response.data.forEach(function(post) {
            postHTML += `
            <a href=${post.link} target="_blank">
            <div class="space-y-3">
                <h2 class="font-bold text-lg">${post.title.rendered}</h3>
                <p>${post.excerpt.rendered}</p>
            </div>
            </a>
            `;
        });
      }).finally(function() {
        document.getElementById("posts").innerHTML = postHTML;
      });
}

getBlogPost();