import { ActivatedRoute } from '@angular/router'; 
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations:[
    trigger('anim1',[
      transition('*=>*', [
        query('.logo', style({opacity:0, transform: 'translateY(-100px)'})),
        query('.logo',stagger('400ms',[
          animate('500ms ease-in', style({opacity: 1, transform: 'translateY(0)'})),
        ])),
        query('.logo', [
          animate(0, style('*'))
        ])
      ])
    ]),
    trigger('anim2',[
      transition('*=>*', [
        query('.cont', style({opacity:0, transform: 'translateX(-25%)'})),
        query('.cont',stagger('400ms',[
          animate('400ms ease-in', style({opacity: 1, transform: 'translateX(0)'})),
        ])),
        query('.cont', [
          animate(0, style('*'))
        ])
      ])
    ])
    
  ]
  
})
export class HomeComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

}
