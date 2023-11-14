const droparea=document.getElementById("drop-area");
const inputfile=document.getElementById("input-file");
const imageview=document.getElementById("img-view");

inputfile.addEventListener("change",uploadimage);

function uploadimage(){
    
    let imglink=URL.createObjectURL(inputfile.files[0]);
    imageview.style.backgroundImage=`url(${imglink})`;
    imageview.textContent="";
    imageview.style.border=0;
}

droparea.addEventListener("dragover",function(e){
    e.preventDefault();
});
droparea.addEventListener("drop",function(e){
    e.preventDefault();
    inputfile.files=e.dataTransfer.files;
    uploadimage();
});