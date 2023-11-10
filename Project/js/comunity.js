document.addEventListener("DOMContentLoaded", function() {
    const postList = document.querySelector(".posts");

    // 저장된 게시글 목록 불러오기
    let posts = JSON.parse(localStorage.getItem("posts")) || [];

    // 게시글 목록을 표시하는 코드
    posts.forEach(post => {
        if (post.date) {
            const postElement = document.createElement("article");
            postElement.className = "post";

            const postTitle = document.createElement("h2");
            postTitle.textContent = post.title;

            const postContent = document.createElement("p");
            postContent.textContent = post.content;

            const postDate = document.createElement("p");
            postDate.textContent = "작성 날짜: " + post.date;

            postElement.appendChild(postTitle);
            postElement.appendChild(postContent);
            postElement.appendChild(postDate);

            postList.appendChild(postElement);
        }
    });
});
