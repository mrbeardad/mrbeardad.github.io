let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/github.png') {
        myImage.setAttribute('src', 'images/archlinux.png');
    } else {
        myImage.setAttribute('src', 'images/github.png');
    }
}