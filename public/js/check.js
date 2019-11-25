function check(e) {
  console.log(e.id); // debug
  const msg = document.getElementById('msg');
  //manda los mensajes de si la respuesta es correcta o erronea
  if (e.value == 'true')
    msg.innerHTML = 'Correcta!';
  else
    msg.innerHTML = 'Incorrecta'
  setTimeout(() => { window.location.replace('/play') }, 1500)  
}
