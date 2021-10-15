import { AfterViewInit, Component } from '@angular/core';

//pwa
import { UpdateService } from './services/update.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UpdateService]

})
export class AppComponent  {
  title = 'AgilSystem';
  constructor(private update: UpdateService) { }
  
}