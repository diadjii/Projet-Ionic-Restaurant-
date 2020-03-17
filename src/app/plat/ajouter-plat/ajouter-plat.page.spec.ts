import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AjouterPlatPage } from './ajouter-plat.page';

describe('AjouterPlatPage', () => {
  let component: AjouterPlatPage;
  let fixture: ComponentFixture<AjouterPlatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterPlatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AjouterPlatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
