const p1 = "Es la frase recurrente en nuestras conversaciones cuando nos damos cuenta de una nueva cosa en común que tenemos y que no teníamos idea, después de unos 3 años de amistad solo nos conocíamos de una manera superficial y en 3 meses pude darme cuenta que eres más rara de lo que creí."
const p2 = "Eres hermosa (aunque eso no es tan raro), eres buena persona (puntos a favor de tu rareza), eres sincera (esto no lo tiene mucha gente), eres leal (ya esto es muy raro), eres sensible (no me creo tanto eso del hielo), eres misteriosa (no muestras a cualquiera lo que llevas dentro) y..."
const p3 = "...además peligrosa (eres como Eau Rouge, la curva más hermosa de la Formula 1 pero también la más peligrosa, cada día que hablo contigo aumenta el riesgo de enamorarme perdidamente de ti), es raro ver una de estas cualidades en una persona, pero tú las tienes todas, eso te hace lo más raro y hermoso que haya visto."
const p4 = "Y hoy es tu día, cuenta la leyenda que un día como hoy Dios estaba tan aburrido y desocupado que decidió crear otra obra maestra, TU; y aunque esta frase no es muy original la creo con todo mi corazón."
const p5 = "Tú me causas una obsesión fuera de lo común que me impulsa a seguir explorando tu mente, quiero colonizar cada parte de tu alma y de tu cuerpo pedacito por pedacito hasta que seas 99.99% mía, y sabes la manera posesiva en que lo digo, te quiero tener para mí y conmigo, pero siempre libre."
const p6 = "Tus besos al menos en mi imaginación y citando a Arabella - Arctic Monkeys son el color de una constelación cayendo y tus labios como el borde de una galaxia, el cielo es menos pintoresco sin ti atrayendo su luz y el horizonte lo intenta pero no es tan agradable como lo eres tu."
const p7 = "Es raro que viniendo de una persona como yo, tan libre y solitario salga una frase como la que diré, quiero pertenecerte, quiero ser tuyo y lo digo porque lo deseo. <br> Te dedico <br> I Wanna Be Yours - Arctic Monkeys"
const p8 = "PD: Feliz Cumpleaños MI AMOR"
let i = 0

let text = document.getElementById('text')

if(i == 0){ text.innerHTML = p1 }

function next_page(){
    console.log(i)
    i++
    if(i == 1){ text.innerHTML = p2 }
    if(i == 2){ text.innerHTML = p3 }
    if(i == 3){ text.innerHTML = p4 }
    if(i == 4){ text.innerHTML = p5 }
    if(i == 5){ text.innerHTML = p6 }
    if(i == 6){ text.innerHTML = p7 }
    if(i == 7){ text.innerHTML = p8 }
    if(i == 8){ 
        text.innerHTML = "<img id='doi' src='./img/6min.png'>"
    }
    
}