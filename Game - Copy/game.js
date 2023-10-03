function main(){
    let confirm =  document.getElementById("mainresult").innerHTML;
    if(confirm == "You Lose. Try Again" ){
        alert("Game over. Please restart");
    }
    else{
    let x;
    do{
    x= Math.floor(Math.random()*100 / 7.6);
    } while(x == 0)

    let currentTT =parseInt( document.getElementById("result").innerHTML);
    let total = currentTT + x;
    document.getElementById("result").innerHTML=total;

    if(total < 21){
        document.getElementById("mainresult").innerHTML= " Genarate Another Card";
        
    } 
    else if(total == 21){
        document.getElementById("mainresult").innerHTML= "You've Won!!";
        alert(" You've Won!!");
        document.getElementById("btn-res").style.display="block";
        document.getElementById("btn").style.display="none";
    }
    else if(total > 21){
        document.getElementById("mainresult").innerHTML= "You Lose. Try Again";
        alert("You Lose. Try Again");
        document.getElementById("btn-res").style.display="block";
        document.getElementById("btn").style.display="none";
        document.getElementById("mainresult").style.color="red";
    }

    var img = document.createElement("img");
    img.src = "images/"+x+".png";
    img.height = 300;

    document.body.appendChild(img);
}

}

function restart(){
    location.reload();
}