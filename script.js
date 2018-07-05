const menu = document.querySelector("aside");
const botao = document.querySelector("#hamburger");

function deslizar(){
    if(menu.classList.contains("active")){
        menu.classList.remove("active");
        botao.classList.remove("active");
    }
    else{
        menu.classList.add("active");
        botao.classList.add("active");
    }
    
}

botao.onclick = deslizar;