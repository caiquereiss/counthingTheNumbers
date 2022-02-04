function contar(){
  let inicio = document.getElementById('inicio');
  let fim = document.getElementById('fim');
  let passo = document.getElementById('passo');
  let resposta = document.getElementById('secund')

  if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    window.alert('Insira um valor aos campos')
  } else{
    resposta.innerHTML= 'Contando: '
    let ini = Number(inicio.value)
    let fi = Number(fim.value)
    let pass = Number(passo.value)
    if(pass <= 0) {
      window.alert('Passo invalido, digite um valor. Iremos considerar valor 1')
      pass = 1;
    }

    if(ini < fi){
      for(let c = ini; c <= fi; c += pass){
        resposta.innerHTML += `${c} 🚀`
      }
    }else {
      for(let c = ini; c >= fi; c -= pass){
        resposta.innerHTML += `${c} 🚀`
      }
    }
  }
}