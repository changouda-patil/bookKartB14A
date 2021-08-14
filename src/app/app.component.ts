import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ClientApp';

  constructor(private authService: AuthenticationService) {
    if (!localStorage.getItem('authToken')) {
      this.authService.setTempUserId();
    }
    this.authService.setUserDetails();
  }
}


