import { IUser } from './../../../interfaces/IUser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.page.html',
  styleUrls: ['./dashboard-home.page.scss'],
})
export class DashboardHomePage implements OnInit {

  user: IUser = {
    name: "Joe Stwart",
    last_name: "valencia renteria",
    email: "stiwart@gmail.com",
    password: "",
    rol: 1
  } 
  constructor() { }

  ngOnInit() {
    console.log("User: ", this.user)
  }

}
