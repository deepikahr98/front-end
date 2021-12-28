import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../login.service';
//import {Login} from 'Login';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
	
	//login:any = new Login();
  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
  }
onSubmit(){
	
}

}
