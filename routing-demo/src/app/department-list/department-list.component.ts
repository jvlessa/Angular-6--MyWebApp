import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>Department List</h3>
    <ul class="items">
      <li (click)="onSelect(department)" *ngFor="let department of departments" class="route-btn">
        <span class="badge">{{department.id}}</span> {{department.name}}
      </li>
    </ul>
  `,
  styles: ['.route-btn { background-color: #ffd7d7; border-radius: 3px; width: 90px; margin: 10px; padding: 10px}', 
          '.route-btn:hover { cursor: pointer; background-color: red; color: white }']
})
export class DepartmentListComponent implements OnInit {

  departments = [
    {'id': 1, 'name': 'Angular'},
    {'id': 2, 'name': 'Node'},
    {'id': 3, 'name': 'MongoDB'},
    {'id': 4, 'name': 'Ruby'},
    {'id': 5, 'name': 'Bootstrap'}
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect(department) {
    this.router.navigate(['/departments', department.id]);
  }
}
