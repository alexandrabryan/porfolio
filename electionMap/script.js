var newPolitician = function(name, partyColor) 
{
  var politician = {};
    politician.name = name;
    politician.electionResults = null;
    politician.totalVotes = 0;
    politician.partyColor = partyColor;
  
    politician.tallyVotes = function()
    {
      this.totalVotes = 0
      for (var i = 0; i < this.electionResults.length; i++)
        {
          this.totalVotes = this.totalVotes + this.electionResults[i];
        }
    };
  
  return politician;
};

var jane = newPolitician("Jane DoesItAll", [132, 17, 11]);
var flo = newPolitician("Flo Florrick", [245, 141, 136]);

jane.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

flo.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];


jane.electionResults[9] = 1;
flo.electionResults[9] = 28;

jane.electionResults[4] = 17;
flo.electionResults[4] = 38;

jane.electionResults[43] = 11;
flo.electionResults[43] = 27;


var setStateResults = function(state) {
  theStates[state].winner = null;
  
  if (jane.electionResults[state] > flo.electionResults[state]) {
     theStates[state].winner = jane;
   } else if (jane.electionResults[state] < flo.electionResults[state]) {
     theStates[state].winner = flo;
   }; 
  
  var stateWinner = theStates[state].winner;
  if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.partyColor;
  } else {
    theStates[state].rgbColor = [11, 32, 57];
  };
  
  var stateResultsTable = document.getElementById('stateResults');
  var header = stateResultsTable.children[0].children[0];
  var stateName = header.children[0];
  stateName.innerText = theStates[state].nameFull;
  var stateAbbreviation = header.children[1];
  stateAbbreviation.innerText = theStates[state].nameAbbrev; 
 
  var row1 = stateResultsTable.children[1].children[0];
  var candidate1 = row1.children[0]; 
  candidate1.innerText = jane.name;
  var stateResultsCandidate1 = row1.children[1];
  stateResultsCandidate1.innerText = jane.electionResults[state];

  var row2 = stateResultsTable.children[1].children[1];
  var candidate2 = row2.children[0];
  candidate2.innerText = flo.name;
  var stateResultsCandidate2 = row2.children[1]; 
  stateResultsCandidate2.innerText = flo.electionResults[state];
  
  var row3 = stateResultsTable.children[1].children[2];
  var stateWinner = row3.children[1];
  
  if (jane.electionResults[state] > flo.electionResults[state]) 
  {
    stateWinner.innerText = jane.name;
  } else if (jane.electionResults[state] < flo.electionResults[state]) 
  {
    stateWinner.innerText = flo.name;
  } else 
    {
    stateWinner.innerText = "TIE";
    };
};   

jane.tallyVotes(); 
flo.tallyVotes(); 

console.log(jane.name + "'s total votes are: " + jane.totalVotes);
console.log(flo.name + "'s total votes are: " + flo.totalVotes);
 

var winner = " ";

if (jane.totalVotes > flo.totalVotes) 
{
  winner = jane.name;

} else if (jane.totalVotes < flo.totalVotes) 
{
  winner = flo.name;

} else if (jane.totalVotes === flo.totalVotes) 
{
  winner = "IT IS A TIE!"
};
 
console.log("THE WINNER IS: " + winner);    




 

var countryResultsTable = document.getElementById('countryResults');
countryResultsTable.children[0].children[0].children[0].innerText = jane.name;
countryResultsTable.children[0].children[0].children[1].innerText = jane.totalVotes;
countryResultsTable.children[0].children[0].children[2].innerText = flo.name;
countryResultsTable.children[0].children[0].children[3].innerText = flo.totalVotes;  
countryResultsTable.children[0].children[0].children[5].innerText = winner;  







