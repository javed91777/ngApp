import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Application';
  userName='Javeed';

  color;
  imageUrl='./app/assets/images/welcome.jpg';
  message;

  changeColor(val){
    this.color = val.value || 'lightgrey';
    console.log(val);
  }

  displayMessage(){
    this.message = 'Welcome message';
  }

  // readMessageText(event: any){
  //   this.message = event.target.value;
  // }

  readMessageText(event: KeyboardEvent) { // with type info
    this.message = (<HTMLInputElement>event.target).value;
  }
}
