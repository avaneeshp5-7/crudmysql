import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule}  from "@angular/router";
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { PersonlistComponent } from './personlist/personlist.component';
import { PersonupdateComponent } from './personupdate/personupdate.component';
import { DeletepersonComponent } from './deleteperson/deleteperson.component';
import { InsertpersonComponent } from './insertperson/insertperson.component';
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
var rout=[
  {path:"",component:InsertpersonComponent},
  {path:"getList",component:PersonlistComponent},
  {path:"update",component:PersonupdateComponent},
  {path:"delete",component:DeletepersonComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    PersonlistComponent,
    PersonupdateComponent,
    DeletepersonComponent,
    InsertpersonComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(rout),HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
