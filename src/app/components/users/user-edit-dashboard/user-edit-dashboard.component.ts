import { IUser } from './../../../interfaces/IUser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-edit-dashboard',
  templateUrl: './user-edit-dashboard.component.html',
  styleUrls: ['./user-edit-dashboard.component.scss'],
})
export class UserEditDashboardComponent implements OnInit {

  id: any;

  formCreateUser = new FormGroup({
    name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) { 

    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    
    this.userService.getUser(this.id).subscribe(
      (res) => {
        this.formCreateUser.setValue({
          name: res.name,
          last_name: res.last_name,
          email: res.email,
          password: res.password,
        })
        
      },
      (err) => {console.log(err)}
    )
  }

  updateUser() {
    this.userService.updateUser(this.id, this.formCreateUser.value)
    .subscribe(resp => {
      this.router.navigateByUrl("/dashboard/users");
    })
  }

  deleteUser() {
    this.userService.deleteUser(this.id)
    .subscribe(resp => {
      this.router.navigateByUrl("/dashboard/users");

    },
    (err) => {console.log(err)})
  }
}
