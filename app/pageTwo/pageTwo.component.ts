import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
// import { LocalStorageService } from 'angular-2-local-storage';
import { ShService} from '../shared/sh.service';
import { SharedService } from '../shared/sharedService';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pagetwo',
  providers: [SharedService],
  templateUrl: './pageTwo.component.html'
})


export class PageTwoComponent implements OnInit {

  // constructor(private storage: LocalStorageService) { }
  // tmp = localStorage.getItem('myVar');
  // serVar = this.service.shVar;
  // staticSerVar = ShService.staticShVar;
//  tmp: any;
  private tmp: any;
  constructor(private service: SharedService, private route: ActivatedRoute) {  }

  // check this
  ngOnInit() {
   // this.service.getData().subscribe(tmp => this.tmp = tmp);
    console.log('on page 2 - ' + this.service.getData());
    this.tmp = this.service.getData();
  }

}
