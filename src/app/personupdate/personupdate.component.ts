import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-personupdate',
  templateUrl: './personupdate.component.html',
  styleUrls: ['./personupdate.component.css']
})
export class PersonupdateComponent implements OnInit {

  constructor(private http:HttpClient) { this.funGet()}

  ngOnInit() {
  }
  gloid=0;
  funGet() {
    this.http.get("api/getData").subscribe(this.getcbk)
  }
  getrec;
  getcbk = (dt) => {
    this.getrec =(dt)
  }
  name;age;gender;mobile;
  funUpdate(val){
    this.gloid = (val.peopleid)   
    this.name = (val.Name)
    this.age = (val.Age)
    this.gender = (val.Gender)
    this.mobile = (val.MobileNo)
    this.funGet();
  }

  funSave(){
    var str={peopleid:this.gloid,name:this.name,age:this.age,gender:this.gender,mobile:this.mobile};
    this.http.put("api/updateData",str).subscribe(this.updt)
  }
  updt=(dt)=>{
    alert("Updated Successfully...")
    this.gloid=0;
    this.funGet();
  }

}
