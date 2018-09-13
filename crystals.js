
var randomResult;
var lost = 0;
var win = 0;
var previous = 0;

//$(".crystal").attr("class", "red");


randomNumber = Math.floor(Math.random() *  69 ) + 30;


var startGame = function (){

	$(".crystals").empty();


var images = ['https://p.luckyretail.com/Uploadfile/20160530/002464/002464.jpg', "https://www.londonde.com/wp-content/uploads/163ct_3-416x351.jpg", "https://www.christies.com/media-library/images/features/articles/2015/09/29/diamonds/mainimage.jpg","http://www.infomala.com/en/wp-content/uploads/sites/2/2016/09/Diamond.jpg",];



  randomNumber = Math.floor(Math.random() * 69) + 30;


$("#result").html("Random Result:  " + randomNumber);

for(var i = 0; i < 4; i++){

var random = Math.floor(Math.random()* 11) + 1;
//console.log(randomNumber);

var crystal = $("<div>");
crystal.attr({"class": "crystal",
             "data-random": random
});

crystal.css({

"background-image":"url('" + (images[i]) + "')",
"background-size":"cover"
});


crystal.html(random);

$(".crystals").append(crystal);


}
 $("#previous").html("Total Score: " + previous);

}


 


startGame();


// var reset = function () {


// }







$(document).on("click", ".crystal", function() {


	

	var num = parseInt($(this).attr("data-random"));

    //var result = num + 5;

    //console.log(result);

      previous += num;


   $("#previous").html("Total Score: " + previous);


      console.log(previous);

if(previous > randomNumber){
	 lost++;
	 $("#lost").html("Losses: " + lost);



     previous = 0;



     startGame();



}
else if(previous === randomNumber){
	win++;


   $("#win").html("Wins: " + win);

 // $("#previous").html(previous);


previous = 0;


   startGame();

}

      //console.log(previous);
});
// a game with 4 crystals and a random result
//Every crystal needs to have a random number between 1 - 12
//a new random number should be generated every time we win or lose
//to those 4 crystals
//when clicking any crystal, it should adding with the previous result
//until it equals the total score
//if it is not equal, then we start over
//if it is equal,then we increment a win counter












