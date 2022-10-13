function carregar(){
    var img = window.document.getElementById('imagem')
    var msgm = window.document.getElementById('msg')
    var data = new Date()
    var hora = data.getHours()
    var hora = 20
    msgm.innerHTML = (`Agora são exatamente ${hora} horas.`)

    if (hora >= 0 && hora < 12){
        img.src = 'manha.png'
        document.body.style.background = 'yellow'

    } else if (hora >=12 && hora <=18){
        img.src = 'tarde.png'
        document.body.style.background = 'orange'

    } else {
        if(hora >=19 && hora <=24){
        img.src = 'noite.png'
        document.body.style.background = 'darkblue'
        }
    }



}