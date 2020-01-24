var messageRef = firebase.databas().ref('palyer_information');



document.getElementById('myform').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();
    var name = document.getElementById('name').value;
    var birth_date = document.getElementById('birth_date').value;
    var birth_place = document.getElementById('birth_place').value;
    var country = document.getElementById('country').value;
    var team = document.getElementById('team').value;
    var age = document.getElementById('age').value;
    var r_odi = document.getElementById('r_odi').value;
    var r_test = document.getElementById('r_test').value;
    var r_twen = document.getElementById('r_twen').value;
    var w_odi = document.getElementById('w_odi').value;
    var w_test = document.getElementById('w_test').value;
    var w_twen = document.getElementById('w_twen').value;
    var b_style = document.getElementById('b_style').value;
    var bowl_style = document.getElementById('bowl_style').value;
    var b_style = document.getElementById('b_rank').value;
    var bowl_style = document.getElementById('bowl_rank').value;
    var crer = document.getElementById('crer').value;

    saveMsg(name,birth_date,birth_place,country,team,age,r_odi,r_test,r_twen,w_odi,w_test,w_twen,b_style,bowl_style,b_rank,bowl_rank,crer);
}

function saveMsg(name,birth_date,birth_place,country,team,age,r_odi,r_test,r_twen,w_odi,w_test,w_twen,b_style,bowl_style,b_rank,bowl_rank,crer){
    var newMessageRef  = messageRef.push();
    newMessageRef.set({
    Name: name,
    Birth_date: birth_date,
    Birth_place: birth_place,
    Country: country,
    Team: team,
    Age: age,
    Run_odi: r_odi,
    Run_test: r_test,
    Run_twen: r_twen,
    Wicket_odi: w_odi,
    Wicket_test: w_test,
    Wicket_twen: w_twen,
    Batting_style: b_style,
    Bowling_style: bowl_style,
    Batting_rank: b_rank,
    Bowling_rank: bowl_rank,
    Career: crer
    
    });
}