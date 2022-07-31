function goatzakat(){
    let mxZakat=document.getElementById('goatZakat').value;
let result;
    if(mxZakat>=400){
result="4 gosts and after 400 goats, 1 goat on every 100 goats";
    }else if(mxZakat>=201){
result="3 goats";
    }else if(mxZakat>=121){
result="2 goats";
    }else if(mxZakat>=40){
result="1 goat";
    }else if(mxZakat<=39){
result="no zakat";
    }
    document.getElementById('head').innerText=result;
}