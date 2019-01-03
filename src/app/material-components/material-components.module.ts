import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule
} from '@angular/material';

const MODULES = [
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule
];

@NgModule({
    imports: MODULES,
    exports: MODULES
})
export class MaterialComponentsModule {}
