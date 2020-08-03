const libra = 2.2046;
function Calc() {
    var peso = document.getElementById("CarKg").value;
    var dian = document.getElementById("Dianteira").value;
    var PesoC = peso * libra;
    var barraT = 0.4 * dian;
    var barraD = 0.4 * (100 - dian);        
    var molaT = (PesoC - ((PesoC/100)*dian)) / 2;
    var molaD = (PesoC - ((PesoC/100) * (100 - dian))) / 2;
    var RRD = molaD.toString().split("",2);
    var RRT = molaT.toString().split("",2);
    RRD = RRD.toString().replace(",",".");
    RRT = RRT.toString().replace(",",".");
    var RCDMax = parseFloat(RRD) + (parseFloat(RRD) * 0.75);
    var RCDMin = parseFloat(RRD) + (parseFloat(RRD) * 0.50);
    var RCTMax = parseFloat(RRT) + (parseFloat(RRT) * 0.75);
    var RCTMin = parseFloat(RRT) + (parseFloat(RRT) * 0.50);
    molaD = molaD * 0.17858;
    molaT = molaT * 0.17858
    molaD = molaD.toFixed(1);
    molaT = molaT.toFixed(1);
    barraD = barraD.toFixed(2);
    barraT = barraT.toFixed(2);
    RCTMax = RCTMax.toFixed(1);
    RCTMin = RCTMin.toFixed(1);
    RCDMax = RCDMax.toFixed(1);
    RCDMin = RCDMin.toFixed(1);
    document.getElementById("divR").innerHTML = "<p>Os resultados foram<br>Barra estabilizadora dianteira: " + barraD + "<br>Barra estabilizadora traseira: " + barraT + "<br>Mola dianteira: " + molaD
    + "<br>Mola traseira: " + molaT + "<br>Rigidez do retorno dianteiro: " + RRD + "<br>Rigidez do retorno traseiro: " + RRT + "<br>Rigidez da compressão dianteira mínima: " + RCDMin 
    + "<br>Rigidez da compressão dianteira máxima: " + RCDMax + "<br>Rigidez da compressão mínima: " + RCTMin + "<br>Rigidez da compressão máxima: " + RCTMax + "<p> <p>OBS.:Todos os cálculos foram feitos com exatidão, mas podem ser aumentados ou diminuídos de " 
    + " acordo com sua maneira de guiar o carro.Na rigidez de compressão selecione um valor desde o valor mínimo até o máximo e modifique conforme testar!";
}