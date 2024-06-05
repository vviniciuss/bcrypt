let resposta2 = document.getElementById('resposta2')
let login = document.getElementById('login')

login.addEventListener('click', ()=>{
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    const dados = {
        nome: nome,
        email: email,
        senha: senha
    }
    console.log(dados)

    fetch('http://localhost:3000/logar', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(dados)
    })
    .then(resposta2 => resposta2.json())
    .then(valores => {
        resposta2.innerHTML = "usuario encontrado,você sera redirecionado para outra pagina daqui 10 segundos"
    })
    .catch((err)=>{
        console.log(`erro: ${err}`)
    })
})