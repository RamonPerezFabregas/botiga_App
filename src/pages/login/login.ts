import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { LoginService} from './login.service'

//const urlLogin = 'http://multimedia.uoc.edu/frontend/auth.php';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  // private headers = new Headers({'Content-Type': 'application/json'});
  myForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public fb: FormBuilder,
    private http:Http,
    private loginService:LoginService,
  ) {
    this.myForm = this.fb.group({
      'nom': ['', Validators.required],
      'pass': ['', Validators.required],
    });
  }

/*  connectar(nom, pass){
    //console.log(nom+"-"+pass);
    var data = JSON.stringify({user: nom, passwd: pass});

    console.log(data);
    return this.http.post(urlLogin, data, {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
      //.subscribe(
      //  response => console.log(response.json()),
      //  error => console.error(error));
  }

  handleError(error) {
		console.log(error);
		//return error.json().message || 'Server error, please try again later';
	}*/

  login(){
    var retorna= this.loginService.connectar(this.myForm.get("nom").value, this.myForm.get("pass").value);
    //console.log(retorna);
  }


}
