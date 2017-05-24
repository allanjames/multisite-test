import { RouterModule }   from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { DashboardComponent} from './dashboard.component';

export var routes = RouterModule.forRoot([
      {
        path: '',
        component: ProjectsComponent
      }
    ])