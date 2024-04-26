import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  text: string;

  constructor() {
    this.text = 'this is the core service';
  }

  public getCore(): string {
    return this.text;
  }

  public setCore(text: string): void {
    this.text = text;
  }

}
