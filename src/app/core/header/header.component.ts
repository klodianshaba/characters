import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onNavigateCharacters(): void{
    this.router.navigate(['/characters']).then();
  }
  onNavigateAddCharacter(): void{
    this.router.navigate(['/add-character']).then();
  }
  onGeta(): void{
    this.onNavigateCharacters();
  }

}
