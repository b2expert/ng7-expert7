import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
  ) { }
    public message: string = '';

  ngOnInit() {
    this.message = '<span>This is text1. <br /> Next line text.</span>';
  }

}
