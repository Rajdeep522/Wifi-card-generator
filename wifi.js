const networkInput = document.getElementById('network');
const passwordInput = document.getElementById('password');
const qrcodeDiv = document.getElementById('qrcode');

function generateQR() {
    const network = networkInput.value;
    const password = passwordInput.value;
    const wifiString = `WIFI:T:WPA;S:${network};P:${password};;`;

    qrcodeDiv.innerHTML = '';
    const qr = qrcode(0, 'L');
    qr.addData(wifiString);
    qr.make();
    qrcodeDiv.innerHTML = qr.createImgTag(5);
}

networkInput.addEventListener('input', generateQR);
passwordInput.addEventListener('input', generateQR);

function printCard(){
    window.print();
}

// Initial QR code generation
generateQR();

