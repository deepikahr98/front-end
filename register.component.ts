import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RegisterService} from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService:RegisterService,private router:Router) { }

  ngOnInit(): void {
  }
onSubmit(){
	
}
}
