function addbtn(){
    let newpara = document.createElement('p');
    newpara.textContent = "Adding Paragraph to the index table";
    document.body.appendChild(newpara);
}

function removebtn(){
    let paras = document.getElementsByTagName('p');

    if(paras.length > 0){
        var remChild = paras[paras.length -1];
        remChild.remove();
    }
}

