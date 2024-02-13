import { Component } from '@angular/core';
import { Front } from './front/front';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  todo: Front[] = [
    {
      title: 'p-h',
      description: 'got the object'
    },
    {
      title: 'second TITLE',
      description: 'second description'
    }
  ]
}