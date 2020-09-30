import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeMembersPage } from './home-members.page';

describe('HomeMembersPage', () => {
  let component: HomeMembersPage;
  let fixture: ComponentFixture<HomeMembersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMembersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeMembersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
