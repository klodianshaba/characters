import {Component, forwardRef, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FieldControlComponent} from "../field-control/field-control.component";
import {FormBuilder, NG_VALUE_ACCESSOR} from "@angular/forms";
import { BehaviorSubject } from 'rxjs';
import { TagData, TagifySettings ,TagifyService } from 'ngx-tagify';
@Component({
  selector: 'formify-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => TagsComponent) , multi: true}
  ]
})
export class TagsComponent extends FieldControlComponent implements OnInit , OnChanges {
  @Input('settings') settings: TagifySettings = {
    placeholder: 'Enter tags...',
    addTagOnBlur: true,
    blacklist: ['fucking', 'shit'],
    delimiters: ",| ",
    callbacks: {
      click: (e) => {  }
    }
  };
  @Input('whitelist') whitelist$ = new BehaviorSubject<string[]>(['hello', 'world']);
  @Input('readonly') readonly = false;
  constructor(protected formBuilder: FormBuilder) { super(formBuilder); }
  ngOnChanges(changes: SimpleChanges): void {super.ngOnChanges(changes); }
  ngOnInit(): void {
    super.ngOnInit();
    this.settings.placeholder = this.label;
  }
  onTagInput(tag: any): void{}
  onAddedTag(tagify: any): void {}
  onRemovedTag(tags: any): void{}
}

