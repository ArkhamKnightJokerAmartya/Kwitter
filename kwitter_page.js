var firebaseConfig = {
      apiKey: "AIzaSyDOQuwirJbOkQoqSUqH5d8eI0J--10H6Oc",
      authDomain: "kwitter-27752.firebaseapp.com",
      databaseURL: "https://kwitter-27752-default-rtdb.firebaseio.com",
      projectId: "kwitter-27752",
      storageBucket: "kwitter-27752.appspot.com",
      messagingSenderId: "665743570418",
      appId: "1:665743570418:web:b176ca30f2c7fe3f57676b"
    };
    
  firebase.initializeApp(firebaseConfig);
  
  user_name=localStorage.getItem("user name");
  room_name=localStorage.getItem("room name");
  function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
    });
    document.getElementById("msg").value="";

  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
        console.log(firebase_message_id);
        console.log(message_data);
        name=message_data['name'];
        message=message_data['message'];
        like=message_data['like'];
        name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'> </h4>"
        message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
        like_button="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='updateLike(this.id)'>";
        span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span> </button> <hr>";
        row=name_with_tag+message_with_tag+like_button+span_with_tag;
        document.getElementById("output").innerHTML=row;


      } });  }); }
getData();


function updateLike(message_id){
  console.log(message_id);
  button_id=message_id;
  likes=document.getElementById(button_id).value;
  updated_likes=Number(likes)+1;
  firebase.database().ref(room_name).child(message_id).update({
    like:updated_likes
  });
}

function logout(){
  localStorage.removeItem("room name");
  localStorage.removeItem("user name");
  window.location("kwitter.html");
}