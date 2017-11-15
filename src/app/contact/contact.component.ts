import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations:[

    trigger('contact_anim1',[
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
    trigger('contact_anim_2',[
      transition('*=>*', [
        query('*', style({opacity:0, transform: 'translateY(-100%)'})),
        query('*',stagger('50ms',[
          animate('800ms ease-out', style({opacity: 1, transform: 'translateY(0)'})),
        ])),
        query('.cont', [
          animate(0, style('*'))
        ])
      ])
    ])
    
 
  ]
  
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
