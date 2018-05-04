import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {
  people: any[] = [
      {
      name: 'Antonio Fiore',
      isVip: true,
      country: 'ITA'
      },
      {
      name: 'Mcleod  Mueller',
      isVip: true,
      country: 'USA'
      },
      {
      name: 'Xiao  Ming',
      country: 'HK',
      isVip: false
      },
      {
      name: 'John Pappas',
      isVip: true,
      country: 'GR'
      }
    ];

  constructor() { }

  ngOnInit() {
  }

}
