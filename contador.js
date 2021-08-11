window.addEventListener("load", () => {

  const botao = document.getElementById("botao");
  botao.addEventListener("click", ()=> {

  

  // tempo em segundos
  let sec = 180;

  const countDiv = document.getElementById("timer");

  const secPass = () => {

    let min = Math.floor(sec / 60);
    let segundosRestantes = sec % 60

    if (segundosRestantes < 10) {
      segundosRestantes = "0" + segundosRestantes;
    }
    if (min < 10) {
      min = "0" + min;
    }

    countDiv.innerHTML = min + ":" + segundosRestantes;


    if (sec > 0) {
      sec = sec - 1
    }
    else {
      countDiv.innerText = "Acabou"
    }
  }

  const countDown = setInterval(() => secPass(), 1000)
})

});