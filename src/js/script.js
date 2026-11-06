// TODO
const aMettreEnRouge = document.querySelector ("#a-mettre-en-rouge")
aMettreEnRouge.style.color = "red"

const EnRougeSuiteAClick = document.querySelector ("#en-rouge-suite-a-click")
EnRougeSuiteAClick.addEventListener ("click", (event)=>{
    EnRougeSuiteAClick.style.color = "red"
});

const collH2 = document.querySelectorAll ("h2")
collH2.forEach ((Element)=>{
    Element.addEventListener ("click", (event)=>{
        event.target.style.color = "red" ;
    });
});