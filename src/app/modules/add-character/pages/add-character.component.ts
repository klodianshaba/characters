import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCharacterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
