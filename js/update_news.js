
var messageRef = firebase.databas().ref().child('News');


document.getElementById('myform').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();
    var author1 = document.getElementById('author').value;
    var title1 = document.getElementById('title').value;
    var news_body1 = document.getElementById('news_body').value;

    saveMsg(author1,title1,news_body1);
}


function saveMsg(author1,title1,news_body1){
	var newMessageRef  = messageRef.push();
	newMessageRef.set({
    author: author1,
    body: news_body1,
    title: title1
	});
}