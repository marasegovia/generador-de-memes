const url=document.getElementById("url");
const contenedorImg=document.getElementById("contenedor-img")
const txtareaToptext=document.getElementById("txtarea-toptext");
const txtareaButtomtext=document.getElementById("txtarea-buttomtext")
const tTxt=document.getElementById("t-txt")
const bTxt=document.getElementById("b-txt")
const sinTopText=document.getElementById("sin-top-text")
const sinButtomText=document.getElementById("sin-buttom-text")
const tipoFuente=document.getElementById("tipo-fuente")
const tamanoFuente=document.getElementById("tamano-fuente")
const btnIzquierda=document.getElementById("btn-izquierda")
const btnCentro=document.getElementById("btn-centro")
const btnDerecha=document.getElementById("btn-derecha")
const colorTxt=document.getElementById("color-txt")
const colortxtfondo=document.getElementById("color-txt-fondo")
const fondoTransparente=document.getElementById("fondo-transparente")
const contornoNinguno=document.getElementById("contorno-ninguno")
const contornoClaro=document.getElementById("contorno-claro")
const contornoOscuroo=document.getElementById("contorno-oscuro")
const btnEspaciado=document.getElementById("btn-espaciado")
const btnInterlineado=document.getElementById("btn-interlineado")
const btnFondoImg=document.getElementById("btn-fondo-img")
const tipoFondo=document.getElementById("tipo-fondo")
const brillo=document.getElementById("brillo")
const contraste=document.getElementById("contraste") 
const opacidad=document.getElementById("opacidad")
const desenfoque=document.getElementById("desenfoque")
const escalaDeGrices=document.getElementById("escala-de-grices")
const sepia=document.getElementById("sepia")
const hue=document.getElementById("hue")
const saturado=document.getElementById("saturado")
const negativo=document.getElementById("negativo")
const panelTexto=document.getElementById("panel-texto")
const panelImagen=document.getElementById("panel-imagen")
const btnPanelTexto=document.getElementById("btn-panel-texto")
const btnPanelImagen=document.getElementById("btn-panel-imagen")


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

tipoFuente.addEventListener("change",() => {
    tTxt.style.fontFamily= tipoFuente.value
    bTxt.style.fontFamily= tipoFuente.value
})

tamanoFuente.addEventListener("input", () =>{
    tTxt.style.fontSize=`${tamanoFuente.value}px`
    bTxt.style.fontSize= `${tamanoFuente.value}px`
})

btnIzquierda.addEventListener("click", () => {
    tTxt.style.textAlign="left"
    bTxt.style.textAlign="left"
})

btnCentro.addEventListener("click", () => {
    tTxt.style.textAlign="center"
    bTxt.style.textAlign="center"
})

btnDerecha.addEventListener("click", () => {
    tTxt.style.textAlign="right"
    bTxt.style.textAlign="right"
})


colortxtfondo.addEventListener("input", () => {
  if (!fondoTransparente.checked) {
    tTxt.style.backgroundColor = colortxtfondo.value;
    bTxt.style.backgroundColor = colortxtfondo.value;
  }
});



fondoTransparente.addEventListener("input", () => {
  if (fondoTransparente.checked) {
    contenedorImg.style.backgroundSize="cover"
    tTxt.style.left="33%"
    tTxt.style.backgroundColor = "transparent";
    tTxt.style.position= "absolute";
    bTxt.style.backgroundColor = "transparent";
    bTxt.style.position= "absolute";
    bTxt.style.left="30%"
    bTxt.style.top="82%"
  } else {
    tTxt.style.backgroundColor = colortxtfondo.value;
    tTxt.style.position="static";
    bTxt.style.backgroundColor = colortxtfondo.value;
    bTxt.style.position="static";
  }
});

 colorTxt.addEventListener("input",() =>{
     tTxt.style.color= colorTxt.value
     bTxt.style.color= colorTxt.value
 })

 contornoNinguno.addEventListener("click", () =>{
    tTxt.style.textShadow="none"
    bTxt.style.textShadow="none"
 })

 contornoClaro.addEventListener("click",() => {
    tTxt.style.textShadow= "2px 0 0 white, -2px 0 0 white, 0 2px 0 white, 0 -2px 0 white "
    bTxt.style.textShadow= "2px 0 0 white, -2px 0 0 white, 0 2px 0 white, 0 -2px 0 white "
 })

 contornoOscuroo.addEventListener("click",() => {
    tTxt.style.textShadow="2px 0 0 black, -2px 0 0 black, 0 2px 0 black, 0 -2px 0 black"
    bTxt.style.textShadow="2px 0 0 black, -2px 0 0 black, 0 2px 0 black, 0 -2px 0 black"

 })

 btnEspaciado.addEventListener("input", () => {
    tTxt.style.padding=`${btnEspaciado.value}px`
    bTxt.style.padding=`${btnEspaciado.value}px`
 })


 btnInterlineado.addEventListener("change", () => {
    tTxt.style.lineHeight=btnInterlineado.value
    bTxt.style.lineHeight=btnInterlineado.value
 })

 btnFondoImg.addEventListener("input", () => {
contenedorImg.style.backgroundColor=btnFondoImg.value
 })

 tipoFondo.addEventListener("input", () => {
    contenedorImg.style.backgroundBlendMode=tipoFondo.value
 })

 const filtros = () =>{
contenedorImg.style.filter`brightness(${brillo.value}) contrast(${contraste.value * 100}%) opacity(${opacidad.value})
blur(${desenfoque.value}px) grayscale(${escalaDeGrices.value}%) sepia(${sepia.value}%) hue-rotate(${hue.value * 100}deg)
saturate(${saturado.value}%) invert(${negativo.value})`
 }

 brillo.addEventListener("input", filtros)

 contraste.addEventListener("input", filtros)

 opacidad.addEventListener("input", filtros)

 desenfoque.addEventListener("input", filtros)

 escalaDeGrices.addEventListener("input", filtros)

 sepia.addEventListener("input", filtros)

 hue.addEventListener("input", filtros)

 saturado.addEventListener("input", filtros)

 negativo.addEventListener("input", filtros)

 btnPanelTexto.addEventListener("click", () => {
  panelImagen.classList.add("oculto")
  panelTexto.classList.remove("oculto")
 })

 btnPanelImagen.addEventListener("click", () => {
    panelImagen.classList.remove("oculto")
    panelTexto.classList.add("oculto")
 })

 const btnDescargar=document.getElementById("btn-descargar")
const contenedorMeme=document.getElementById("contenedor-meme")

const descargarMeme = () => {
    domtoimage.toBlob(contenedorMeme).then(function (blob) {
        window.saveAs(blob, 'mi-meme.png');
        console.log("hola");
    });

};
btnDescargar.addEventListener('click', descargarMeme);
