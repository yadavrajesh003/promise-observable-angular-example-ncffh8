import { Component } from '@angular/core';
import { AuthService, MyDataType } from './app.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  
{
  name = 'Angular Observables';
  subscriptionUsers: MyDataType[] = [];
  promiseUsers: MyDataType[] = [];

  constructor(private authService: AuthService) 
  {
    this.getUsersWithSubscription();
    this.getUsersWithPromise();
  }

  getUsersWithSubscription()
  {
    this.authService.getUsersForSubscription().subscribe(res => {
      this.subscriptionUsers = res;
      console.log("getUsersWithSubscription(): " + JSON.stringify(this.subscriptionUsers));
    },
    error=>{
      console.error('Error occured');
      
    }
    );
  }

  getUsersWithPromise()
  {
    this.authService.getUsersForPromise()
    .toPromise()
    .then(res => {
      this.promiseUsers = res;
      console.log("getUsersWithPromise(): " + JSON.stringify(this.promiseUsers));
    })
    .catch(err => { console.log(err) });
  }


}
