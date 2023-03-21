import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-create-dashboard',
  templateUrl: './user-create-dashboard.component.html',
  styleUrls: ['./user-create-dashboard.component.scss'],
})
export class UserCreateDashboardComponent implements OnInit {

  formCreateUser = new FormGroup({
    name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private userService:UserService,
    private route:Router
  ) { }

  ngOnInit() {}

  saveUser(){
    this.userService.saveUser(this.formCreateUser.value).subscribe(
      (resp) => {
        this.route.navigateByUrl("/dashboard/users")
      },
      (err) => {console.log(err)}
    )
  }

}
