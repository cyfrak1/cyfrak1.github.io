import { trigger, state, animate, transition, style, query, animateChild, 
    stagger,keyframes } from '@angular/animations';

export const animations : any[] = [
    // show stripe from up to down or hide from down to up
    trigger('entryOfStripe',[
        state('show',style({ transform:'translateY(0%)' })),
        state('hide',style({ transform:'translateY(100%)' })),

        transition('* => *', [
            animate('1s')
        ]),
    ]),
    // the same as entryOfStripe but reverse
    trigger('entryOfStripeReverse',[
        state('show',style({ transform:'translateY(0%)' })),
        state('hide',style({ transform:'translateY(-100%)' })),

        transition('* => *', [
            animate('1s')
        ]),
    ]),
    // fade in / out square animation
    trigger('fadeInOrOutSquare',[
        state('show',style({opacity:"1", transform:"scale(1)"})),
        state('out',style({opacity:"0", transform:"scale(0)"})),
        transition('* => *', [
            animate('0.6s')
        ]),
    ]),
    trigger('fadeInOut',[
        state('show',style({opacity:"1"})),
        state('hide',style({opacity:"0"})),

        transition('* => *', [
            animate('0.6s')
        ]),
    ]),
]