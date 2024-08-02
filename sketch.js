const container = document.querySelector('#container');
// const containertwo = document.createElement("div");
container.style.cssText = 
'display:flex;flex-wrap:wrap;border:solid 1px red;width:960px;height:960px;margin:0 auto';
// containertwo.style.cssText = 
// 'display:flex;flex-wrap:wrap;width:960px;height:960px;margin:0 auto';
const buttonChange = document.querySelector("#canvaslen");
buttonChange.style.height = "50px";
buttonChange.style.width = "150px";
buttonChange.textContent = "Changue Canvas";
buttonChange.style.margin = "5px"

// container.appendChild(containertwo);

buttonChange.addEventListener("click",()=>{
    valueCanvas = prompt('Canvas size');
    canvasSize(valueCanvas);
    chgbackground();



})


function canvasSize(a) {
    const containertwo = document.createElement("div");
    containertwo.style.cssText = 
    'display:flex;flex-wrap:wrap;width:960px;height:960px;margin:0 auto';
    container.appendChild(containertwo);

    for (let i = 0; i<a*a;i++){
        const div = document.createElement('div');
        div.style.cssText = "display:flex;outline:1px blue solid;margin:0px";
        var b = 960/a;
        // console.log(b);
        div.style.width = String(b)+"px";
        div.style.height = String(b)+"px";
        // div.textContent = i;
        div.classList.add("pixel");
        containertwo.appendChild(div);
    }
}

function chgbackground() {
    const pxl = document.querySelectorAll(".pixel");
    pxl.forEach((pixel)=>{
        pixel.addEventListener('mouseover',()=>{
            pixel.style.backgroundColor="red";

        });
    });
};

// pxl.setAttribute("style","background-color:blue;");

// pixel.addEventListener('mouseover', ()=>{
//     pixel.setAttribute("style","background-color:blue;");
// }
// );