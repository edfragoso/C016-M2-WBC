const items = document.querySelectorAll("[data-anime]"); //pegou os items cards) e transformou em array

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.85; //topo da minha página, para quando rolar o scroll executar a animação.
    
    //forEach retorna cada elemento da iteração
    items.forEach((element) => {
        //elemento que é cada card
        if(windowTop > element.offsetTop){
            element.classList.add("animate"); //adicionando a animação em cada card
        } else{
            element.classList.remove("animate")//parou a animação
        }
    });
};

window.addEventListener("scroll", () =>{
    animeScroll();
});

animeScroll();

/* Validação do Form */

const inputNome = document.querySelector("#nome");
const inputEmail = document.querySelector("#email");
const labelNome = document.querySelector("#labelNome");
const labelEmail = document.querySelector("#labelEmail");
const buttonEnviar = document.querySelector("#buttonEnviar");
let camposOK = false;

inputNome.addEventListener("keyup", () => {
    ;
    if (inputNome.value.length < 3) {
        labelNome.innerText = "Nome - (Digite um Nome válido)";
        labelNome.style.color = "red";
        camposOK = false;
    } else {
        labelNome.innerText = "Nome";
        labelNome.style.color = "#1d95cd";
        camposOK = true;
    }
    validaButton();
});

inputEmail.addEventListener("keyup", () => {
    if (inputEmail.value.length == 0) {
        labelEmail.innerText = " Email - (Digite um email válido)";
        labelEmail.style.color = "red";
        camposOK = false;
    } else {
        labelEmail.innerText = "Email";
        labelEmail.style.color = "#1d95cd";
        camposOK = true;
    }
    validaButton();
});

const validaButton = () => {
    if (camposOK == false) {
        buttonEnviar.setAttribute("disabled", "disabled");
        buttonEnviar.classList.add("buttonDisabled");
    } else {
        buttonEnviar.removeAttribute("disabled", "disabled");
        buttonEnviar.classList.remove("buttonDisabled");
    }
};

validaButton();

