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
  dataSource: any[]=[];
  constructor() { }

  ngOnInit(): void {
    from(firebase.database().ref('customers').once('value')).subscribe(g=>{this.dataSource = Object.values(g.val())})
  }


}
