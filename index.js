var hours=0;
var minutes=0;
var seconds=0;
var point=0;

var watch=false;


function btn1(){

    watch=true;
    actual();

}

function btn2(){

    watch=false;

}

function btn3()
{
     watch=false;

     hours=0;
     minutes=0;
     seconds=0;
     point=0;

     document.getElementById("hour").innerHTML="00";
     document.getElementById("minute").innerHTML="00";
     document.getElementById("SECOND").innerHTML="00";

     document.getElementById("COUNT").innerHTML="00";

}

function actual()
{
    //checking for time is running or not
    if(watch==true)
    {
        point++; 
        if(point==100)
        {
            seconds++;
            point=0;
        }
        if(seconds==60)
        {
            minutes++;
            seconds=0;

        }
        if(minutes==60)
        {
            hours++;
            minutes=0;
            seconds=0;
        }
        document.getElementById("hour").innerHTML=hours;
        document.getElementById("minute").innerHTML=minutes;
        document.getElementById("SECOND").innerHTML=seconds;

        document.getElementById("COUNT").innerHTML=point;
           
        setTimeout("actual()",10); 
    }
}