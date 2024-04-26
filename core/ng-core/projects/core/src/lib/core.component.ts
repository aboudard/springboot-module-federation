import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'lib-core',
    template: `
    <p>
      core works!
    </p>
  `,
    styles: [],
    standalone: true
})
export class CoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
