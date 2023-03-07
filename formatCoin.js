function formatoCoin(i){
    var elemento = i.value.replace(/\D/g,'');
    elemento = (elemento/100).toFixed(2) + '';
    elemento = elemento.replace(".", ",");
    elemento = elemento.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    i.value = elemento;
}