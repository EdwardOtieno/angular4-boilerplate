import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Form,FormGroup } from '@angular/forms';
import { LoginForm } from '../../models';
import { LoginService } from '../../services/login.service';

@Component({
    selector: 'login',
    template: require('./login.component.html')
})
export class LoginComponent {

    constructor(private loginService: LoginService, private router: Router) {
    }
     form = new LoginForm('','');

    getLogin(form:LoginForm): void {
      let username = form.email;
      let password = form.password;
      console.log(username+ "-"+password);
      this.loginService.getAuthenticate(form).subscribe(() => {
        this.router.navigate(['/calender']);
      });
    }
}
