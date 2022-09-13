import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecycleBinPage } from './recycle-bin.page';

describe('RecycleBinPage', () => {
  let component: RecycleBinPage;
  let fixture: ComponentFixture<RecycleBinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecycleBinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecycleBinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
