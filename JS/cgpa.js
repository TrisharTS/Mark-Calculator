const calculator = () =>
 {
    var total,final,no=8,tc=177;
   var mark1=document.getElementById('m1').value;
   var mark2=document.getElementById('m2').value;
   var mark3=document.getElementById('m3').value;
   var mark4=document.getElementById('m4').value;
   var mark5=document.getElementById('m5').value;
   var mark6=document.getElementById('m6').value;
   var mark7=document.getElementById('m7').value;
   var mark8=document.getElementById('m8').value;
   function aler() {
    alert("Please enter values between 0 to 10");
  }
  if(mark1 == "")
  {
    mark2=0;
    no--;
    tc=tc-20;
  }
   if(mark2 == "")
   {
     mark1=0;
     no--;
     tc=tc-20;
   }
   if(mark3 == "")
   {
     mark3=0;
     no--;
     tc=tc-24;
   }
   if(mark4 == "")
   {
     mark4=0;
     no--;
     tc=tc-24;
   }
   if(mark5 == "")
   {
     mark5=0;
     no--;
     tc=tc-25;
   }
   if(mark6 == "")
   {
     mark6=0;
     no--;
     tc=tc-26;
   }
   if(mark7 == "")
   {
     mark7=0;
     no--;
     tc=tc-20;
   }
   if(mark8 == "")
   {
     mark8=0;
     no--;
     tc=tc-18;
   }

   if ((mark1>10||mark1<0)||(mark2>10||mark2<0)||(mark3>10||mark3<0)||(mark4>10||mark4<0)||(mark5>10||mark5<0)||(mark6>10||mark6<0)||(mark7>10||mark7<0)||(mark8>10||mark8<0))
   {
     aler();
   }
   else{
    total=parseFloat(mark1*20)+parseFloat(mark2*20)+parseFloat(mark3*24)+parseFloat(mark4*24)+parseFloat(mark5*25)+parseFloat(mark6*26)+parseFloat(mark7*20)+parseFloat(mark8*18);
    final=total/tc;
    if(isNaN(final))
    {
      alert("Please fill out previous fields");
    }
    document.getElementById('result').innerHTML=parseFloat(`${final}`).toFixed(2);
   }
  }
