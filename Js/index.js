const btnToggle = document.getElementById('btn-toggle')

btnToggle.addEventListener('click', () => {
    console.log(btnToggle)
    
    let navbar = document.getElementById('navbar')

    navbar.classList.toggle('ativo')
}); 

const entrada = document.getElementById('entrada')

entrada.addEventListener('click', ()=>{
    console.log(entrada); 
    window.location.href = './Pages/Valor_entrada.html';
})