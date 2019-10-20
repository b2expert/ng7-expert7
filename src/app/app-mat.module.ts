import { NgModule } from '@angular/core'
import {MatInputModule, MatSelectModule, MatDialogModule, MatButtonModule} from '@angular/material';

@NgModule({
    imports: [MatInputModule, MatSelectModule, MatDialogModule, MatButtonModule],
    exports: [MatInputModule, MatSelectModule, MatDialogModule, MatButtonModule]
})
export class AppMatModule { }