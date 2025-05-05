const containerPrincipal = document.querySelector(".container-principal");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input");
const qrCodeImg = document.querySelector("#qr-code img");

// Eventos
const generateQrcode = () =>{
    const qrCodeInputValue = qrCodeInput.value; // instancio a variável e guardou o valor que o usuário digitou no input
    if (!qrCodeInput) {
        return;
    }
    qrCodeBtn.innerText = "Gerando código...";

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

    qrCodeImg.addEventListener("load", () => {
        containerPrincipal.classList.add("active");
        qrCodeBtn.innerText = "Código criado!";
    })
}


qrCodeBtn.addEventListener("click", () => {
    generateQrcode();
});

qrCodeInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter"){
        generateQrcode();
    }
});

qrCodeInput.addEventListener("keyup", (e) => {
    if(!qrCodeInput.value){
        containerPrincipal.classList.remove("active");
        qrCodeBtn.innerText = "Gerar QR Code";
    }
});