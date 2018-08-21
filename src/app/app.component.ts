import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-essentials';
  rootName = 'John';
  rootItems = ['Apple', 'Banana', 'Cherries'];

  onItemWasAdded(newItem) {
this.rootItems.push(newItem);
console.log(this.rootItems);
  }

  onNameChanged(newName) {
    this.rootName = newName;
  }
}
