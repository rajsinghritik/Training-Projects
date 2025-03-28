console.log("1");
let content = document.getElementById('content');
let btn1 = getElementById('btn');
console.log("2");
var eleId;

function clicked(event){
    console.log('clicked',event.target;
        eleId = event.target;

}
function topShift(){
    content.prepend(eleId);

}
btn1.addEventListener('click' , topShift)
content.addEventListener('click' , clicked);