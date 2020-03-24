import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CamaraCarretePage } from './camara-carrete.page';

describe('CamaraCarretePage', () => {
  let component: CamaraCarretePage;
  let fixture: ComponentFixture<CamaraCarretePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamaraCarretePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CamaraCarretePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
