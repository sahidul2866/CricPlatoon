
var messageRef = firebase.database().ref('News');


document.getElementById('myform').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();
    var author = getInputVal('author');
    var title = getInputVal('title');
    var news_body = getInputVal('news_body');

    saveMsg(author,title,news_body);
}

function getInputVal(id){
    return document.getElementById(id).value;
}


function saveMsg(author,title,news_body){
	var newMessageRef  = messageRef.push();
	newMessageRef.set({
    Author: author,
    Title: title,
    Body: news_body
	});
}
