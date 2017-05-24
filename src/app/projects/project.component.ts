import { Component } from '@angular/core'

@Component({
    //moduleId: module.id,
    selector: 'project',
    templateUrl: 'project.component.html',
    inputs: ["post","location"]
})
export class ProjectComponent{

    post: Array<string>;
    
}