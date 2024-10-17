let btn= document.querySelector('#generate')
let qrcode= document.querySelector('.qrcode')

btn.addEventListener('click', (e) => {
    e.preventDefault()

    let text = document.querySelector('#text').value;
    const fgcolor = document.querySelector('#fgcolor').value.substring(1); // Remove the "#" from color hex
    const bgcolor = document.querySelector('#bgcolor').value.substring(1); // Remove the "#" from color hex

    if(text == ''){
        alert('Emter Text or Url into Textbox')
    }
    else{
        let qr = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(text)}&color=${fgcolor}&bgcolor=${bgcolor}`;
        qrcode.classList.add('active')
        qrcode.src = qr
    }   

})
