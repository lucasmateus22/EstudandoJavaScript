window.onscroll=function(){scrollFunction()};
            function scrollFunction(){
                if(document.body.scroll > 50 || document.documentElement.scrollTop > 50){
                    document.getElementById("buttonScroll").style.display = "flex";
                }else{
                    document.getElementById("buttonScroll").style.display = "none";
                }
            }
            function scrollTopFunc(){
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
};