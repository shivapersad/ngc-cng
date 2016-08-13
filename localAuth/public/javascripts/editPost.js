var editPost = document.getElementById('edit');
var id = editPost.getAttribute("postid");

editPost.addEventListener('click', function () {

    console.log("Post ID: " + id);
    //res.redirect('/local-post/' + id);
})