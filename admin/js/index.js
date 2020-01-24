var LiveText1 = document.getElementById("LiveText1");
var LiveText2 = document.getElementById("LiveText2");
var LiveText3 = document.getElementById("LiveText3");
var LiveScore1 = document.getElementById("LiveScore1");
var LiveScore2 = document.getElementById("LiveScore2");
var LiveScore3 = document.getElementById("LiveScore3");
var firebaseRef = firebase.database().ref().child("LivScores");

firebaseRef.on('value' , function(datasnapshot){
  LiveText1.innerText = datasnapshot.child("Match1/Text").val();
  LiveText2.innerText = datasnapshot.child("Match 2/Text").val();
  LiveText3.innerText = datasnapshot.child("Match3/Text").val();
  LiveScore1.innerText = datasnapshot.child("Match1/Score").val();
  LiveScore2.innerText = datasnapshot.child("Match 2/Score").val();
  LiveScore3.innerText = datasnapshot.child("Match3/Score").val();
});

var newsRef = firebase.database().ref().child("News");
var news = document.getElementById("news");
news.innerHTML = '<h3>Latest Newss</h3>';
  newsRef.on("child_added", snap => {
  var newsTitle = snap.child("Title").val();
  var newsBody = snap.child("Body").val();
  var newsAuthor = snap.child("Author").val();
   news.innerHTML +=  '<div class="rca-post">'+
                     '<h4>'+
                    '<a href="news.html">' + newsTitle +
                    '</a>' +
                    '</h4>' +
                    '<p>' + newsBody + '</p>' +
                    '<p class="rca-post-info">by ' + newsAuthor +'</p>' +
                    '</div>';
});

var mNewsPhoto = document.getElementById("mNewsPhoto");
var mNewsTitlle = document.getElementById("mNewsTitlle");
var mNewsBody = document.getElementById("mNewsBody");
var storageRef = firebase.storage().ref().child("images");
var mNewsRef = firebase.database().ref().child("mNews");
mNewsPhotoRef = storageRef.child("Mahendra_Singh_Dhoni_batting.jpg");

mNewsRef.on('value' , function(datasnapshot) {
  mNewsTitlle.innerText  = datasnapshot.child("Title").val();
    mNewsBody.innerText  = datasnapshot.child("Body").val();
});

//var LiveTeams = document.getElementById("LiveTeams");
var LiveScoresRef = firebase.database().ref().child("LiveScores");
    var ltab = document.getElementById("iltab-1");
    var actiavtion = "";
    LiveScoresRef.on("child_added", snap => {
      var Teams = snap.child("Teams").val();
    //  LiveTeams.innerHTML += '<li class="rca-tab-link" data-tab="iltab-3" onclick="showTab(this);">' +
      //                       '<span class="rca-live-label">' + Teams + '</span> </li>';

      var score = snap.child("Scores").val();
      var overs = snap.child("Overs").val();
      var opponent = snap.child("OpponentScore").val();
      var crr = snap.child("CR").val();
      var rr = snap.child("RR").val();
      var name1 = snap.child("Batsmen1/Name").val();
      var name2 = snap.child("Batsmen2/Name").val();
      var run1 = snap.child("Batsmen1/Runs").val();
      var run2 = snap.child("Batsmen2/Runs").val();
      var comments = snap.child("Comments").val();
      ltab.innerHTML +=  '<div class="rca-tab-content active">' +
           '<div class="rca-padding">' +
             '<h3 class="rca-match-title">' +
             '<a href="Scores.html">'+
               Teams + ':  ' +
             '</a>' +
               '<a href="/widgets.html">'+
                 score + ' in ' + overs +
               '</a>' +
             '</h3>' +
             '<p class="rca-match-info">' +
               '<span>' + opponent +'</span>' +
               '<span> CRR: ' + crr +'</span>' +
               '<span> RR: ' + rr +'</span>' +
             '</p>';
    /*  ltab.innerHTML +=  '<div id="iltab-3" class="rca-tab-content">' +
         '<div class="rca-padding">' +
           '<h3 class="rca-match-title">' +
             '<a href="/widgets.html">'+
               score + ' in ' + overs +
             '</a>' +
           '</h3>' +
           '<p class="rca-match-info">' +
             '<span>' + opponent +'</span>' +
             '<span> CRR: ' + crr +'</span>' +
             '<span> RR: ' + rr +'</span>' +
           '</p>' +
           '<div class="rca-top-padding">' +
             '<div class="rca-batsman striker">' +
               '<span class="player">' + name1 + '</span>' +
               '<span>' + run1 + '</span>' +
             '</div>' +
             '<div class="rca-batsman">' +
             '<span class="player">' + name2 + '</span>' +
             '<span>' + run2 +'</span>' +
           '</div>' +
          '</div>' +
         '</div>' +
         '<div class="rca-top-padding rca-score-status">' +
           '<div class="rca-status-scroll">' +
             comments +
           '</div>' +
           '<ul class="rca-bullet-list">' +
             '<li class="active" data-tab="#status1"></li>' +
             '<li data-tab="#status2"></li>' +
             '<li data-tab="#status3"></li>' +
           '</ul>' +
         '</div>' +
       '</div>'; */
});

var results = document.getElementById("ltab-2");
var ResultsRef = firebase.database().ref().child("Results");

ResultsRef.on("child_added", snap => {
  var Teams = snap.child("Teams").val();
  var Number = snap.child("Number").val();
  var Result = snap.child("Result").val();
  var Time = snap.child("Time").val();
  /*results.innerHTML +=  '<div class="rca-match-detail rca-padding">
    <h3 class="rca-match-title">
      <a href="/widgets.html">BAN vs ZIM</a>
      <span class="rca-match-info rca-right">
        2nd T20 Match
      </span>
    </h3>
    <p class="rca-duration">Bangaladesh Won by 20 runs</p>
    <p class="rca-match-schedule">Sun, 31 Jan 2:10 pm IST</p>
  </div>*/
});
