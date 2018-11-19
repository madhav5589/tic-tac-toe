import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BoardComponent
      ],
    }).compileComponents();
  }));

  it(`should have as title 'TicTacToe!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('TicTacToe');
  }));

});
