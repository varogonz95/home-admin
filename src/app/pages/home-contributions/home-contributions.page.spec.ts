import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeContributionsPage } from './home-contributions.page';

describe('HomeContributionsPage', () => {
  let component: HomeContributionsPage;
  let fixture: ComponentFixture<HomeContributionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeContributionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeContributionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
