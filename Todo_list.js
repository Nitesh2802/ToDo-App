let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;

    let delbtn=document.createElement("button");
    delbtn.innerText="Delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value="";
});
// this delete fuction only works for existing elements it doesnot work if you add new elements and then delete;
// let delbtns=document.querySelectorAll(".delete");
// for(delbtn of delbtns){
// delbtn.addEventListener("click",function(){
//     let par=this.parentElement;
//     par.remove();
// });
// }

// to delete dynamically if we add elements

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
})