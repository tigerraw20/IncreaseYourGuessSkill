var n=1;
var val=1;
document.getElementById("level").innerHTML="LEVEL : "+n;
// document.getElementById("score").innerHTML="SCORE : "+(n-1);
// var k=1;
var p = Math.floor(Math.random()*(val*10));
document.getElementById("text").innerHTML="Guess a number from 0 to "+(val*10);
            // acom=document.getElementById("1").innerHTML;
var i=3;
document.getElementById("life").innerHTML="LIFE : ❤️ ❤️ ❤️";
function main()
{
         if(i<4)
         {
             if(i==2)
             {
                document.getElementById("life").innerHTML="LIFE : ❤️ ❤️";

             }
             if(i==1)
             {
                document.getElementById("life").innerHTML="LIFE : ❤️";

             }
             if(i==0)
             {
                document.getElementById("life").innerHTML="LIFE : ";

             }
             i--;
             console.log(i);
            console.log(p);
            var guessNo=document.getElementById("no").value;
            if(guessNo<p)
            {
               //  document.textContent.fontcolor.text="pink"
                document.getElementById("text").innerHTML=" This number is smaller ";
                document.getElementById("text").style.color = "red";
                // document.getElementById("life").innerHTML="LIFE : "+i;

            }
            else if(guessNo>p)
            {
               // document.getElementById("text").innerHTML=null;
                // document.getElementById("life").innerHTML="LIFE : "+i;
                document.getElementById("text").innerHTML=" This number is larger  ";
                document.getElementById("text").style.color = " rgb(136, 255, 0)";
            }
            else if(guessNo==p)
            {
                alert('You won the '+ 'level '+n + " 👌");
                n=n+1;
                val=val+1;
                document.getElementById("text").innerHTML="Guess a number from 0 to "+(val*10)+" :";
                var k=val*10;
                p = Math.floor(Math.random()*k);
                document.getElementById("level").innerHTML="LEVEL : "+n;
                i=3;
                document.getElementById("life").innerHTML="LIFE : ❤️ ❤️ ❤️";
            }
   
         }
         if(i<0)
         {
             alert('👍 Your chances are over!!!');
             alert('You won the '+ 'level '+(n-1) + " 👌");
            location.reload()
         }
}
