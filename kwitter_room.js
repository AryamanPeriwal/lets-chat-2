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
//ADD YOUR FIREBASE LINKS HERE

user_name=localStorage.getItem("user_name")
document.getElementById("user_name"),innerHTML="welcome "+user_name+"!"
function addroom(){
      room_name=document.getElementById('room_name').value 
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name",room_name)
      window.location="kwitter_page.html"

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name"+Room_names)
row="<div class='room_name' id="+Room_names+"onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>"
      //End code
      });});}
getData();
function redirecttoroomname(name){
console.log(name)
localStorage.setItem("room_name",name)
window.location="kwitte_page.html"
}
function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="index.html"
}