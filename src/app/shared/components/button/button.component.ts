import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input('label') label: string = 'Characters';
  @Input('icon') icon: string = 'people';
  @Input('url') url: string = '/characters';
  constructor(private router: Router) { }
  ngOnInit(): void {}
  onClick(): void{
    this.router.navigate([this.url]).then();
  }
}
