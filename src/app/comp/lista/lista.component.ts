import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs'
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth'

export interface Lista{
  c1: string,
  c2: string,
  c3:string
}

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  displayedColumns=['c1','c2','c3']
  dataSource: Observable<Lista>[]=[];
  constructor() { }

  ngOnInit(): void {
    var t = firebase.database().ref('customers').once('value')
    .then(a=>{
      this.dataSource = Object.values(a.val())
    })


    console.log(this.dataSource)
  }

}
