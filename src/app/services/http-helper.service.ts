import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import * as $ from 'jquery';
import { AppSessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class HttpHelperService {

  constructor(
    private _httpClient: HttpClient,
    private _sessionService: AppSessionService
  ) {
    this._sessionService.getSession('cu').subscribe(res => {
      this.cu = res;
    });
  }
  private cu: any;

  private _httpConfigs = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };

  /**
   * **REQUEST TO FETCH DATA FROM SERVER**
   * @description This is GET request
   * @param relUrl 
   * @param configs 
   * @returns Observable<
   */
  public fetchData(relUrl: string, configs?: any) {
    configs = configs ? configs : this._httpConfigs;
    if (this.cu) {
      configs.headers['Authorization'] = 'Bearer ' + this.cu.Token;
    }
    try {
      return this._httpClient
        .get(environment.serviceBaseUrl + relUrl, configs)
        .pipe(
          map((response: any) => {
            return response;
          })
        );
    } catch (reason) {
      throw reason;
    }
  }

  public postData(relUrl: string, data: any, configs?: any) {
    configs = configs ? configs : this._httpConfigs;
    if (this.cu) {
      configs.headers['Authorization'] = 'Bearer ' + this.cu.Token;
    }
    try {
      return this._httpClient
        .post(environment.serviceBaseUrl + relUrl, $.param(data), configs)
        .pipe(
          map((response: any) => {
            return response;
          })
        );
    } catch (reason) {
      throw reason;
    }
  }
}
