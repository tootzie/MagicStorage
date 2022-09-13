import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditSubjectPage } from './edit-subject.page';

describe('EditSubjectPage', () => {
  let component: EditSubjectPage;
  let fixture: ComponentFixture<EditSubjectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSubjectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditSubjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
