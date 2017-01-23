import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { LocalStorageService } from 'angular-2-local-storage';
import { SharedService } from '../shared/sharedService';
import { example } from './sample';

@Component({
  selector: 'app-pageone',
  providers: [SharedService],
  templateUrl: './pageOne.component.html'
})
export class PageOneComponent {

  constructor(private router: Router, private service: SharedService) { }

  submitFunction(name, pwd) {

    document.getElementById('usernameerror').innerHTML = '';

    var uname = (<HTMLInputElement>document.getElementById('uname')).value;

    if (uname.length === 0) {
      // alert('incorrect username');
      document.getElementById('usernameerror').innerHTML = '<h6 style="color:red">Please enter username!</h6>';
      return;
    }


    var pwd: any = (<HTMLInputElement>document.getElementById('pwd')).value;

    if (pwd.length === 0) {
      // alert('incorrect password');
      document.getElementById('usernameerror').innerHTML = '<h6 style="color:red">Please enter password!</h6>';
      return;
    } else {
      var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
      if (!regex.test(pwd)) {
        // alert('incorrect password = regex issue');
        document.getElementById('usernameerror').innerHTML = '<h6 style="color:red">Password not meeting security criteria!</h6>';
        return
      }
    }

    status = this.service.validate(name, pwd);

    if (status === '1') {
      this.service.saveData(name, pwd);
      this.router.navigate(['pageTwo']);
    } else {
      // alert('Incorrect username or password!');
      console.log('Please login again later!');
      this.router.navigate(['pageOne']);
    }
  }


  instantValidationOfUserName() {

    document.getElementById('usernameerror').innerHTML = '';

    var uname = (<HTMLInputElement>document.getElementById('uname')).value;
    var fChar: any = uname.charAt(0);
    if (fChar >= 0 && fChar <= 9) {
      // alert('username starting with number');
      document.getElementById('usernameerror').innerHTML = '<h6 style="color:red">Username cannot have number as first character!</h6>';
      return;
    }
    if (uname.length > 10) {
      // alert('username cannot exceed 10 characters');
      document.getElementById('usernameerror').innerHTML = '<h6 style="color:red">Username cannot more than 10 characters!</h6>';
      return;
    }
  }


  sayHi() {
    example();
  }

  showPasswd() {
    document.getElementById('pwd').setAttribute('type', 'text');
  }

  hidePasswd() {
    document.getElementById('pwd').setAttribute('type', 'password');

  }
}
