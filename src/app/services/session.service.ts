import { Inject, Injectable } from "@angular/core";
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class AppSessionService {
    constructor() { }

    private _notifySessionData: BehaviorSubject<Object> = 
    new BehaviorSubject<Object>(this._getSessionData('cu'));

    public setDataToSession(key: string, data: any) {
        sessionStorage.setItem(key, JSON.stringify(data));
        this._notifySessionData.next(data);
    }

    public getSession(key: string) {        
        return this._notifySessionData.asObservable();
    } 

    private _getSessionData(key: string) {
        return JSON.parse(sessionStorage.getItem(key));
    }

    public removeSession(key: string) {
        sessionStorage.removeItem(key);
    }
}