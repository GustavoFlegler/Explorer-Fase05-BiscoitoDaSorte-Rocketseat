const page1 = document.querySelector(".page1")
const page2 = document.querySelector(".page2")

const btnOpen = document.querySelector("#openCookie_button")
const btnReset = document.querySelector("#reset_button")

const luckText = document.querySelector("#luck")
let randomNumber = Math.round(Math.random() * 10)

function togglePage_Hide(){
  page1.classList.toggle("hide")
  page2.classList.toggle("hide")
}

btnOpen.addEventListener("click", togglePage_Hide)
btnReset.addEventListener("click", togglePage_Hide)

switch(randomNumber){
  case 1:
    luckText.innerHTML = "A vida trará coisas boas se tiver paciência."
    break;
  
  case 2:
    luckText.innerHTML = "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si."
    break;

  case 3:
    luckText.innerHTML = "Não compense na ira o que lhe falta na razão."
    break;
  
  case 4:
    luckText.innerHTML = "Defeitos e virtudes são apenas dois lados da mesma moeda."
    break;
  
  case 5:
    luckText.innerHTML = "A maior de todas as torres começa no solo."
    break;
  
  case 6:
    luckText.innerHTML = "Não há que ser forte. Há que ser flexível."
    break;
    
  case 7:
    luckText.innerHTML = "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?"
    break;
  
  case 8:
    luckText.innerHTML = "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida."
    break;

  case 9:
    luckText.innerHTML = "A juventude não é uma época da vida, é um estado de espírito."
    break;

  case 10:
    luckText.innerHTML = "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos."
    break;
}

console.log(randomNumber)