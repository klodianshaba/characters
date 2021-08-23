import {animate, sequence, state, style, transition, trigger} from "@angular/animations";

export  const StickyAnimation =
    trigger('StickyAnimation', [
        state('in',style({position:'{{position}}'}),{params:{styleTransform:'',animationTransform:'', position:'relative'}}),
        state('out',style({position:'{{position}}'}),{params:{styleTransform:'',animationTransform:'', position:'relative'}}),
        transition('out => in', [
            style({ position:'sticky', transform:'{{styleTransform}}'}),
            sequence([
                animate("0.5s ease", style({ transform:'{{animationTransform}}'}))
            ])
        ]),
        transition('in => out', [
            style({ position:'sticky', transform:'{{styleTransform}}'}),
            sequence([
                animate("0.5s ease", style({ transform:'{{animationTransform}}'}))
            ])
        ])
]);

