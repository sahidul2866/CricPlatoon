var messageRef = firebase.database().ref().child("LiveScores");


document.getElementById('myform').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();
    var name1 = document.getElementById('name').value;
    var runs1 = document.getElementById('runs').value;
    var name2 = document.getElementById('name1').value;
    var runs2 = document.getElementById('runs1').value;
    var cr = document.getElementById('cr').value;
    var over = document.getElementById('over').value;
    var Opponent = document.getElementById('Opponent').value;
    var RR = document.getElementById('RR').value;
    var score = document.getElementById('score').value;
    var cmnts = document.getElementById('cmnts').value;
    var Teams = document.getElementById('Teams').value;

     saveMsg(name1,runs1,name2,runs2,cr,Opponent,over,RR,score,Teams,cmnts);
}


function saveMsg(name1,runs1,name2,runs2,cr,Opponent,over,RR,score,Teams,cmnts){
    var newMessageRef  = messageRef.push();
    newMessageRef.set({
    name1: name1,
    name2: name2,
    runs1: runs1,
    runs2: runs2,
    CR: cr,
    OpponentScore: Opponent,
    Overs: over,
    RR: RR,
    Scores: score,
    cmnts: cmnts,
    Teams: Teams
    });
}
