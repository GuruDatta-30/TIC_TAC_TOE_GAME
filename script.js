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
});

let drawx=false;
let draw=document.querySelector("#draw");
draw.addEventListener("click",()=>{
    drawx=true;
});


for (let btn of buttons){
    btn.addEventListener("mouseover",()=>{
        if(drawx){
            btn.style.borderBottom = "4px solid #38bdf8";
            btn.style.boxShadow = "0 0 12px #38bdf8";
        }
    });
}

