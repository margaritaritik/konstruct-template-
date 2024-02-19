function myFunction() {
    console.log("rdkjckndkjdjv");
    let x = document.getElementById("myTopnav");
    if (x.className === "menu_list") {
        console.log("menu_list");
        x.className += " responsive";
    } else {
        console.log("responsive");
        x.className = "menu_list";
    }
}
document.addEventListener('click', e => {
    // определяем, что клик произошёл на ссылке
    if (e.target.nodeName === 'A' && e.target.) {
        // отменяем переход по ссылке
        e.preventDefault()
        alert('Ой-ой! Здесь должна быть страница, но она ушла в отпуск на багамские острова. Мы уже высылаем ей билет обратно, так что скоро всё будет на своих местах!');
    }
})

window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
}
