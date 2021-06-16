const calculator = () =>
 {
    var per; 
    var cgpa=document.getElementById('cgpa').value;
    if(cgpa<0 || cgpa>10)
    {
      alert("Please enter values between 0 to 10");
    }
    else{
    per=((cgpa*10)-7.5);
    document.getElementById('result').innerHTML=parseFloat(`${cgpa}`).toFixed(2);
    document.getElementById('perce').innerHTML=parseFloat(`${per}`).toFixed(2)+"%";
    }
  }