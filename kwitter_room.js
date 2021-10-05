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
  document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";


  function addRoom(){
        room_name=document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
        purpose: "Adding Room Name"
        });
localStorage.setItem("room name",room_name);
window.location="kwitter_page.html";

  }



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        console.log("Room Name"+Room_names);
        row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML=row;
      });});}
getData();
function redirectToRoomName(name){
       console.log(name);
       localStorage.setItem("Room Name",name);
       window.location="kwitter_page.html";

}

function logout(){
  localStorage.removeItem("room name");
  localStorage.removeItem("user name");
  window.location("index.html");
}