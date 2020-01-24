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
    var B_name = document.getElementById('B_name').value;
    var score = document.getElementById('score').value;
    var cmnts = document.getElementById('cmnts').value;
    var Bowl_name = document.getElementById('Bow').value;
    var type = document.getElementById('type').value;

     saveMsg(name1,runs1,name2,runs2,cr,Opponent,over,B_name,score,cmnts,Bowl_name,Bat_name,type);
}


function saveMsg(name1,runs1,name2,runs2,cr,Opponent,over,B_name,score,cmnts,Bowl_name,Bat_name,type){
    var newMessageRef  = messageRef.push();
    newMessageRef.set({
    name1: name1,
    name2: name2,
    runs1: runs1,
    runs2: runs2,
    CR: cr,
    OpponentScore: Opponent,
    Overs: over,
    B_name: B_name,
    Score: score,
    cmnts: cmnts,
    Bowl_name: Bowl_name,

    });
}