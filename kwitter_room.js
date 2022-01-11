//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBhMX-GkC083F2wEyeWLZdVaxBPULbXmFc",
      authDomain: "kwitter-4b7ca.firebaseapp.com",
      databaseURL: "https://kwitter-4b7ca-default-rtdb.firebaseio.com",
      projectId: "kwitter-4b7ca",
      storageBucket: "kwitter-4b7ca.appspot.com",
      messagingSenderId: "166781515004",
      appId: "1:166781515004:web:dc9ea1918581d0153e9379",
      measurementId: "G-MEYVSSKKBH"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    //var analytics = getAnalytics(app);

    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - "+ Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name)
      localStorage.setItem("room_name", name);
      window.location = "kwitter_room.html";
}

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({ 
          purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
