import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-admin',
  templateUrl: './student-admin.component.html',
  styleUrls: ['./student-admin.component.css']
})
export class StudentAdminComponent implements OnInit {
  orgArray: any[] = [];
  
  constructor() { }

  ngOnInit() {
    this.organizations();
  }

  organizations(): any {
    this.orgArray = [
      {
        orgName: 'St. Stephens School',
        address: '11, R.B.C. Road, Dum Dum, Kolkata – 700 028',
        institution: 'School',
        campStatus: '12-10-2017'
      },
      {
        orgName: 'St. Martha School',
        address: '11, J-Block, Saket, Delhi – 700 028',
        institution: 'School',
        campStatus: '12-10-2018'
      },
      {
        orgName: 'Riviera Technologies',
        address: '11, R.B.C. Road, Dum Dum, Kolkata – 721 028',
        institution: 'Corporate',
        campStatus: '09-05-2018'
      },
      {
        orgName: 'St. Bishop School',
        address: '11, R.B.C. Road, Dum Dum, Kolkata – 707 328',
        institution: 'School',
        campStatus: 'No Information Available'
      },
      {
        orgName: 'Kendra Vidyalaya School',
        address: '11, R.C. Road, Park Street, Kolkata – 700 324',
        institution: 'School',
        campStatus: '12-10-2017'
      },
      {
        orgName: 'Sacred Heart School',
        address: '11, Netaji Subhash Place, Pitampura, Delhi – 723 028',
        institution: 'School',
        campStatus: 'NO Information Available'
      },
    ]
  }
}
