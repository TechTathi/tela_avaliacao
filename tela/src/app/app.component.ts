import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
  stars = [1,2,3,4,5];
  rating = 1;
  hoverState = 0;

  onStarEnter(starId: number) {
    this.hoverState = starId;
  }
  
}
