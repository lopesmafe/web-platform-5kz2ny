function contar() {
  let saida = document.getElementById('saida')

  saida.innerHTML += `<h2>Contando de 100 a 120, marcando os pares</h2>`

  let cont = 100
  while (cont <= 120) {
      if (cont % 2 == 0) {
          saida.innerHTML += `<mark><strong> ${cont} </strong></mark>&#x1F449;`    
      } else {
          saida.innerHTML += ` ${cont} &#x1F449;`
      }
      cont ++ 
  }
  saida.innerHTML += ` &#x1F3C1;`
}