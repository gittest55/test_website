



var c=1;
var gg=document.getElementById("img_list");
var k= document.getElementById("list_con");

gg.addEventListener("click",()=>{
    if (c==1)
    {
        c=0;
        k.style.display="none";

    }
    else
    {
        c=1;
        k.style.display="flex";

    }
});

window.addEventListener("resize",()=>{
    if(window.innerWidth >700){
        k.style.display="flex";
    }
})