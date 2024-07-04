const container = document.querySelector('#container');

container.style.cssText = 
'display:flex;flex-wrap:wrap;flex-grow:1;border:solid 1px red;width:800px;text-align:center'


for (let i = 0; i<256;i++){
    const div = document.createElement('div');
    div.style.cssText = "border:1px black solid;"
    div.textContent = i
    container.appendChild(div);
}