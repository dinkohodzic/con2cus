import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class JobsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
