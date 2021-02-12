document.querySelector("#submitBtn").addEventListener("click", function () {
  let postAuthor = document.querySelector("#author").value;
  let postTitle = document.querySelector("#postTitle").value;
  let postContent = document.querySelector("#postContent").value;
  let postDate = document.querySelector("#postDate").value;

  let category = document.querySelector("#postCategory").value

  if (
    postAuthor === "" ||
    postTitle === "" ||
    postContent === "" ||
    postDate === ""
  ) {
    alert("Fields Empty");
  } else {
    if (category === 'basic') {
      db.collection("basicComputing")
        .doc()
        .set({
          author: postAuthor,
          createdAt: postDate,
          postName: postTitle,
          postContent: postContent
        });
    } else if (category === 'system') {
      db.collection("system")
        .doc()
        .set({
          author: postAuthor,
          createdAt: postDate,
          postName: postTitle,
          postContent: postContent
        });
    } else if (category === 'web') {
      db.collection("web")
        .doc()
        .set({
          author: postAuthor,
          createdAt: postDate,
          postName: postTitle,
          postContent: postContent
        });
    } else if (category === '') {
      db.collection("posts")
      .doc()
      .set({
        author: postAuthor,
        createdAt: postDate,
        postName: postTitle,
        postContent: postContent
      });
    }
  }
});
