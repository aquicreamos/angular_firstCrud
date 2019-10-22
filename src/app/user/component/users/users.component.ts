import { Component, OnInit } from '@angular/core';

import { User } from '../../../core/models/user.model';
import { UserService } from '../../../core/services/user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  addUser() {
    console.log(1);
  }

}




