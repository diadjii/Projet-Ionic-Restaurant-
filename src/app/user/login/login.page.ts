import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import {Router} from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private route: Router , private api: UsersService, private storage: Storage) { }

  ngOnInit() {

  }

  login(form){
    this.api.login(form.value.email).subscribe(res =>{
      console.log(res)
      this.storage.set('token',res[0].email);
      this.storage.set('type',res[0].role);
      this.storage.set('user', res[0]);
      if(res[0].role == 1){
        this.route.navigate(['tabs/plat/menu'])
      }else{
        this.route.navigate(['tabs/plat'])
      }
    },error => {
      console.log(error)
    })
  }
}
