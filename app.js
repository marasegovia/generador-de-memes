const url=document.getElementById("url");
const contenedorImg=document.getElementById("contenedor-img")
const txtareaToptext=document.getElementById("txtarea-toptext");
const txtareaButtomtext=document.getElementById("txtarea-buttomtext")
const tTxt=document.getElementById("t-txt")
const bTxt=document.getElementById("b-txt")
const sinTopText=document.getElementById("sin-top-text")
const sinButtomText=document.getElementById("sin-buttom-text")

url.addEventListener("input",(event)=>{
    const mostrarImagen= event.target.value;
    contenedorImg.style=`background-image: url("${mostrarImagen}")`
})
txtareaToptext.addEventListener("input",(event)=>{
    const topText= event.target.value;
  tTxt.innerHTML = topText
})
txtareaButtomtext.addEventListener("input",(event)=>{
    const bottomText= event.target.value;
  bTxt.innerHTML = bottomText
})

sinTopText.addEventListener("input",()=>{
    if(sinTopText.checked){
        tTxt.style.display="none"
        contenedorImg.style.backgroundSize="cover"
    }
    else{
        tTxt.style.display="block"
    }
})

sinButtomText.addEventListener("input",()=>{
    if(sinButtomText.checked){
        bTxt.style.display="none"; 
        contenedorImg.style.backgroundSize="cover"
    }
    else{
        bTxt.style.display="block"
    }
})


