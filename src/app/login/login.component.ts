import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  styleImage='doctor';

  form:FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): any{
    this.form = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(6)]]
    })
  };

  unsplashClass(): any{
    return {
      'min-height':'100%',
      background: `url("https://source.unsplash.com/random/1200x900?"${this.styleImage} no-repeat center center)`,
      'background-size':'cover',
      position:'relative'
    }
  };

  login(event: Event):any {
    event.preventDefault();
    if (this.form.valid){
      const value = this.form.value;
      console.log(`'%c'Doctor: ${value.email} - Password: ${value.password}`, 'background: #222; color: #bada55');
    }
  }
}
