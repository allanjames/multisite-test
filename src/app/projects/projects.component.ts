import { Component, Renderer } from '@angular/core';

import { db } from '../services/db.service';
import { ProjectComponent } from './project.component';

@Component({
    //moduleId: module.id,
    selector: 'projects',
    templateUrl: './projects.component.html'
})
export class ProjectsComponent{

    post: string;
    location: string;
    reg: string;
    last: string;
    blog_id: string;
    p:Object={siteurl: ""};
    constructor(private _db: db, public query: Renderer){
        
    }
    getProjects(){
        //var disp = document.getElementById('showQ'); //eliminate this and use Angular core element
        var disp = this.query.selectRootElement('#showQ');
        var frame = this.query.selectRootElement('#preview');
        var locale = this.query.selectRootElement('#multi');
        var reg = this.query.selectRootElement('#reg');
        var last = this.query.selectRootElement('#last');
        var id = this.query.selectRootElement('#articles');
        
        var inp = this.p['siteurl'];
        /*console.log(inp);
        if( inp.indexOf('http:') >= 0){
            inp = inp.substring(7);
            console.log(inp.indexOf('http:'));
        }*/

        var response = this._db.getData(this.p['siteurl']).then(res =>{
            console.log(res);
            this.post = res['success'].toString();
            this.location =res['location'].toString();
            this.reg = res['registered'].toString();
            this.last = res['last'].toString();
            this.blog_id = res['blog_id'];
            this.p['siteurl']=inp;
            console.log(inp.indexOf('http:'));
            if( inp.indexOf('http:') >= 0) {
                inp = inp.substring(7);
                console.log(inp.indexOf('http:'));
            }
            //disp.innerHTML = inp;
            this.query.createText(disp,inp);
            //console.log(res);
            if(res['success']!==false) {
                this.query.setElementAttribute(frame, 'src', 'http://'+inp);
                this.query.setElementStyle(frame,'display','block');
                this.query.createText(locale,this.location);
                this.query.createText(reg, this.reg);
                this.query.createText(last, this.last);
                this.query.createText(id, this.blog_id);
            } else {
                this.query.setElementStyle(frame,'display','none');
            }
        });
        

    }
}