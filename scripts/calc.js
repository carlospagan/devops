function insere(num) {
    var numero = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = numero + num
  }
  function limpa() {
    document.getElementById('resultado').innerHTML = ''
  }
  function apaga() {
    var resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(
      0,
      resultado.length - 1
    )
  }
  function calcula() {
    var resultado = document.getElementById('resultado').innerHTML
    if (resultado) {
      document.getElementById('resultado').innerHTML = eval(resultado)
    } else {
      document.getElementById('resultado').innerHTML = ''
    }
  }