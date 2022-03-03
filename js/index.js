/**1ª UNIDADE */

function abrirUnidade1(){
    let telaPreta = document.getElementById("telaPreta");
    telaPreta.style.display = 'block';
    let menu = document.getElementById("containerMenu");
    menu.style.display = 'none';
    let openUnid1 = document.getElementById("unidade1");
    openUnid1.style.visibility = 'visible';
}

function media1(){
     const teste_1 = document.getElementById("teste1").value.replace(".",",");
     const prova_1 = document.getElementById("prova1").value.replace(".",",");
     const final_1 = document.getElementById("final1").value.replace(".",",");
        const media_1 = (parseFloat(teste_1) + parseFloat(prova_1) + parseFloat(final_1))/3;
    document.getElementById("media1").value = media_1.toFixed(1).replace(".",",");
}  

function fecharUnidade1(){
    let fecharUnidade = document.getElementById("unidade1");
    fecharUnidade.style.display = 'none';
    location.reload();
}



/**2ª UNIDADE */

function abrirUnidade2(){
    let telaPreta = document.getElementById("telaPreta");
    telaPreta.style.display = 'block';
    let menu = document.getElementById("containerMenu");
    menu.style.display = 'none';
    let openUnid2 = document.getElementById("unidade2");
    openUnid2.style.visibility = 'visible';
}

function media2(){
     const teste_2 = document.getElementById("teste2").value.replace(".",",");
     const prova_2 = document.getElementById("prova2").value.replace(".",",");
     const final_2 = document.getElementById("final2").value.replace(".",",");
        const media_2 = (parseFloat(teste_2) + parseFloat(prova_2) + parseFloat(final_2))/3;
    document.getElementById("media2").value = media_2.toFixed(1).replace(".",",");
}  

function fecharUnidade2(){
    let fecharUnidade2 = document.getElementById("unidade2");
    fecharUnidade2.style.display = 'none';
    location.reload();
}


/**3ª UNIDADE */

function abrirUnidade3(){
    let telaPreta = document.getElementById("telaPreta");
    telaPreta.style.display = 'block';
    let menu = document.getElementById("containerMenu");
    menu.style.display = 'none';
    let openUnid3 = document.getElementById("unidade3");
    openUnid3.style.visibility = 'visible';
}

function media3(){
     const teste_3 = document.getElementById("teste3").value.replace(".",",");
     const prova_3 = document.getElementById("prova3").value.replace(".",",");
     const final_3 = document.getElementById("final3").value.replace(".",",");
        const media_3 = (parseFloat(teste_3) + parseFloat(prova_3) + parseFloat(final_3))/3;
    document.getElementById("media3").value = media_3.toFixed(1).replace(".",",");
}  

function fecharUnidade3(){
    let fecharUnidade3 = document.getElementById("unidade3");
    fecharUnidade3.style.display = 'none';
    location.reload();
}



/**4ª UNIDADE */

function abrirUnidade4(){
    let telaPreta = document.getElementById("telaPreta");
    telaPreta.style.display = 'block';
    let menu = document.getElementById("containerMenu");
    menu.style.display = 'none';
    let openUnid4 = document.getElementById("unidade4");
    openUnid4.style.visibility = 'visible';
}

function media4(){
     const teste_4 = document.getElementById("teste4").value.replace(".",",");
     const prova_4 = document.getElementById("prova4").value.replace(".",",");
     const final_4 = document.getElementById("final4").value.replace(".",",");
        const media_4 = (parseFloat(teste_4) + parseFloat(prova_4) + parseFloat(final_4))/3;
    document.getElementById("media4").value = media_4.toFixed(1).replace(".",",");
}  

function fecharUnidade4(){
    let fecharUnidade4 = document.getElementById("unidade4");
    fecharUnidade4.style.display = 'none';
    location.reload();
}
