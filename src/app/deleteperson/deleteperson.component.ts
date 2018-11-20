import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Component({
  selector: 'app-deleteperson',
  templateUrl: './deleteperson.component.html',
  styleUrls: ['./deleteperson.component.css']
})
export class DeletepersonComponent implements OnInit {

  constructor(private http:HttpClient) {this. funGet() }

  ngOnInit() {
  }
  funGet() {
    this.http.get("api/getData").subscribe(this.getcbk)
  }
  getrec;
  getcbk = (dt) => {
    this.getrec =(dt)
  }
del;
  funDel(pid){
    this.del={peopleid:pid.peopleid}
    this.http.post("api/deleteData",this.del).subscribe(this.dlp)
  }
  dlp=(dt)=>{
    alert("Deleted...");
    this.funGet();
  }
}
