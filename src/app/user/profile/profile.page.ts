import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import {UsersService} from '../../services/users.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

   user = {};

  constructor(private storage: Storage,private api: UsersService) { }

  ngOnInit() {
      this.storage.get('user').then(val => {
          this.user = val;
      })
  }

  edit():void{
      this.api.edit(this.user).subscribe(response => {
          console.log(response)
      })
  }
}
