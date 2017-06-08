/**
 * Created by Ramon on 07/06/2017.
 */
import { Injectable } from '@angular/core';
import { Headers, Http} from  '@angular/http';

//import { Sessio } from './sessio';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private urlLogin = 'http://multimedia.uoc.edu/frontend/auth.php';

  constructor(private http: Http) {}

  connectar(nom: string, pass:string){
    //console.log(nom+"-"+pass);
    var data = JSON.stringify({user: nom, passwd: pass});

    //console.lthis.headers);
    return this.http.post(this.urlLogin, data, {headers: this.headers})
      .toPromise()
      .then(res => console.log(res.json()))
      .catch((err) => console.log('Error: %s', err));
      //.then(res => res.json().data)
      //.catch(this.handleError);
    //.subscribe(
    //  response => console.log(response.json()),
    //  error => console.error(error));
  }

  handleError(error) {
    console.log(error);
    //return error.json().message || 'Server error, please try again later';
  }

}
