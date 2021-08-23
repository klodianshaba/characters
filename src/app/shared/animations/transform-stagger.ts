import {animate, query, stagger, style, transition, trigger} from "@angular/animations";

export const transformStagger =

  trigger('transformStagger', [
    transition('* => *', [
      query(':leave', [
        style({  opacity: '1', transform: '{{after}}'}),
        stagger(100, [
          animate(300,   style({ opacity: 0 , transform: '{{before}}' }),)
        ])
      ], { optional: true }),
      query(':enter', [
        style({ opacity: 0 , transform: '{{before}}' }),
        stagger(100, [
          animate(300, style({  opacity: 1 , transform: '{{after}}' }))
        ])
      ], { optional: true })
    ])
  ]);

export const transformStaggerEnter =

  trigger('transformStaggerEnter', [
    transition('* => *', [
      query(':enter', [
        style({ opacity: 0 , transform: '{{before}}' }),
        stagger(100, [
          animate(300, style({  opacity: 1 , transform: '{{after}}' }))
        ])
      ], { optional: true })
    ])
  ]);
