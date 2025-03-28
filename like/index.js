let likeCount = 0;
let dislikeCount = 0;

function toggleLike() {
    likeCount++;
    document.getElementById("likeCount").textContent = likeCount;
}

function toggleDislike() {
    dislikeCount++;
    document.getElementById("dislikeCount").textContent = dislikeCount;
}

function toggleCommentBox() {
    const commentBox = document.getElementById("commentBox");
    commentBox.style.display = (commentBox.style.display === "none" || commentBox.style.display === "") ? "block" : "none";
}

function submitComment() {
    const commentText = document.getElementById("commentText").value;
    if (commentText.trim() !== "") {
        const commentsList = document.getElementById("commentsList");
        const newComment = document.createElement("p");
        newComment.textContent = commentText;
        commentsList.appendChild(newComment);

        document.getElementById("commentText").value = ""; // Clear the comment box after submission
    }
}
