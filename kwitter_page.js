//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBjXOh8ukpd2KMdPoVBuNsj7SqZYlhb3pA",
      authDomain: "kwitter-23cc4.firebaseapp.com",
      databaseURL: "https://kwitter-23cc4-default-rtdb.firebaseio.com",
      projectId: "kwitter-23cc4",
      storageBucket: "kwitter-23cc4.appspot.com",
      messagingSenderId: "488211113865",
      appId: "1:488211113865:web:278a8762e7b94be376a358"
    };
    
    // Initialize Firebase
firebase. initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name")
room_name=localStorage.getItem("room_name")

function send(){
      msg=document.getElementById("msg").value 
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value=""

}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
