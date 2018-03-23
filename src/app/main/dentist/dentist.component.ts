import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dentist',
  templateUrl: './dentist.component.html',
  styleUrls: ['./dentist.component.css']
})
export class DentistComponent implements OnInit {

  tab = 1;
  patients : any = [
    {
      name : "XYZ",
      email : "xyz@gmail.com",
      phone : 984562179
    },
    {
      name : "XYZ",
      email : "xyz@gmail.com",
      phone : 984562179
    },
    {
      name : "XYZ",
      email : "xyz@gmail.com",
      phone : 984562179
    },
    {
      name : "XYZ",
      email : "xyz@gmail.com",
      phone : 984562179
    }
  ];

  appointments : any = [
    {
      date : "12-04-2018",
      location : "St. Martha School"
    },
    {
      date : "13-04-2018",
      location : "Riviera Technologies"
    },
    {
      date : "13-04-2018",
      location : "Kendra Vidyalaya School"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
