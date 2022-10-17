function clicar(){
    var idade = window.document.getElementById('txtidade')
    var msgm  = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
   
    var idade = txtidade.value
   
    msgm.innerHTML = (`Você tem ${idade} anos.`)

    if(idade >=1 && idade <= 12 ){
        img.src = 'crianca.png'
        msgm.innerHTML = (`Você tem ${idade} anos, você é criança.`)
    }else{
        if(idade >=12 & idade <=25){
            img.src = 'jovem.png'
            msgm.innerHTML = (`Você tem ${idade} anos, você é jovem.`)
        }else if(idade >=26 && idade <=49){
            img.src = 'adulto.png'
            msgm.innerHTML = (`Você tem ${idade} anos, você é adulto.`)
        } else if(idade >= 50){
            img.src = 'idosa.png'
            msgm.innerHTML = (`Você tem ${idade} anos, você é idoso(a).`)
        }
    }
}