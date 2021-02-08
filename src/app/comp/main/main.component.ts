import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth'
import { of } from 'rxjs';

const firebaseConfig = {
  apiKey: "AIzaSyCeBGl6Y21nRXiQNYpDsaLt1P5EtxkWoJQ",
  authDomain: "epirocttm.firebaseapp.com",
  projectId: "epirocttm",
  storageBucket: "epirocttm.appspot.com",
  messagingSenderId: "619644570924",
  appId: "1:619644570924:web:9e12534007aac2c98bb089"
};

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
userName: any;
  constructor() { 
    firebase.initializeApp(firebaseConfig) 
  }
  
  ngOnInit(): void {
    firebase.auth().onAuthStateChanged(user=>{
      if(user){
        this.userName = user?.displayName
      } else {
        this.userName="na"
      }
      
    })
  }

  login(){
    let provider = new firebase.auth.OAuthProvider('microsoft.com');
    provider.setCustomParameters({
      prompt: 'consent',
      tenant: '896ecbea-bd27-4a3c-a131-34aa0b46a086'
    });
    firebase.auth().signInWithRedirect(provider)

   
  }

}
