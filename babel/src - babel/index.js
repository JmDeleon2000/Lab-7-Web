import {clearDiv} from "./utils/utils";
import "./estilo.scss"
let fondo = document.createElement("div");
let historiaDisplay = document.createElement("textarea"); 
fondo.className = "borde";
document.body.onload = function(){

let t1 = document.createElement("h1");
t1.innerHTML = "Bienvenido a My Crazy Story!";
document.body.appendChild(fondo);
fondo.appendChild(t1);
let p1 = document.createElement("p");
p1.innerHTML = "Esta es una historia interacctiva en la que podrás tomar varias decisiones.";
fondo.appendChild(p1);
let t2 = document.createElement("h1");
t2.innerHTML = "Instrucciones";
fondo.appendChild(t2);
fondo.appendChild(historiaDisplay);
historiaDisplay.innerHTML = 
"Te despiertas con dolor de cabeza y vez que estás en una cueva. Sientes frío y tus piernas están entumecidas. Sientes que te hace falta un cigarro y estás sediento. Y hueles a alcohol. Concluyes que definitivamente tienes una resaca. Y que ayer tuvise una fiesta loca. Al principio no puede mover tu cuello, te duele mucho. Pero lentamente logras voltearte";
let b1 = document.createElement("button");
let b2 = document.createElement("button");

b1.innerHTML = "¿Volteas a tu derecha?";
b2.innerHTML = "¿Volteas a tu izquierda?";
fondo.appendChild(b1);
fondo.appendChild(b2);
b1.onclick = voltDer;
b2.onclick = voltIzq;

}


voltDer = () => 
{
    clearDiv(fondo);
    historiaDisplay.innerHTML = 
    "Al voltear te vez cegado por el sol. Luego de acostumbrarte un poco, puedes ver que estas solo a dos metros de la entrada de la cueva Ves que un poco de la nieve está teñida de rojo. También sientes que huele como a carnicería";
    fondo.appendChild(historiaDisplay);
    let img = document.createElement("img");
    img.src = "cueva.png";
    

    let b1 = document.createElement("button");
    b1.innerHTML = "¿Salir de la cueva?";
    let b2 = document.createElement("button");
    b2.innerHTML = "¿Voltear a la izquierda?";
    fondo.appendChild(b1);
    fondo.appendChild(b2);
    b1.onclick = salir;
    b2.onclick = voltIzq;
    fondo.appendChild(img);
}

voltIzq = () =>
{
    clearDiv(fondo);
    historiaDisplay.innerHTML = 
    "Ves a una mujer jóven. Es rubia y muy flaca. Tan flaca que puedes ver la forma de su craneo en su mandíbula.<br>    Ella tiene los ojos cerrados y notas que está pálida. Recuerdas haberla conocido ayer, pero tu memoria no es clara. Te quedas viendo su cara, te molesta doblar tu cuello hacia otra dirección  Algo que ves por sobre de sus rizos llama tu atención.";
    fondo.appendChild(historiaDisplay);
    let img = document.createElement("img");
    img.src = "oso.png";
    

    let b1 = document.createElement("button");
    let b2 = document.createElement("button");
    let b3 = document.createElement("button");

    b1.innerHTML = "¿Volteas a tu derecha?";
    b2.innerHTML = "¿Despertar a la mujer?";
    b3.innerHTML = "¿Correr inmediatamente?";
    fondo.appendChild(b1);
    fondo.appendChild(b2);
    b1.onclick = voltDer;
    b2.onclick = despMujer;
    b3.onclick = dead;
    fondo.appendChild(img);
    //alert("TODO");
}

salir = () =>
{
    clearDiv(fondo);
    let t1 = document.createElement("h1");
    t1.innerHTML = "Decidiste salir";
    fondo.appendChild(t1);
    
    let b1 = document.createElement("button");
    let b2 = document.createElement("button");
    
    b1.innerHTML = "Caminar";
    b2.innerHTML = "Arrastrarse";
    fondo.appendChild(b1);
    fondo.appendChild(b2);
    b1.onclick = afuera;
    b2.onclick = dead;

    //alert("TODO");
}

 despMujer = () =>
{
    clearDiv(fondo);
    let b1 = document.createElement("button");
    b1.innerHTML = "Susurrarle";
    fondo.appendChild(b1)
    let t1 = document.createElement("p");   
    fondo.appendChild(t1);
    b1.onclick = function()
    {
        t1.innerHTML = "Oyes que el oso gruñe, pero no se despierta.";
    }

    let b2 = document.createElement("button");
    b2.innerHTML = "Tocarle la cara";
    fondo.appendChild(b2)
    let t2 = document.createElement("p");   
    fondo.appendChild(t2);
    b2.onclick = function()
    {
        t2.innerHTML = " Sientes que su piel está más fría que la nieve.";
    }

    let b3 = document.createElement("button");
    b3.innerHTML = "Tocarle la cara";
    fondo.appendChild(b3)
    let t3 = document.createElement("p");   
    fondo.appendChild(t3);
    b3.onclick = function()
    {
        t3.innerHTML =  "Ya se te está quitando el dolor de cuello. Quizá sea la adrenalina, piensas. Al buscar dónde está su mano notas que tiene sangre en su vestido. Al bajar más ves que todo su torso está comido a hueso limpio. Ves las marcas de los dientes del oso en sus huesos. A pesar de que el olor de la sangre es fuerte, este no supera al del alcohol. Probablemente ella estaba tan ebria que jamás se dio cuenta de lo que pasó.";
    }   
    

    let b4 = document.createElement("button");
    b4.innerHTML = "¿Voltear a la izquierda?";
    b4.onclick = voltIzq;
    fondo.appendChild(b4);

    //alert("TODO");
}


 dead = () =>
{
    clearDiv(fondo);
    let t1 = document.createElement("h2");
    t1.innerHTML = "Hiciste demasiado ruido y despertaste al oso";
    fondo.appendChild(t1);
    let img = document.createElement("img");
    fondo.appendChild(img);
    img.src = "craneo.png";
    //alert("TODO");
}

afuera = () =>
{
    clearDiv(fondo);
    let t1 = document.createElement("h1");
    t1.innerHTML = "Te paraste y caminaste lentamente";
    fondo.appendChild(t1);
    historiaDisplay.innerHTML = 
    "Al salir ves una el humo de una chimenea. Recuerdas que ayer estuviste en una fiesta en una cabaña. Una vez te alejas de la cueva, vas rápidamentea reunirte con tus amigos.";
    fondo.appendChild(historiaDisplay);
    let t2 = document.createElement("h1");
    t2.innerHTML = "¡Felicidades y gracias por jugar!";
    fondo.appendChild(t2);
}