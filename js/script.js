function contarPalavra(valor){			
    valor.replace(/(\r\n|\n|\r)/g," ").trim();
    
    var cont = valor.split(/\s+/g).length - 1;
                
    if(cont == "1" || cont == "0"){
        document.getElementById("quantidade").value= "Total: " + cont + " Palavra";
    }else{
        document.getElementById("quantidade").value = "Total: " + cont + " Palavras";
    }
}

// const entradaTexto = document.getElementById("#texto");
// const contador = document.getElementById("#quantidadePalavras");
// const btn = document.getElementById("#botao");

// let modo = "characters";

// btn.addEventListener("click", () => {
//     modo = "characters";
//     btn.textContent = "Contar Palavras";
    
// });

// entradaTexto.addEventListener("input", () => {
//     let cont = 0;

//     const palavras = entradaTexto.value.trim().split(/\s+/);
//     cont = entradaTexto.value.trim() === "" ? 0 : palavras.length;
//     contador.textContent = `Total: ${cont} palavra(s)`;
// });