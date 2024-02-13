import { Component, OnInit } from '@angular/core';
import { CoreService } from 'core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {

  constructor(
    private coreService: CoreService
  ) { }

  ngOnInit(): void {
  }

  getCore(): void {
    alert(this.coreService.getCore());
  }

}
