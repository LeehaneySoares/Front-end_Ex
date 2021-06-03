function thema_light(){

    let fundo_light = document.querySelector(".body");

    fundo_light.style.transition = ".3s all ease-in-out";
    fundo_light.style['background-color'] = "#fff";
    btn_style.style['background-color'] = "#000";
    head.style['background-color'] = "#fff";

}


function thema_dark(){

    let fundo_dark = document.querySelector(".body");
    
    fundo_dark.style.transition = ".3s all ease-in-out";
    fundo_dark.style['background-color'] = "#2f3542";
    btn_style.style['background-color'] = "#fff";
    head.style['background-color'] = "#57606f";
    
    
};

var bottom = document.querySelector(".btn-singup");
var head = document.querySelector(".l-head");
var btn_style = document.querySelector(".btn-bottom");
var estado = false;

btn_style.onclick = function(){

    this.style.right = "0";
    this.style.transition = ".3s all ease-in-out";

    if(estado == false){

        this.style.right = "-25px";
        thema_dark();
        estado = true;
        

    }
    else{

        this.style.right = "0";
        thema_light();
        estado = false;
    }

    

};

bottom.onmouseout = function(){

    this.style.transition = ".3s all ease-out";
    this.style.width = "250px";
    this.style.height = "50px";

}

bottom.onmouseover = function(){

    this.style.transition = ".3s all ease-in";
    this.style.width = "260px";
    this.style.height = "60px";
}






