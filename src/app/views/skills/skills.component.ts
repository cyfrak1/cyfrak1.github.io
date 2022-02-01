import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { SimpleChange } from '@angular/core';
import SwiperCore, { EffectFade } from 'swiper';
import Swiper, { Navigation } from 'swiper';
import { SwiperOptions } from 'swiper';
import { animations } from 'src/app/animations/animations';

SwiperCore.use([EffectFade]);
Swiper.use([Navigation]);

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: animations,
  encapsulation: ViewEncapsulation.None,
})
export class SkillsComponent implements OnInit {

  @Input() activeAnimationSkills : boolean = false;
  @Output() activeMenuAnimation = new EventEmitter<boolean>();

  zindex : number = 0;
  fadeInAnimation : boolean = false;
  screenWidth : number = 0;
  icons : string[] = [
    '../../../assets/htmlIcon.png',
    '../../../assets/cssIcon.png',
    '../../../assets/jsIcon.png',
    '../../../assets/sassIcon.png',
    '../../../assets/angularIcon.png',
  ];
  sliderContentArray : string[] = [
    'I have mastered it perfectly',
    'I have mastered it perfectly',
    'I am using es6',
    'I know basic stuff about it',
    'I know basic stuff about it',
  ];
  config: SwiperOptions = {
    pagination: { 
      el: '.swiper-pagination', 
      clickable: true 
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
  };  

  constructor() { }

  ngOnInit(): void {
    // this.currentSliderContent = this.sliderContentArray[0];
  }
  ngOnChanges(changes : SimpleChange) : void {
    setTimeout(()=>{
      this.activeMenuAnimation.emit(this.activeAnimationSkills);
      this.fadeInAnimation = this.activeAnimationSkills;
    },this.activeAnimationSkills ? 1000 : 0)
    if(this.activeAnimationSkills == true){
      this.zindex = 4;
    }
  }
  // onChangeSlide(swiper : any) : void {
  //   let index : number = swiper.activeIndex;
  //   this.currentSliderContent = this.sliderContentArray[index];
  //   // this.sliderContentAnimation = false;
  //   // setTimeout(()=>{this.sliderContentAnimation = true}, 500);
  //   console.log(index, this.currentSliderContent)
  // }

}
