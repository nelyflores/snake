
  var cuadrito=document.getElementById("guy");
  var container=document.getElementById("container");
  var cuadritoLeft =0;
  var cuadritoTop=0;
  var reinicio=document.getElementById("reinicio1");
  document.addEventListener("keydown",anim);

    function anim(e){
      //alert(e.keyCode);
      if (e.keyCode == 39){
        cuadritoLeft+=2;
        cuadrito.style.left=cuadritoLeft + "px";
         if(cuadritoLeft>= 490){
           cuadritoLeft -=2;
           alert("perdiste");
           document.removeEventListener("keydown",anim);
        }

      }
      if(e.keyCode==37){
        cuadritoLeft -=2;
        cuadrito.style.left=cuadritoLeft + "px";
          if(cuadritoLeft<= 0){
        //  guyLeft +=2;
            alert("perdiste");
            document.removeEventListener("keydown",anim);
          }
      }
      if(e.keyCode==38){
        cuadritoTop -= 2;
        cuadrito.style.top=cuadritoTop + "px";
         if(cuadritoTop<= 0){
         // guyLeft +=2;
            alert("perdiste");
            document.removeEventListener("keydown",anim);
        }


      }
     if(e.keyCode==40){
        cuadritoTop += 2;
        guy.style.top=cuadritoTop + "px";
         if(cuadritoTop>= 491){

           alert("perdiste");
           document.removeEventListener("keydown",anim);
        }


    }
}
