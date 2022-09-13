import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignupformPage } from './signupform.page';

describe('SignupformPage', () => {
  let component: SignupformPage;
  let fixture: ComponentFixture<SignupformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupformPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
