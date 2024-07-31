const container = document.querySelector('#container');
container.style.cssText = 
'display:flex;flex-wrap:wrap;border:solid 1px red;width:800px;height:800px;margin:0 auto';


for (let i = 0; i<256;i++){
    const div = document.createElement('div');
    div.style.cssText = "display:flex;outline:1px blue solid;width:50px;height:50px;margin:0px";
    // div.textContent = i;
    container.appendChild(div);
}