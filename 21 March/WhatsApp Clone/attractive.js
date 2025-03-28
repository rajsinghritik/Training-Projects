console.log("1");
let content = document.getElementById('content');
let btn1 = document.getElementById('btn');
console.log("2");
var eleId;

function clicked(event){
    console.log('clicked',event.target);
        eleId = event.target;

}
function topShift(){
    content.prepend(eleId);

}
btn1.addEventListener('click' , topShift)
content.addEventListener('click' , clicked);


document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

   
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