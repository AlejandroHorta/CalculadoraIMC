function calcular(peso, altura) {
  var peso = document.getElementById("txtPeso").value;
  var altura = document.getElementById("txtAltura").value;
  var imc = peso / (altura * altura);
  document.getElementById("resultado").innerHTML = imc.toFixed(2);

  if (imc < 18.5) {
    document.getElementById("PorDebajoDelPeso").classList.add("destaque");
  } else if (imc <= 24.9) {
    document.getElementById("PesoNormal").classList.add("destaque");
  } else if (imc <= 29.9) {
    document.getElementById("SobrePeso").classList.add("destaque");
  } else if (imc <= 39.9) {
    document.getElementById("Obesidad").classList.add("destaque");
  } else if (imc > 40) {
    document.getElementById("ObesidadMorbida").classList.add("destaque");
  } else {
    document.getElementById("resultado").innerHTML = "Digite un valor válido";
  }
}
