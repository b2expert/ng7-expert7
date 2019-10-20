import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterBookForTDFComponent } from './register-book-for-tdf/register-book-for-tdf.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterBookForTDFComponent],
  exports: [RegisterBookForTDFComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class RegisterBookModule { }
