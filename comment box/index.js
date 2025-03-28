document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const comment = document.getElementById('comment').value;

    // Create a new list item for the comment
    const commentItem = document.createElement('li');
    commentItem.innerHTML = `<strong>${name} (${email})</strong><p>${comment}</p>`;

    // Append the new comment to the comments list
    document.getElementById('commentsList').appendChild(commentItem);

    // Clear the form fields
    document.getElementById('commentForm').reset();
});