let resposta1 = document.getElementById('resposta1')
let gravar = document.getElementById('gravar')

gravar.addEventListener('click', ()=>{
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    const dados = {
        nome: nome,
        email: email,
        senha: senha
    }
    console.log(dados)

    fetch('http://localhost:3000/cadastrar', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(dados)
    })
    .then(resposta1 => resposta1.json())
    .then(valores => {
        resposta1.innerHTML = "id = " + valores.id + ", nome = " + valores.nome + ", email = " + valores.email + ", senha = " + valores.senha
    })
    .catch((err)=>{
        console.log(`erro: ${err}`)
    })
})