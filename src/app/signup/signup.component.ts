import { Component, OnInit,NgModule  } from '@angular/core';
import { routerTransition } from '../router.animations';
import {SignUpService} from '../signup/signup.service';


import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    owner:any = {
        "$class": "org.acme.dmi.Owner",
        firstName:null,
        lastName:null,
        emailId:null,
        phoneNumber:"4444",
        address:""
    };
    constructor(private signUpService: SignUpService,private router:Router) {}

    ngOnInit() {}

    doRegister() {
        this.signUpService.createOwner(this.owner).subscribe(response=>{
            this.router.navigate(['/login']);
        });


    }
}
