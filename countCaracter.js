document.getElementById('btn-exibir-nome').addEventListener('click', function() {
    const quantidadeLetras = document.getElementById('nome-completo').value;
    alert("A quantidade de letras do seu nome é: " + quantidadeLetras.length);
});