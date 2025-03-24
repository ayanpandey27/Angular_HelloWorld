import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello World';
  imgUrl="../assets/BL_logo_square_jpg.jpg";
  url="https://bridgelabz.com";
  username: string = "";

  ngOnInit(): void {
    this.title = "Hello from BridgeLabz";
  }

  onClick(event: MouseEvent) {
    console.log("Save button has been clicked!");
    window.open(this.url, "_blank");
  }
}
