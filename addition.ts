import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  public sum: number ;
  Add(a,b)
  {
    var aa=+a;
    var bb=+b;
    alert(this.sum= aa+bb); 
    //{{this.sum= aa+bb}};
    
  }
}
