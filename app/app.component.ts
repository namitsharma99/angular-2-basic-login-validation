import { Component, Input, Output } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { ShService} from './shared/sh.service';

@Component({
  selector: 'app-root',
  providers: [ShService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  constructor(private service: ShService) { }

  init() {
    ShService.staticShVar = 'global value!';
  }

}
