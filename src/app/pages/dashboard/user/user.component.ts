import { Component, OnInit } from '@angular/core';
import { HttpHelperService } from '../../../services/http-helper.service';
import { END_POINTS } from '../../../constants/endpoints.constant';
import { UtilityService } from '../../../services/utility.service';
import { GridModel } from 'projects/b2e-grid/src/public_api';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(
    private _httpHelper: HttpHelperService,
    private _utilityService: UtilityService
  ) { }

  public gridData: any;

  ngOnInit() {
    this._httpHelper.fetchData(END_POINTS.profiles)
      .subscribe(response => {
        const _2dArray = this._utilityService.create1dTo2dArray(response);
        this.gridData = {
          dataHeaders: _2dArray[0],
          dataRows: _2dArray
        }
      });

  }

  public onColSort(colInfo: GridModel) {
    console.log(colInfo);
  }

  public onOptionClick(colInfo: GridModel) {
    console.log(colInfo);
  }

}
