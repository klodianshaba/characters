import { Injectable } from '@angular/core';
import {CoreModule} from "../../core.module";

@Injectable({
  providedIn: CoreModule
})
export class ScreenService {

  constructor() { }

  public size(): {x: number, y: number} { // find width and height of client window......................

    let w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight|| e.clientHeight|| g.clientHeight;

    return { x , y } ;
  }

}
