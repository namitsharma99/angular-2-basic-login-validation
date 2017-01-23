import { Injectable } from '@angular/core';

@Injectable()
export class ShService {

 // private static shVar: any = null;
 // private shService() { }
 // private ShService(temp: any) {ShService.shVar = temp; }

  // public static getShVar(): ShService {
  //  if (ShService.shVar === null) {
  //    ShService.shVar = new ShService();
  //  }
  //  return ShService.shVar;
  // } 
  static staticShVar: any;

  shVar: any;



}
