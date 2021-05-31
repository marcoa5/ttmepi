import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  actions:any[]=[]
  testo:string|undefined
  form:any
  constructor(fb: FormBuilder) { 
    this.form = fb.group(
      {cerca: ['']}
    )
  }

  ngOnInit(): void {
    
  }

  cer(e:any, a:FormGroup){
    e.preventDefault()
    let r = a.get('cerca')?.value
    this.testo=r
  }
}
