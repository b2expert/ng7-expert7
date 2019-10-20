import { Injectable } from "@angular/core";
import { USER_REGISTRATION_MOCK_FIELDS, EMP_REGISTRATION_MOCK_FIELDS } from './mocks';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class RegisterBookService {
    constructor() {

    }

    private _registerFor: string;

    public fields: Array<any>;
    private _fieldsCopy: Array<any>;

    set setRegisterFor(input: any) {
        this._registerFor = input;
    }

    public request2FetchFields() {
        // For testing purpose only
        of(this._fetchFields()).pipe(delay(500))
            .subscribe(response => {
                this.fields = response;

                this._fieldsCopy = JSON.parse(JSON.stringify(response)); // Immutable
            });
    }

    public requestForSave() {
        console.log(this.fields);
    }

    public onReset() {
        this.fields = this._fieldsCopy;
    }

    private _fetchFields() {
        let fields = [];

        switch (this._registerFor) {
            case 'USER':
                fields = USER_REGISTRATION_MOCK_FIELDS;
                break;
            case 'EMP':
                fields = EMP_REGISTRATION_MOCK_FIELDS;
                break;
        }

        return fields;
    }

}