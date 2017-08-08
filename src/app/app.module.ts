import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { InventoryComponent } from './inventory/inventory.component';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: 'Product', component: ProductComponent },
    { path: 'Inventory', component: InventoryComponent },
];

@NgModule({
    declarations: [
        AppComponent,
        ProductComponent,
        InventoryComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
