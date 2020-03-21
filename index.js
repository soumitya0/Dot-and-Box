//player-1
//player -2
//start with player 1
//if box is completed then next move will that how has completed the box 
//score 



var arr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var player = 0;
var score = [0,0];
var color = ["#d64161", "#6b5b95"];


function myFunction(event)
{
    console.log("it working ");

    var x=event.target;  
    console.log(x);

    console.log(x.id);

    var gr = x.id.slice(0,5);// here we are slice the id and get only block
    console.log("gr: "+gr); 


    var num = x.id.slice(5,7);
    console.log("NUM: "+num); //getting the block id by h1 or v1

    var b1 = x.id.slice(7,9);  //getting the box number 
    b1 = Number(b1);
    console.log("b1 "+b1);


   var b2 = x.id.slice(9,11); //this is use to get the dots 
   b2 = Number(b2); 
   console.log("b2 "+b2);
     
    if(gr == "block")
    {
        console.log("yes");
        console.log("arr[b1]"+arr[b1]);
        arr[b1]++;  // this is for box 4 edges if b1== 4 then this means that it's edge is completed
                    // here we have done that assume that b1=1 arr[b1] i.e arr[1]=0 
       
        arr[b2]++;  
        console.log("arr");
        
        console.log(arr[b1]);  
        console.log(arr[b2]);

        place(); 
        player = Math.abs(player-1);
        x.style.backgroundColor = color[player];
      

    }



}

function place(){
    for(let i=0; i<17; i++)
    {
        console.log(arr[i]);
        if(arr[i]==4)
        {
            console.log("we got it 4 box");
            
            if(player === 1)
            {
                document.getElementsByClassName('box')[i-1].style.backgroundColor="#d64161";
                score[1]++;
            }else{
                document.getElementsByClassName('box')[i-1].style.backgroundColor="#6b5b95";
                score[0]++;

            }
            arr[i] = 0;
            placeScore();

        }
    }
    placeScore();

} 
function placeScore()
      {
        var card = document.getElementsByClassName(' heading');
        card[0].innerHTML =  "Player 1: "+score[0];
        card[1].innerHTML =  "Player 2: "+score[1];
        console.log(card);
	  }
	  