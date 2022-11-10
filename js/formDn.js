function bang(){
    let taikhoan=document.getElementById('tk1').value;
    let matkhau=document.getElementById('mk').value;
    let laimatkhau=document.getElementById('lmk').value;
    if( taikhoan == "" || taikhoan == null){
document.getElementById('stk').innerHTML="không được để trống";
return false;
    }
    else{
        document.getElementById('stk').innerHTML="";
    
    }
   if(matkhau == "" || matkhau == null ){
 document.getElementById('smk').innerHTML="ko để trống";
 return false;
    }
     else {
         document.getElementById('smk').innerHTML="";
        
     }
     if( matkhau == laimatkhau){
        document.getElementById('slmk').innerHTML="";
        return false;
     }
     else{
        document.getElementById('slmk').innerHTML="saimk";
    }
    if(isNaN('sdt')){
        document.getElementById('ssdt').innerHTML="chỉ nhập số";
        return false;
    }
    else{
        document.getElementById('ssdt').innerHTML="";
        return true;
    }
   

}