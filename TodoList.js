
function addMoreItem(){
    let li = document.createElement('LI');
    let getValue = document.getElementById('newTaskInput').value;
    let input_text = document.createTextNode(getValue);
    let trash = document.createElement('SPAN');
    trash.className = "trashIcon"

    if(getValue <= null){
        alert("Insira algo na lista!")
    }else{
        li.appendChild(input_text);
        document.querySelector('ul').appendChild(li);
    };
    document.getElementById('newTaskInput').value = "";

    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var item = this.parentElement;
        item.style.display = "none";
      }
    }
        var span = document.createElement('SPAN');
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);
      
        for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
            var item = this.parentElement;
            item.style.display = "none";
          }
        } 
};
