import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"
@Component({
  selector: 'app-insertperson',
  templateUrl: './insertperson.component.html',
  styleUrls: ['./insertperson.component.css']
})
export class InsertpersonComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  name; age; mobile; gender;msg1;msg2;msg3;msg4;msg5
  funAdd(val) {

    if (val.valid) {
      var pdata = { name: this.name, age: this.age, mobile: this.mobile, gender: this.gender }
      this.http.post("api/addData", pdata).subscribe(this.inscbk)
    }
    else {
      this.msg1=" *Enter Name"
      this.msg2=" *Enter Age"
      this.msg3=" *Enter Mobile No."
      this.msg4=" *Select Gender"
    }
  }
  inscbk = (dt) => {
    alert("Record Added")
  }
}
