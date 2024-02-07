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