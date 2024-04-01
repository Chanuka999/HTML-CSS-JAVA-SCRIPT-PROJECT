const btnE1 = document.querySelector(".btn");

btnE1.addEventListener("mouseover", (event) => {
    const x = (event.pageX - btnE1.offsetLeft);
    const y = (event.pageX - btnE1.offsetLeft);

    btnE1.Style.setProperty("--xPos", x + "px");
    btnE1.Style.setProperty("--yPos", y + "px");
    
}); 