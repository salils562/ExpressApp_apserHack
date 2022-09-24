
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyChUbx8crfPVAkGQJwkwx7lt9xwPaNS1nI",
    authDomain: "likhbee.firebaseapp.com",
    databaseURL: "https://likhbee-default-rtdb.firebaseio.com",
    projectId: "likhbee",
    storageBucket: "likhbee.appspot.com",
    messagingSenderId: "938735929616",
    appId: "1:938735929616:web:4cb2d1b54f927567623d95",
    measurementId: "G-XQ47XZY070"
};
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();

function FetchAllData() {
    db.collection('user').get().then((Query) => {
        let clientData = []
        Query.forEach((element) => {
            clientData.push(element.data());
        });
        let clients=document.getElementById('clients');
        console.log(clientData)
        let html="";
        clientData.forEach((element,index)=>{
          html+=`<div class="items">
          <div class="card" style="width: 18rem;">
              <img src="images/clients/boyAva.png" class="card-img-top" alt="maleAvatar">
              <div class="card-body">
                <h5 class="card-title">${clientData[index].name}</h5>
                <p class="card-text">
                <span>The client is available to work.</span>
                <span>Hire him on our app.</span>
                </p>
                <p class="phone-text">
                <span class="details-child">City: ${clientData[index].city}</span>
                <span class="details-child">College: ${clientData[index].college}</span>
                </p>
                <a href="https://play.google.com/store/apps/details?id=com.inertia.likh_bee" class="btn btn-primary">Hire ${clientData[index].name}</a>
              </div>
            </div>
      </div>`;
        });
        clients.innerHTML=html;
    });
}
FetchAllData();
