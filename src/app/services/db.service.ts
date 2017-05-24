import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class db{
    //private _url = window.location.protocol+"//"+window.location.hostname+"/dbfetch2.php"; // for testing we will always get put and delete from posts
    private _url = "php/dbfetch2.php";  
    constructor(private _http: Http){

    }
    getData(type?: string){
        //returns some data based on the type passed
        let url = this._url+'?newurl='+type;
        return this._http.get(url).toPromise().then(res => {
            console.log(window.location);
            var temp: TemplateStringsArray;
            temp = res.json();
            var src: string;
            src = temp['url'];
            console.log(window.location.protocol);
            console.log(temp['success'].toString());
            return temp;
        });
    }
    putData(obj: Object){
        //update/add some data with the object passed
    }
    deleteData(obj: Object){
        //delete some data with the object passed
    }
}