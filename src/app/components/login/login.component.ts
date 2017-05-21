import {Component} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
    selector: 'login-form',
    templateUrl: './login.template'
})
export class LoginComponent {
    private logoImagePath: string;
    form: FormGroup;

    constructor(public fb: FormBuilder) {
        this.logoImagePath = '/assets/images/logo-white.png';
        this.form = this.fb.group({
            email: ['', Validators.required, Validators.pattern('^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$')],
            password: ['', Validators.required]
        });
    }
}