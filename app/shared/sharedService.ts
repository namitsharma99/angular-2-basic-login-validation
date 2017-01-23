import { Component, Injectable, Input, Output, EventEmitter } from '@angular/core';

// Name Service
export interface myData {
  name: string;
  password: string;
}

@Injectable()
export class SharedService {

  static instance: SharedService;

  constructor() {
    return SharedService.instance = SharedService.instance || this;
  }
  sharingData: myData = { name: '', password: '' };
  saveData(str, pwd) {
    console.log('save data function called ' + str + '&' + pwd);
    this.sharingData.name = str;
    this.sharingData.password = pwd;
  }
  getData(): any {
    console.log('get data function called ' + this.sharingData.name + ' & ' + this.sharingData.password);
    return this.sharingData.name;
  }
  validate(name, password): any {
    if (name === 'admin') { // && password === 'admin') {
      console.log('Authentication Successful!');
      return 1;
    } else {
      console.log('Authentication Failed! Incorrect username or password...');
      return 0;
    }
  }


}

