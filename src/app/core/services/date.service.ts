import { Injectable } from '@angular/core';
import {CoreModule} from "../core.module";

@Injectable({
  providedIn: CoreModule
})
export class DateService {

  constructor() {}

  private date(): Date {
    return new Date();
  }
  public toUTC(): Date{
    const date  = this.date();
   return new Date(Date.UTC(date.getUTCFullYear(),date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()));
  }

}
