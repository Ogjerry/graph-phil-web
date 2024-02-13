<<<<<<< HEAD
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
=======
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { ResearchModule } from './research/research.module';
import { FrontpageModule } from './frontpage/frontpage.module';
import { WikiModule } from './wiki/wiki.module';

const firebaseConfig = environment.firebaseConfig;


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ResearchModule,
    FrontpageModule,
    WikiModule,
    AngularFireModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'p-h';
}


export class AppModule { }
>>>>>>> 60264acbe29feb7a10cc3fc40437a451e448a6a6
