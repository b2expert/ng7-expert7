import { Injectable } from "@angular/core";
import { GridModel } from 'projects/b2e-grid/src/public_api';

@Injectable()
export class UtilityService {
    constructor() {}

    public create1dTo2dArray(dbList: Array<any>) {
        const d2Array: Array<Array<GridModel>> = new Array<Array<GridModel>>();
        dbList.forEach((item, rowIndex) => {
          d2Array.push([]);
          Object.keys(item).forEach((key, keyIndex) => {
            d2Array[rowIndex].push({
              displayValue: item[key],
              dbColName: key
            });
          });
        });
        return d2Array;
      }
}