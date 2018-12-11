//TROCA DE PÁGINAS
function entrar(){
  document.getElementById('login').style.display = "none";
  document.getElementById('filialList').style.display = "block";
}

function newUser(){
  document.getElementById('login').style.display = "none";
  document.getElementById('newUser').style.display = "block";
}

function recPassword(){
  document.getElementById('login').style.display = "none";
  document.getElementById('recPassword').style.display = "block";
}

function enviarRecPassword(){
  alert("Recuperação de senha enviada com sucesso.");
  document.getElementById('recPassword').style.display = "none";
  document.getElementById('login').style.display = "block";
}

function newFilial(){
  document.getElementById('filialList').style.display = "none";
  document.getElementById('newFilial').style.display = "block";

}

function cadFilial(){
  var form = document.getElementById('cadNameFilial');
  var nomeNewFilial = document.getElementById('nomeNewFilial');

  form.addEventListener('submit', function(e) {
      // impede o envio do form
      e.preventDefault();
  });
  alert("Filial cadastrada com sucesso!");
  document.getElementById("filial1").innerHTML = nomeNewFilial.value;
  document.getElementById('newFilial').style.display = "none";
  document.getElementById('filialList').style.display = "block";
}

function voltar(){
  document.getElementById('filialList').style.display = "none";
  document.getElementById('login').style.display = "block";
}

function cadUsuario(){
  document.getElementById('newUser').style.display = "none";
  document.getElementById('login').style.display = "block";
}

function goToFilial1(){
  document.getElementById('filialList').style.display = "none";
  document.getElementById('page1').style.display = "block";
}

function validarTroncos(){
    var troncosDigitais = document.getElementById('troncos-digitais').value;
    var troncosAnalogicos = document.getElementById('troncos-analogicos').value;
    var troncosGSM = document.getElementById('troncos-GSM').value;
    var troncosIP = document.getElementById('troncos-IP').value;

    var cont = 0;


      if(troncosDigitais < 0 || troncosDigitais > 60){
        alert("Insira um valor válido de troncos digitais!")
      } else {
        cont++;

      }
      if(troncosAnalogicos < 0 || troncosAnalogicos > 24){
        alert("Insira um valor válido de troncos analógicos!")
      } else {
        cont++;

      }
      if(troncosGSM < 0 || troncosGSM > 24){
        alert("Insira um valor válido de troncos GSM!")
      } else {
        cont++;

      }
      if(troncosIP < 0 || troncosIP > 60){
        alert("Insira um valor válido de troncos IP!")
      } else {
        cont++;

      }

    if(cont == 4){
    document.getElementById('page2').style.display = "block";
    document.getElementById('page1').style.display = "none";
  }
}

function back1(){
  document.getElementById('page1').style.display = "block";
  document.getElementById('page2').style.display = "none";
}

function validarRamais(){

  var ramaisDigitais = document.getElementById('ramais-digitais').value;
  var ramaisAnalogicos = document.getElementById('ramais-analogicos').value;
  var ramaisIP = document.getElementById('ramais-IP').value;

  var cont = 0;
    if(ramaisDigitais < 0 || ramaisDigitais > 48){
      alert("Insira um valor válido de ramais digitais!")
    } else {
      cont++;
    }
    if(ramaisAnalogicos < 0 || ramaisAnalogicos > 160){
      alert("Insira um valor válido de ramais analógicos!")
    } else {
      cont++;
    }

    if(ramaisIP < 0 || ramaisIP > 120){
      alert("Insira um valor válido de ramais IP!")
    } else {
      cont++;
    }

  if(cont == 3){
  document.getElementById('page3').style.display = "block";
  document.getElementById('page2').style.display = "none";
}

}
function back2(){
  document.getElementById('page2').style.display = "block";
  document.getElementById('page3').style.display = "none";
}

function validarAcessorios(){

  var comDisplay = document.getElementById('com-display').value;
  var semDisplay = document.getElementById('sem-display').value;
  var comVideo = document.getElementById('com-video').value;
  var softphone = document.getElementById('softphone').value;

  var cont = 0;
    if(comDisplay < 0 || comDisplay > 100){
      alert("Insira um valor válido de ramais com display!")
    } else {
      cont++;
    }
    if(semDisplay < 0 || semDisplay > 100){
      alert("Insira um valor válido de ramais sem display!")
    } else {
      cont++;
    }

    if(comVideo < 0 || comVideo > 100){
      alert("Insira um valor válido de ramais com vídeo")
    } else {
      cont++;
    }

    if(softphone < 0 || softphone > 100){
      alert("Insira um valor válido de ramais com softphone!")
    } else {
      cont++;
    }

    if(cont == 4){
    document.getElementById('page3').style.display = "none";
    document.getElementById('finish').style.display = "block";
  }
}

function propostas1(){
  document.getElementById('finish').style.display = "none";
  document.getElementById('propostas1').style.display = "block";
}

function novaProposta(){
  document.getElementById('propostas1').style.display = "none";
  document.getElementById('filialList').style.display = "block";
}
