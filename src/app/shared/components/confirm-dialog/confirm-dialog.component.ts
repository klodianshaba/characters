import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {DialogComponent} from "../../../modules/dialog/dialog.component";
import {DialogConfig} from "../../../modules/dialog/models";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  @ViewChild('dialog' , { static: true }) dialog: DialogComponent;

  @Input('title') title: string = 'Would you like to delete';

  @Input('message') message: string = '';

  @Input('status') set onStatus(status: boolean) { (status)?  this.dialog.show(): null }

  @Output() statusChange = new EventEmitter();

  @Output() onConfirm: EventEmitter<boolean> = new EventEmitter();

  public dialogConfig: DialogConfig = { padding: false};

  constructor(private toast: ToastrService) {}

  ngOnInit() {}

  onHide() {
    this.statusChange.emit(false);
  }
  onClickConfirm(): void {
    this.onConfirm.emit(true);
  }

}
