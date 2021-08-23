import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormifyModel} from "../../formify/models";

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCharacterComponent implements OnInit {

  // public formify: FormifyModel = new FormifyModel({
  //   controls: [
  //
  //   ],
  //   submit: { text: 'Save'}
  // });
  constructor() {

  }

  ngOnInit(): void {
  }

}
