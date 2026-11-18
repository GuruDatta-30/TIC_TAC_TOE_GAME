let buttons=document.querySelectorAll(".btns");
let turn=true;
for(let btn of buttons){
    btn.addEventListener("click",()=>{
        if(btn.innerText!==""){
            alert("already filled ");
            return;
        }
        if(turn){
            btn.innerText="X";
            turn=false;
        }
        else{
            btn.innerText="O";
            turn=true;
        }
    })
}

let exit=document.querySelector("#refresh");
exit.addEventListener("click",()=>{
    location.reload();
})