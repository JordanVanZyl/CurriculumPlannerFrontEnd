import { Component } from '@angular/core';
import { Router } from '@angular/router';
import "node_modules/bootstrap/scss/bootstrap.scss"
import { AuthenticationService } from './services';
import { ComponentBase } from './components/component-base';
import {MatDialog} from '@angular/material/dialog';
import { DisclaimerDialogComponent } from './components/disclaimer-dialog/disclaimer-dialog.component';


@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent extends ComponentBase {   

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/home']);
    }
}

