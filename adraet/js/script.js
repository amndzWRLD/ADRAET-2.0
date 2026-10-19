let formulario_login=document.querySelector(".login"),
formulario_register=document.querySelector(".register"),
contenedor=document.querySelector(".contenedor_formularios"),
box_login=document.querySelector(".box_afuera_login"),
box_register=document.querySelector(".box_afuera_register");

document.getElementById("btn_register").addEventListener("click", show_register);
document.getElementById("btn_login").addEventListener("click",show_login);
window.addEventListener("resize", ancho);

function show_register(){

    if(window.innerWidth>800){
        formulario_register.style.display="block";
        contenedor.style.left="410px";
        formulario_login.style.display="none";
        box_register.style.opacity="0";
        box_login.style.opacity="1";
    }
    else{
        formulario_register.style.display="block";
        contenedor.style.left="0px";
        formulario_login.style.display="none";
        box_register.style.display="none";
        box_login.style.display="block";
        box_login.style.opacity="1";
    }
    
}

function show_login(){
    
    if(window.innerWidth>800){
        formulario_register.style.display="none";
        contenedor.style.left="1px";
        formulario_login.style.display="block";
        box_register.style.opacity="1";
        box_login.style.opacity="0";
    }
    else{
        formulario_register.style.display="none";
        contenedor.style.left="0px";
        formulario_login.style.display="block";
        box_register.style.display="block";
        box_login.style.display="none";
    }
}

function ancho(){
    if(window.innerWidth>800){
        box_login.style.display="block";
        box_register.style.display="block";
    }
    else{
        box_register.style.display="block";
        box_register.style.opacity="1";
        box_login.style.display="none";
        formulario_login.style.display="block";
        formulario_register.style.display="none";
        contenedor.style.left="0px";
    }

}

ancho();