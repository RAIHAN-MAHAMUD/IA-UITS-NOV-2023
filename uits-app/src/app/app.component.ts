import { Component, OnInit } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'UITS-APP';

  constructor(private common: CommonService){}

  ngOnInit(){
    this.common.getUsers().subscribe(res => {
      console.log(res)
    })
  }
}
