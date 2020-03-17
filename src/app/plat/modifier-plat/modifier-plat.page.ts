import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { PlatsService } from 'src/app/services/plats.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController,NavController } from '@ionic/angular';


@Component({
  selector: 'app-modifier-plat',
  templateUrl: './modifier-plat.page.html',
  styleUrls: ['./modifier-plat.page.scss'],
})

export class ModifierPlatPage implements OnInit {
  nomControl: FormControl;
  prixControl: FormControl;
  descriptionControl: FormControl;
  formGroup: FormGroup;
  platId: number;
  plat: Plat;

  constructor(private builder: FormBuilder,private route : ActivatedRoute, private service: PlatsService,public toastController: ToastController,private nav: NavController) {
    this.platId = Number(this.route.snapshot.paramMap.get('id'));

    this.service.getPlat(this.platId).subscribe(plat => {
      this.plat = plat;
      this.nomControl = new FormControl(this.plat.nom, [Validators.required, Validators.minLength(2)]);
      this.prixControl = new FormControl(this.plat.prix, Validators.required);
      this.descriptionControl = new FormControl(this.plat.description);
      this.formGroup = this.builder.group({
        nom: this.nomControl,
        prix: this.prixControl,
        description: this.descriptionControl
      })
    })
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
    message: message,
    duration: 2000,
    color: 'dark',
    position: 'top'
    });
    toast.present();
  }

  ngOnInit() {
  }

  modifier(): void {
    this.service.updatePlat(this.plat.id, this.formGroup.value).subscribe(plat=> {
      this.presentToast("Plat modifier avec succès.");
      this.nav.back();
    })
  }
}
