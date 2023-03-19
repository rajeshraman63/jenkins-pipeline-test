import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'jenkins-pipeline-test';

  test() {
    console.log('wowofsdlj testing the format ');
  }
}
