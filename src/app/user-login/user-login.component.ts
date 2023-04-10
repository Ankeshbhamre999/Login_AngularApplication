import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LoginuserService } from '../loginuser.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user: User = new User();

  constructor(private loginuserservice: LoginuserService) {}

  ngOnInit(): void {
    // Perform any initialization tasks here
  }

  userLogin(): void {
    console.log(this.user);
    this.loginuserservice.loginUser(this.user).subscribe(
      (data) => {
        alert("Login successful");
        // Do something with the data returned from the API
      },
      (error) => {
        console.error(error);
        alert("Sorry, please enter correct ID and password");
      }
    );
  }
}
