//init()
var total;
var sgpa;
var perc;
const credit1=1;
const credit2=2;
const credit3=3;
const credit4=4;
const calculator =() =>
{
  var mark1=document.getElementById('mark1').value;
  var mark2=document.getElementById('mark2').value;
  var mark3=document.getElementById('mark3').value;
  var mark4=document.getElementById('mark4').value;
  var mark5=document.getElementById('mark5').value;
  var mark6=document.getElementById('mark6').value;
  var mark7=document.getElementById('mark7').value;
  var mark8=document.getElementById('mark8').value;

  function getgrade(item)
  {
   if(item<40 && item>=0)
        return 0;
    else if(item<45 && item>=40)
        return 4;
    else if(item<50 && item>=45)
        return 5;
    else if (item<60 && item>=50)
        return 6;
    else if(item<70 && item>=60)
        return 7;
    else if(item<80 && item>=70)
        return 8;
    else if(item<90 && item>=80)
        return 9;
    else if(item<=100 && item>=90)
        return 10;

    }
    if((mark1=="")||(mark2=="")||(mark3=="")||(mark4=="")||(mark5=="")||(mark6=="")||(mark7=="")||(mark8==""))
    {
        alert("Please fill out all fields");
    }
    else if((mark1>100||mark1<0)||(mark2>100||mark2<0)||(mark3>100||mark3<0)||(mark4>100||mark4<0)||(mark5>100||mark5<0)||(mark6>100||mark6<0)||(mark7>100||mark7<0)||(mark8>100||mark8<0))
    {
         alert("Please enter values between 0 to 100");
    }
    else
    {
    mark1=credit3*getgrade(mark1);
    console.log(mark1);
    mark2=credit3*getgrade(mark2);
    mark3=credit3*getgrade(mark3);
    mark4=credit3*getgrade(mark4);
    mark5=credit3*getgrade(mark5);
    mark6=credit2*getgrade(mark6);
    mark7=credit2*getgrade(mark7);
    mark8=credit1*getgrade(mark8);

    total=parseFloat(mark1)+parseFloat(mark2)+parseFloat(mark3)+parseFloat(mark4)+parseFloat(mark5)+parseFloat(mark6)+parseFloat(mark7)+parseFloat(mark8);
    sgpa=total/20;
    document.getElementById('sgp').innerHTML=parseFloat(`${sgpa}`).toFixed(2);
    perc=((sgpa*10)-7.5);
    document.getElementById('per').innerHTML=parseFloat(`${perc}`).toFixed(2)+"%";
  }
}
