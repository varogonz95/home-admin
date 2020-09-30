import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeExpensesPage } from './home-expenses.page';

describe('HomeExpensesPage', () => {
  let component: HomeExpensesPage;
  let fixture: ComponentFixture<HomeExpensesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeExpensesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeExpensesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
