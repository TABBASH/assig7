
function increment(i){
 
  let a = document.getElementById(i).innerHTML;
  a++;
  document.getElementById(i).innerHTML = Number(a) ;
  let b = document.getElementById("cartAmount").innerHTML;
  b++;
  document.getElementById("cartAmount").innerHTML = Number(b) ;
  let c = document.getElementById("totalprice").innerHTML;
  c = Number(c) + i;
  document.getElementById("totalprice").innerHTML = Number(c) ;
  
};


function decrement(i){
 
  let a = document.getElementById(i).innerHTML;
  if(a>0){
  a--;
  document.getElementById(i).innerHTML = Number(a) ;
  let b = document.getElementById("cartAmount").innerHTML;
  b--;
  document.getElementById("cartAmount").innerHTML = Number(b) ;
  let c = document.getElementById("totalprice").innerHTML;
  c = Number(c) - i;
  document.getElementById("totalprice").innerHTML = Number(c) ;
  }else{
    document.getElementById(i).innerHTML = Number(a) ;
  }
};



















