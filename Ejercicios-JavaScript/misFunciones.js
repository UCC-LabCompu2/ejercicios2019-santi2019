/**
 * Created by Agus on 6/5/2017.
 */

/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */
function suma(){
    document.opeMat.sum_total.value=Number(document.opeMat.sum_num1.value) + Number(document.opeMat.sum_num2.value);
}

function resta(){
    document.opeMat.res_total.value=Number( document.opeMat.res_num1.value) - Number(document.opeMat.res_num2.value);
}
function multiplicacion() {
    document.opeMat.mul_total.value=Number( document.opeMat.mul_num1.value) * Number(document.opeMat.mul_num2.value);
}
function division() {
    document.opeMat.div_total.value = Number(document.opeMat.div_num1.value) / Number(document.opeMat.div_num2.value);
}
function conv_Grados_Rad(id_elem, valor) {
    if (id_elem == "grados") {
        document.getElementById("radianes").value = valor * Math.PI / 180;
    }
    if (id_elem == "radianes") {
        document.getElementById("grados").value = valor * 180 / Math.PI;
    }
}

function mostrar_ocultar(id_elem){

    if(id_elem=="ocultarDiv"){
        document.getElementById("unDiv").style.display='none';
    }
    if(id_elem=="mostrarDiv"){
        document.getElementById("unDiv").style.display='block';
    }
}

function dibujarCircCuad() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d")

    ctx.fillStyle = "#E61C1C";
    ctx.beginPath();
    ctx.arc(47, canvas.height/2, 28,0,2*Math.PI);
    ctx.fill();
    ctx.closePath();

    ctx.fillStyle = "#1C5CE6";
    ctx.beginPath();
    ctx.arc(47, 300, 28,0,2*Math.PI);
    ctx.fill();
    ctx.closePath();
}


function grilla(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "black";

    ctx.beginPath();

    for(var i=0;i<canvas.width;i=i+10){
        ctx.moveTo(i,0);
        ctx.lineTo(i,canvas.height);}
    for(var i=0;i<canvas.height;i=i+10){
        ctx.moveTo(0,i);
        ctx.lineTo(canvas.width,i);}

    ctx.stroke();
    ctx.closePath();
}

function dibujarImg(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var img = new Image();
    img.src = "images/auto.png";

    img.onload = function () {
        ctx.drawImage(img, 50, 50);
    }

}





























