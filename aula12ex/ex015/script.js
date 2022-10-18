function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.lenght == 0 || fano.value > ano){
        alert ('[ERRO] Confira os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'HOMEM'
            if(idade >=0 && idade <15){
                //Criança
                img.setAttribute('src', 'crianca.png')
            } else if(idade >=16 && idade < 25){
                //Adolecente
                img.setAttribute('src', 'jovem.png')
            } else if(idade >= 26 && idade < 49){
                //Adulto
                img.setAttribute('src', 'adulto.png')
            } else if(idade >= 50){
                //Idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if(fsex[1].checked){
            genero = 'MULHER'
            if(idade >=0 && idade <15){
                //Criança
                img.setAttribute('src', 'crianca2.png')

            } else if(idade >=16 && idade < 25){
                //Adolecente
                img.setAttribute('src', 'jovem2.png')
            } else if(idade >= 26 && idade < 49){
                //Adulto
                img.setAttribute('src', 'adulto2.png')
            } else if(idade >= 50){
                //Idoso
                img.setAttribute('src', 'idoso2.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade}</strong> anos`
        res.appendChild(img)
    }
}