import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule
} from '@angular/material';

const MODULES = [
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule
];

@NgModule({
    imports: MODULES,
    exports: MODULES
})
export class MaterialComponentsModule {}
