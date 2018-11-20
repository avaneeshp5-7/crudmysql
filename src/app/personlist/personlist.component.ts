import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-personlist',
  templateUrl: './personlist.component.html',
  styleUrls: ['./personlist.component.css']
})
export class PersonlistComponent implements OnInit {

  constructor(private http: HttpClient) { this.funGet() }

  ngOnInit() {
  }
  funGet() {
    this.http.get("api/getData").subscribe(this.getcbk)
  }
  getrec;
  getcbk = (dt) => {
    this.getrec =(dt)
  }
}
