document.getElementById('burger').onclick = function () {
    document.getElementById('nav').classList.add('open');
    document.getElementById('burger-exit').classList.add('open');

}

document.querySelectorAll('#nav *').forEach((item) => {
    item.onclick = () => {
        document.getElementById('nav').classList.remove('open');
    }
})