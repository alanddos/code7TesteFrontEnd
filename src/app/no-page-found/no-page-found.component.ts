import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-no-page-found',
  templateUrl: './no-page-found.component.html',
  styleUrls: ['./no-page-found.component.scss']
})
export class NoPageFoundComponent {
  /** Based on the screen size, switch from standard to one column per row */
  tiles = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [//celular
          { text: 'Oops', size: 1, cols: 2, rows: 1, color: 'lightblue' },
          { text: 'Two', size: 1, cols: 2, rows: 1, color: 'lightgreen' },
          { text: 'Three', size: 1, cols: 2, rows: 1, color: 'lightpink' },
          { text: 'Four', size: 1, cols: 2, rows: 1, color: '#DDBDF1' },
          
        ];
      }

      return [//web
        { text: 'Oops', size: 3, cols: 3, rows: 1, color: 'lightblue' },
        { text: 'Two', size: 2, cols: 1, rows: 2, color: 'lightgreen' },
        { text: 'Three', size: 2, cols: 1, rows: 1, color: 'lightpink' },
        { text: 'Four', size: 1, cols: 2, rows: 1, color: '#DDBDF1' },
      ];

      // if (matches) {
      //   return [
      // { text: 'Oops', size: 3, cols: 3, rows: 1, color: 'lightblue' },
      // { text: 'Two', size: 2, cols: 1, rows: 2, color: 'lightgreen' },
      // { text: 'Three', size: 2, cols: 1, rows: 1, color: 'lightpink' },
      // { text: 'Four', size: 1, cols: 2, rows: 1, color: '#DDBDF1' },
      //   ];
      // } else {
      //   return [
      //     { text: 'Oops', size: 3, cols: 3, rows: 1, color: 'lightblue' },
      //     { text: 'Two', size: 2, cols: 1, rows: 2, color: 'lightgreen' },
      //     { text: 'Three', size: 2, cols: 1, rows: 1, color: 'lightpink' },
      //     { text: 'Four', size: 1, cols: 2, rows: 1, color: '#DDBDF1' },
      //   ];
      // }
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) { }
}