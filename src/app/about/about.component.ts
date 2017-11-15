import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations:[
    trigger('anim1',[
      transition('*=>*', [
        query('.logo', style({opacity:0, transform: 'translateX(-100%)'})),
        query('.logo',stagger('500ms',[
          animate('500ms ease-in', style({opacity: 1, transform: 'translateX(0)'})),
        ])),
        query('.logo', [
          animate(0, style('*'))
        ])
      ])
    ]),
    trigger('anim2',[
      transition('*=>*', [
        query('.cont', style({opacity:0, transform: 'translateX(-100%)'})),
        query('.cont',stagger('500ms',[
          animate('500ms ease-in', style({opacity: 1, transform: 'translateX(0)'})),
        ])),
        query('.cont', [
          animate(0, style('*'))
        ])
      ])
    ])
    
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
