import {trigger,transition,style,animate} from "@angular/animations";

export const fadeInOut =
  trigger('fadeInOut',[
      // route 'enter' transition
      transition('void => in', [
        // css styles at start of transition
        style({  opacity:0 }),
        // animation and styles at end of transition
        animate('.3s', style({ opacity:1 }))

      ]),
      transition('* => void', [
        // css styles at start of transition
        style({ opacity: 1 }),
        // animation and styles at end of transition
        animate('.3s', style({ opacity: 0 }))
      ]),
    ]
  );
