import {Injectable} from '@angular/core';
import {LicensedCNGConverter} from './licensed-cng-converter';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CNGConverterService {

    private _converterUrl = './licensed-cng-converters.json';

    constructor (private _http: Http) {

    }

}