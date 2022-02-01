import { Component, OnInit, Input } from '@angular/core';
import { animations } from 'src/app/animations/animations';

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.css'],
  animations: animations,
})

export class StripeComponent implements OnInit {
  @Input() title : string = '';
  @Input() activeStripeAnimation : boolean = false; 
  @Input() fadeInAnimation : boolean = false;
  @Input() background : string = '#fff';
  @Input() nameAnimation : string = '';
  transformValue : string = 'translateY(-100%)'
  leftValue : string = '0';
 
  constructor() { }

  ngOnInit(): void {
    if(this.nameAnimation == 'entryOfStripeReverse'){
      this.transformValue = 'translateY(100%)';
      this.leftValue = '50%';
    }
  }

}
