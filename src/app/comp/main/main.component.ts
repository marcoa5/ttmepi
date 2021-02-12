import { Component, OnInit, Input } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth'
import { MatDialog } from '@angular/material/dialog'
import { DialogLogoutComponent } from '../dialog-logout/dialog-logout.component';

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
Actions:any[]=[];
userName: any;
openMenu=false;
icon=false;
disButton=false;
  constructor(public dialog: MatDialog) { 
    firebase.initializeApp(firebaseConfig) 
    for(var i = 1;i<101;i++){
      this.Actions.push(i)
    }
  }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged(user=>{
      if(user){
        this.userName = user?.displayName
      } else {
        this.userName="na"
        this.login()
      }
    })
    this.icon= true
    if(window.innerWidth>=600){
      this.openMenu = true
      this.disButton = true
    } else {
      this.openMenu = false
      this.disButton=false
    }
  }

  login(){
    let provider = new firebase.auth.OAuthProvider('microsoft.com');
    provider.setCustomParameters({
      prompt: 'consent',
      tenant: '896ecbea-bd27-4a3c-a131-34aa0b46a086'
    });
    firebase.auth().signInWithRedirect(provider)
  }

  logout(): void{
    var dialogRef = this.dialog.open(DialogLogoutComponent)
    dialogRef.afterClosed().subscribe(res=>{
      if(res)   firebase.auth().signOut()
    })

  }

  onResize(e:any){
    if(e.target.innerWidth<600){
      this.openMenu = false
      this.disButton=false
      this.icon=true
    } else {
      this.openMenu = true
      this.disButton=true
      this.icon=false
    }
  }

  menu(){
    if(window.innerWidth < 600) {
      this.openMenu = !this.openMenu
      this.icon = !this.icon
    }
    if(window.innerWidth >= 600) this.openMenu = true
  } 
}