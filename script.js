var img = document.getElementById('img');
var txt = document.getElementById('txt');
var view = document.getElementById('button');
view.addEventListener('click', () => {
    img.src = txt.value;
});
