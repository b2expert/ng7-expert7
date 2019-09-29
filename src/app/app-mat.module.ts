import { NgModule } from '@angular/core'
import {MatInputModule, MatSelectModule, MatDialogModule} from '@angular/material';

@NgModule({
    imports: [MatInputModule, MatSelectModule, MatDialogModule],
    exports: [MatInputModule, MatSelectModule, MatDialogModule]
})
export class AppMatModule { }