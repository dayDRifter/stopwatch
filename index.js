
//first comment
//creating four variables used in futhur programming

var hours=0;
var minutes=0;
var seconds=0;
var point=0;

//initialise it as false as it doesn't click on any button
var watch=false;

//making function of every button to perform specific task
function btn1(){
     
    //true because the btn1 or start button is clicked 
    watch=true;

    //calling the main function which perform specific task of stopwatch
    actual();

}

function btn2(){
         
    //false because stop button didn't trigger anything it only pause the function
    watch=false;

}

function btn3()
{
    //it is false because it align some value to the variables to 0.
     watch=false;

     hours=0;
     minutes=0;
     seconds=0;
     point=0;

     //here i linked it to the html where we have to change the things.
     document.getElementById("hour").innerHTML="00";
     document.getElementById("minute").innerHTML="00";
     document.getElementById("SECOND").innerHTML="00";

     document.getElementById("COUNT").innerHTML="00";

}


//it is the main function which start the stopeatch and perform all the operation
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
           
        //it is used to call the function after the certain period of time 
        setTimeout("actual()",10); 
    }
}