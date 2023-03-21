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
      label: "Usuarios",
      to: "/dashboard/users",
      icon: "person-outline"
    },
    {
      label: "Empresas",
      to: "/dashboard-company-list",
      icon: "business-outline"
    },
    {
      label: "Clientes",
      to: "/dashboard-client-list",
      icon: "people-outline"
    },
  ];

  menuConfigItems: Array<any> = [
    {
      label: "Parametrización gral",
      to: "/dashboard-general-conf",
      icon: "cog-outline"
    },
    {
      label: "Cerrar sesión",
      to: "/dashbord",
      icon: "log-out-outline"
    },
  ];
  constructor() { }

  ngOnInit() {
    console.log(this.menuItems)
  }

}
