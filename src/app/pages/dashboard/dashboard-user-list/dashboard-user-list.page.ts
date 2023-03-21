import {IUser} from './../../../interfaces/IUser';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard-user-list',
  templateUrl: './dashboard-user-list.page.html',
  styleUrls: ['./dashboard-user-list.page.scss'],
})
export class DashboardUserListPage implements OnInit {

  users: IUser[] = [];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getAll()
    .subscribe(
      (res) => {
        this.users = res;
        console.log(res)
      },
      (err) => {console.log(err)}
    )
  }


}
