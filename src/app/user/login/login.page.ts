import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private route: Router , private api: UsersService) { }

  ngOnInit() {
  }

  login(form){
    this.api.login(form.value).subscribe(res =>{
      console.log(res)
    })
  }
}
