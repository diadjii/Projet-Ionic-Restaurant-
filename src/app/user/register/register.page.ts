import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UsersService } from 'src/app/services/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user:User;
  constructor(private service:UsersService,private route: Router) {
    this.user = new User();
  }

  ngOnInit() {
  }

  register(){
    this.service.register(this.user).subscribe(user => {
      console.log(user);
      this.route.navigate(['login'])
    }, error => {
      console.log(error)
    })
  }
}
