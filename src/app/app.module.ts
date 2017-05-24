
import { FormsModule }   from '@angular/forms';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { routes }  from './app.routes';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './projects/project.component';
import { db } from './services/db.service';
import { DashboardComponent } from './dashboard.component';



@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    routes,
    HttpModule
  ],
  declarations: [ AppComponent, ProjectComponent, ProjectsComponent ],
  providers: [ db ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
