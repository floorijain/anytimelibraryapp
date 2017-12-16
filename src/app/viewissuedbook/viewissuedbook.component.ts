import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService, UserService } from '../services/index';

@Component({
    templateUrl: 'viewissuedbook.component.html'
})

export class ViewIssuedBookComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

}
