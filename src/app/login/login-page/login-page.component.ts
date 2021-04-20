import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface UserInterface {
  email: string,
  password: string  
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {

  public user : UserInterface = {
    email: '',
    password: ''
  }
  public msgError: string = ''

  constructor(
    private authService: AuthService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  async login(){
    try {
      if(this.user.email && this.user.password) {
        await this.authService.login(this.user.email, this.user.password)
        this.route.navigate(['chat'])
      } 
    } catch (err) {
      this.msgError = err.message
    }
  }
  
  showSingup() {
    this.route.navigate(['signup'])
  }
}
