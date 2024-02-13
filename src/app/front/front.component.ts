import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Front } from './front';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent {
  @Input() front: Front | null = null;
  @Output() edit = new EventEmitter<Front>();
}
