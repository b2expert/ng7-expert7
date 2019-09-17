import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { B2eGridService } from './b2e-grid.service';
import { GridModel } from '../public_api';

@Component({
  selector: 'lib-b2eGrid',
  templateUrl: './b2e-grid.component.html',
  styles: ['./b2e-grid.component.scss'],
  providers: [B2eGridService]
})
export class B2eGridComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() dataSource: any;
  @Input() tStyle: any;
  @Input() isSort?: boolean = true;
  @Input() isServerSort?: boolean = false;
  @Input() isOptions?:boolean = false;

  @Output('onSort') sortEvt: EventEmitter<GridModel> = new EventEmitter(true);
  @Output('onOptionClick') optionEvt: EventEmitter<GridModel> = new EventEmitter(true);

  private _isSorted: boolean = false;

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  public onSort(col: GridModel) {
    if (this._isSorted) {
      col.sortDirection = col.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      col.sortDirection = 'asc';
      this._isSorted = true;
    }

    if (!this.isServerSort) {
      // Client sort logic
      if (Array.isArray(this.dataSource.dataRows)) {
        this.dataSource.dataRows.sort((b, a) => {
          return col.sortDirection === 'desc' ?
            a[0].displayValue - b[0].displayValue :
            b[0].displayValue - a[0].displayValue;
        });
      }
    } else {
      this.sortEvt.next(col);
    }

  }

  public onClickOption(col: Array<GridModel>, purpose: string) {
    col[0].colFor = purpose;
    this.optionEvt.next(col[0]);
  }
}
