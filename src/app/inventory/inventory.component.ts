import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-inventory',
    templateUrl: './inventory.component.html',
    styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
    friends = [1, 2, 3];

    constructor(private _router: Router) {
    }

    ngOnInit(): void {

    }

    onBack(): void {
        this._router.navigate(['/Product']);
    }

}
