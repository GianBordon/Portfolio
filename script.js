let menuVisible = false;

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList ="";
    menuVisible = false;
}

function efectoHabilidades(){
    var skills = document.getElementById("skills")
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("sass");
        habilidades[3].classList.add("sql");
        habilidades[4].classList.add("wordpress");
        habilidades[5].classList.add("photoshop");
        habilidades[6].classList.add("illustrator");
        habilidades[7].classList.add("reactjs");
        habilidades[8].classList.add("firebase");
        habilidades[9].classList.add("git");
        habilidades[10].classList.add("comunicacion");
        habilidades[11].classList.add("trabajo");
        habilidades[12].classList.add("creatividad");
        habilidades[13].classList.add("dedicacion");
        habilidades[14].classList.add("proyecto");
        habilidades[15].classList.add("resolutivo");
        habilidades[16].classList.add("flexible");
        habilidades[17].classList.add("velocidad");
    }
}

window.onscroll = function(){
    efectoHabilidades();
}