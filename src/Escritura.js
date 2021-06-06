var i, text;
i=0;
text="Bienvenido a mi pagina web, mi nombre es Francisco, soy un Full stack Developer";
function typing(){
    if(i<text.lenght){
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing,0.2);
    }
   
}
typing();