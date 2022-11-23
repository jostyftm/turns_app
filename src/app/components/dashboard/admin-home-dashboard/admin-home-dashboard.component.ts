import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-home-dashboard',
  templateUrl: './admin-home-dashboard.component.html',
  styleUrls: ['./admin-home-dashboard.component.scss'],
})
export class AdminHomeDashboardComponent implements OnInit {

  menuItems: Array<any> = [
    {
      label: "Inicio",
      to: "/dashbord",
      icon: "home-outline"
    },
    {
      label: "Inicio",
      to: "/dashbord",
      icon: "business-outline"
    },
    {
      label: "Inicio",
      to: "/dashbord",
      icon: "lock-closed-outlin"
    },
  ]
  constructor() { }

  ngOnInit() {
    console.log(this.menuItems)
  }

}
