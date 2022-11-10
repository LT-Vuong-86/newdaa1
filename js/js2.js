function tinhtong(){
    let a1= document.getElementById('a1').value;
    a1 = parseFloat(a1);
    let b1= document.getElementById('b1').value;
    b1 = parseFloat(b1);
    let tong= a1 + b1;
   document.getElementById('show').innerHTML= tong;
}