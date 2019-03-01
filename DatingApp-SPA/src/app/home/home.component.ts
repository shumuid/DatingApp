import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registerMode = false;
  values: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  registerToggle() {
    this.registerMode = true;
  }

  cancelRegisterMode(registerMode) {
    this.registerMode = registerMode;
  }

  /*observables = a stream of data that comes from the server, you need to subscribe to it to get the observable data*/
}
