
$(document).ready(function(){

  // Magic 8 Ball object with list of answers array property //
  var magic8Ball = {};
  magic8Ball.listOfAnswers = ["Signs point to yes", "Yes", "Reply hazy, try again", "Without a doubt", "My sources say no", "As I see it, yes", "You may rely on it", "Concentrate and ask again", "Outlook not so good", "It is decidedly so", "Better not tell you now", "Very doubtful", "Yes - definitely", "It is certain", "Cannot predict now", "Most likely", "Ask again later", "My reply is no", "Outlook good", "Don't count on it"];
    
  $("#answer").hide();
  
  // define Magic 8 Ball object method  //
  
  magic8Ball.answerQuestion = function(question){
    
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
    $("#8ball").effect("shake");
    $("#answer").fadeIn(4000);
    var randomNumber = Math.random();
    var randomNumberArray = randomNumber * this.listOfAnswers.length;
    var randomIndex = Math.floor(randomNumberArray);
    var randomAnswer = 								this.listOfAnswers[randomIndex];
    
    $("#answer").text( randomAnswer );
    console.log("My question: " + question);
    console.log("The Magic 8 Ball says: " + randomAnswer);
  };
    
    var askQuestion = function() { 
	    $("#answer").hide();
		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png"); 
		setTimeout(
			function() {
				
     			var question = prompt("ASK A YES/NO QUESTION");
      			magic8Ball.answerQuestion(question)
			}, 500);			
    };
    
    $("#questionButton").click(askQuestion);
	
  });