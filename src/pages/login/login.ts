import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
//import { Sessio } from '../../'

const urlLogin = 'http://multimedia.uoc.edu/frontend/auth.php';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  
  myForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public fb: FormBuilder,
    private http:Http
  ) {
    this.myForm = this.fb.group({
      'nom': ['', Validators.required],
      'pass': ['', Validators.required],
    });
  }

  connectar(nom, pass){
    //console.log(nom+"-"+pass);
    var data = JSON.stringify({user: nom, passwd: pass});
    
    console.log(data);
    
    this.http.post(urlLogin, data)
      .subscribe(
        response => console.log(response.json()),
        error => console.error(error));
  }
  
  login(){
    //console.log(this.myForm.value);
    this.connectar(this.myForm.get("nom").value, this.myForm.get("pass").value);
  }
  

}
