import { UserService } from 'src/app/services/user.service';
import { IUser } from './../../../interfaces/IUser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list-dashboard',
  templateUrl: './user-list-dashboard.component.html',
  styleUrls: ['./user-list-dashboard.component.scss'],
})
export class UserListDashboardComponent implements OnInit {

  users: IUser[] = [];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getAll()
    .subscribe(
      (res) => {
        this.users = res;
      },
      (err) => {console.log(err)}
    )
  }
}
