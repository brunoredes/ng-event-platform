import { Component, Input } from '@angular/core';
import { GetLessonsQuery } from './../../../../helper/generated';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() public detail!: GetLessonsQuery['lessons'];;
  constructor() {}
}
