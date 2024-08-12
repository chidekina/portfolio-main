let scrollContainer = document.querySelector('.galeria');
let btnTras = document.getElementById("btn-anterior");
let btnFrente = document.getElementById("btn-proximo");

scrollContainer.addEventListener('wheel', (e) => {
    e.defaultPrevented;
    scrollContainer.scrollLeft += e.deltaY;
    scrollContainer.style.scrollBehavior = 'auto';
});

btnFrente.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft += 800;
})

btnTras.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft -= 800;
})