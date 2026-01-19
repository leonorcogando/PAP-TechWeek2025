//NOTAS: Agora só falta alterar o código para quando chegar 0 mandar emai-l, mas já está tudo a funcionar!

emailjs.init({
    publicKey: "TCLPu7ak-W8pSE0z8" 
});

// Função para enviar email de teste
function enviarEmailTeste() {

    emailjs.send("service_gmf7doj", "template_odt726m", {
         nome: "Utilizador Teste",
        mensagem: "OI mozinho, Se recebes-te este email é porque o sistema de envio de emails já está a funceminar. Te amoooooo muitooooooo!",
        email_destino: "leonorcogando@gmail.com"
    })
    .then(() => {
        alert("Email enviado com sucesso!");
    })
    .catch((error) => {
        alert("Erro ao enviar email: " + error.text);
    });
}