import { Component, Inject, Input, TemplateRef, ElementRef, ViewChild, Output, EventEmitter, OnInit, AfterViewInit} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Overlay } from '@angular/cdk/overlay';
import { BehaviorSubject} from "rxjs";
import { ScreenService } from "../../core/services/screen/screen.service";
import { ResizedEvent} from "angular-resize-event";
import { DialogConfig } from "./models";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements AfterViewInit{
  public status: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public modalRef: any;
  @ViewChild('template', {static: false}) template: TemplateRef<any>;
  @ViewChild('dialogElement', {static: false}) dialogElement: ElementRef;
  @ViewChild('headerElement', {static: false}) headerElement: ElementRef;
  @ViewChild('footerElement', {static: false}) footerElement: ElementRef;
  @Input('config') set onConfig(config: DialogConfig) { Object.assign(this.config , config); }
  public config: DialogConfig = { width:'auto', height:'auto' ,footer:true ,header:true ,padding:true , overlayFooter:false , overlayHeader:false , fullScreen:false };
  @Input() modalClass: string = 'dialog-lg dialog-info';
  @Input() showCloseIcon: boolean = true;
  @Input('width') set onWidth (width: string){ this.config.width = width }
  @Input('height') set onHeight(height: string) { this.config.height = height}
  @Output() onHide: EventEmitter<boolean> = new EventEmitter();

  constructor(private overlay: Overlay, public dialog: MatDialog , private screen: ScreenService) {}
  ngOnInit(): void {}
  ngAfterViewInit(): void {}

  show():void{
    this.status.next(true);
    this.modalRef = this.dialog.open(this.template, {
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      disableClose: true,
      width: this.config.width,
      height: this.config.height,
      // backdropClass:'overlay-app',
      panelClass:'full-width-dialog',
    });
    document.body.style.overflow = 'hidden';
    this.modalRef.keydownEvents().subscribe((e:any) => {
      if (e.keyCode === 27) {
        this.modalRef.close();
      }
    });
  }

  hide(): void {
    document.body.style.overflow = 'visible';
    setTimeout(()=>{
      this.status.next(false);
    },300);
    this.modalRef.close();
    this.onHide.emit(false);
  }

  getBodyStyle(){
    let height = 0;
    (!this.config.overlayFooter) ? height+= this.footerElement.nativeElement.getBoundingClientRect().height : null;
    (!this.config.overlayHeader) ? height+= this.headerElement.nativeElement.getBoundingClientRect().height : null;
    if(this.config.fullScreen){
      return { 'height':'calc(100vh - '+height+'px)','width':'100vw' };
    }
    return { 'max-height':'calc(100vh - '+height+'px)','max-width':'100vw' };
  }

  onResize(event:ResizedEvent){
    let screen = this.screen.size();
    if(event.newHeight >= screen.y && event.newWidth >= screen.x){
      this.dialogElement.nativeElement.parentNode.classList.add('remove-border-dialog');
    }else{
      this.dialogElement.nativeElement.parentNode.classList.remove('remove-border-dialog');
    }
  }
}
