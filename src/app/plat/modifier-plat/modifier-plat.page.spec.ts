import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModifierPlatPage } from './modifier-plat.page';

describe('ModifierPlatPage', () => {
  let component: ModifierPlatPage;
  let fixture: ComponentFixture<ModifierPlatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierPlatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModifierPlatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
