import { Component, OnInit, Input } from '@angular/core';
import { RegisterBookService } from '../register-book.service';

@Component({
  selector: 'app-register-book-for-tdf',
  templateUrl: './register-book-for-tdf.component.html',
  styleUrls: ['./register-book-for-tdf.component.scss'],
  providers: [RegisterBookService]
})
export class RegisterBookForTDFComponent implements OnInit {

  constructor(
    public registerBookSevice: RegisterBookService
  ) { }

  @Input('for') registerFor: string;
  
  ngOnInit() {
    this.registerBookSevice.setRegisterFor = this.registerFor ? this.registerFor.toUpperCase(): '';
    this.registerBookSevice.request2FetchFields();
  }

}
