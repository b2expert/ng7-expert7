import { NgModule } from '@angular/core'
import {MatInputModule, MatSelectModule} from '@angular/material';

@NgModule({
    imports: [MatInputModule, MatSelectModule],
    exports: [MatInputModule, MatSelectModule]
})
export class AppMatModule { }