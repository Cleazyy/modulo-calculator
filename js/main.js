function modulo(){
   this.nb1 = document.getElementById("nb1").value;
   this.nb2 = document.getElementById("nb2").value;

   let result = (nb1 % nb2);
   document.getElementById("result").innerHTML=`${nb1} modulo ${nb2} = ${result}`;
}