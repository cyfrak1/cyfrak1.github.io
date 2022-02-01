import { Component, OnInit, Input} from '@angular/core';
import { animations } from 'src/app/animations/animations';
import { SimpleChanges } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: animations,
})

export class HomeComponent implements OnInit {

  @Input() activeAnimationHome: boolean = false;
  @Output() activeMenuAnimation  = new EventEmitter<boolean>();

  activeSquareAnimation : boolean = false;
  fadeInAnimation = false;

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(()=>{
      this.activeSquareAnimation = this.activeAnimationHome;
    },this.activeAnimationHome ? 1000 : 0);
    setTimeout(()=>{
      this.activeMenuAnimation.emit(this.activeAnimationHome);
      this.fadeInAnimation = this.activeAnimationHome;
    },this.activeAnimationHome ? 1500 : 0)
  }
}
