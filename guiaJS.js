let comeback = document.title;
        window.addEventListener("blur", ()=>{
            document.title = "VOLTA :(";
        })
        window.addEventListener("focus", () =>{
            document.title = comeback;
        });

        let multiTitles = ["Testando Js","Praticando e aprendendo","Combo de javaScript"];
        let counter = 0;
        setInterval(function(){
            document.title = multiTitles[counter % multiTitles.length];
            counter++;
        }, 2000);