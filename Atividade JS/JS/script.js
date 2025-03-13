function verificarNumero(){
    var num = document.getElementById("num").value;
    var mensagem = "";

    if(num >= 0){
        mensagem="O número é positivo";
    }else{
        mensagem= "O número é negativo"
    }
    console.log(mensagem.length)
    document.getElementById("resultado").innerHTML=mensagem;
}