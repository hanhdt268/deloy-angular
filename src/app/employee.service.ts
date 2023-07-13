import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {combineLatestAll, forkJoin, map, Observable, of} from "rxjs";
import {Employee} from "./employee";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  // private apiServerUrl = environment.apiBaseUrl;

  constructor(private _http: HttpClient) {

  }
 
}
