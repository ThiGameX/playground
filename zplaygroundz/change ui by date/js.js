horaShow = ((new Date()).getHours()) + ":" + (((new Date()).getMinutes()))

hora = ((new Date()).getHours()) + (((new Date()).getMinutes())/60)
alert(hora)

if(hora > 0 && hora < 11){
    document.getElementById("bom").innerHTML = "BOM DIA"

    document.getElementById("hora").innerHTML = `Agora são ${horaShow}`
    img = document.getElementById("resultImg")
    img.style.background = "url('imgs/morn-inner.jpg')"
    img.style.backgroundSize = "100% 100%";
    
    body = document.getElementById("body");
    body.style.backgroundImage = "url('imgs/morn-out.jpg')";
}

if((hora >= 11) && (hora < 17.5)){
    document.getElementById("bom").innerHTML = "BOA TARDE"

    document.getElementById("hora").innerHTML = `Agora são ${horaShow}`
    img = document.getElementById("resultImg")
    img.style.background = "url('imgs/morn-inner.jpg')"
    img.style.backgroundSize = "100% 100%";
    
    body = document.getElementById("body");
    body.style.backgroundImage = "url('imgs/morn-out.jpg')";
}

if(hora > 17.5 && hora < 23.99){
    document.getElementById("bom").innerHTML = "BOA NOITE"

    document.getElementById("hora").innerHTML = `Agora são ${horaShow}`
    img = document.getElementById("resultImg")
    img.style.background = "url('imgs/night-inner.jpg')"
    img.style.backgroundSize = "100% 100%";
 
    document.body.style.backgroundImage = "url('night-out.jpg')";
}
alert(horaShow)