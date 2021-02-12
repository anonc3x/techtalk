
// Firebase Config
var firebaseConfig = {
  apiKey: "AIzaSyA5a0DWdLGdSSBdorIl6zt6-57XBg-wxpM",
  authDomain: "blog-techtalk.firebaseapp.com",
  projectId: "blog-techtalk",
  storageBucket: "blog-techtalk.appspot.com",
  messagingSenderId: "22802932457",
  appId: "1:22802932457:web:aa837a242def667b7c0678"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();

function createCategorisedPost(query) {
  let postCollection = document.querySelector(query);

  function createPost(title, time, content) {
    let div = document.createElement("div");
    div.setAttribute("class", "col-md-4");

    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    p.className = 'paragraph'
    let small = document.createElement("small");
    small.className = 'small'

    h2.textContent = title;
    small.textContent = time;
    p.textContent = content;

    div.appendChild(h2);
    div.appendChild(small);
    div.appendChild(p);

    postCollection.appendChild(div);
  }

  // Get Posts
  function getPosts(collections) {
    db.collection(collections)
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(docs => {
          createPost(
            docs.data().postName,
            docs.data().createdAt,
            docs.data().postContent
          );
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  if (query === "#posts-collection") {
    getPosts("posts");
  }
  if (query === "#basicPost") {
    getPosts("basicComputing");
  }
  if (query === "#systemPost") {
    getPosts("system");
  }
  if (query === "#webPost") {
    getPosts("web");
  }

}

createCategorisedPost("#posts-collection")
createCategorisedPost("#basicPost")
createCategorisedPost("#systemPost")
createCategorisedPost("#webPost")




var mybutton = document.getElementById("myBtn");
window.onscroll = function () { return scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
