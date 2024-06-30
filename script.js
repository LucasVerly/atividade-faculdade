let login = document.querySelector('.login');
let cadastro = document.querySelector('.cadastro');


function cadastrar (){
    cadastro.style.display = "block";
    login.style.display = "none";
}

function logar (){
    cadastro.style.display = "none";
    login.style.display = "block";
}

function efetuarLogin () {
    let email = document.querySelector('#emailLogin')
    let senha = document.querySelector('#senhaLogin')
    if(email.value == "" && senha.value == ""){
        alert("Preencha todos os campos!!!")
        email.style.border = "2px solid red";
        senha.style.border = "2px solid red";
    } else {
        alert("Login efetuado com sucesso!!!")
    }
}

function cadastrarDados(){
    let email = document.querySelector('#email')
    let senha = document.querySelector('#senha')
    let cep = document.querySelector('#cep')
    let nome = document.querySelector('#nome')

    if(email.value == "" && senha.value == "" && cep.value == "" && nome.value == ""){
        alert("Preencha todos os campos!!!")
        email.style.border = "2px solid red";
        senha.style.border = "2px solid red";
        cep.style.border = "2px solid red";
        nome.style.border = "2px solid red";
    } else {
        alert("Cadastro efetuado com sucesso!!!")
    }
}