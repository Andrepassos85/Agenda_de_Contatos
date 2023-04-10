const form  = document.getElementById('form-atividade');
const nomes = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaContatos();
    atualizaTabela();
});
function adicionaContatos() {

    const inputNomePessoa = document.getElementById('nome-pessoa');
    const inputNumeroTelefone = document.getElementById('numero-telefone');

    if(nomes.includes(inputNomePessoa.value)) {
        alert(`O nome: ${inputNomePessoa.value} já consta na lista!!`);
    }else{
        nomes.push(inputNomePessoa.value);
        numeros.push(inputNumeroTelefone.value);
        
        let linha = '<tr>';
        linha += `<td>${inputNomePessoa.value}</td>`;
        linha += `<td>${inputNumeroTelefone.value}</td>`;
        linha += '<tr>';

        linhas += linha;
    }
    inputNomePessoa.value = '';
    inputNumeroTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}