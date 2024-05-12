document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.getElementById('btn');

    noBtn.addEventListener('mouseenter', () => {


        const randomX = Math.random() * (window.innerWidth - noBtn.clientWidth);
        const randomY = Math.random() * (window.innerHeight - noBtn.clientHeight);
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;


    });
});


const btnSi = document.getElementById('btn-si')


btnSi.addEventListener('click', () =>{

    const container = document.querySelector('.container')

    container.style.display = "none";


    const aparece = document.querySelector('.aparece');

    aparece.style.display = "flex";
})
