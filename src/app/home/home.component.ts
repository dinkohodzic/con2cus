import { ActivatedRoute } from '@angular/router'; 
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
  
})
export class HomeComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

}
