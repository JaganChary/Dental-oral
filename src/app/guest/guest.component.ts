import { Component } from "@angular/core";

@Component({
    selector: 'guest',
    templateUrl: 'guest.component.html',
    styleUrls:  ['guest.component.css']
})
export class GuestComponent {
    tab = 1;
    selected = 1;
    type = 'student';
    registerAs = [
        {
            title: "Patient",
            value: 1
        },
        {
            title: "Dentist",
            value: 2
        },
        {
            title: "Organisation",
            value: 3
        }
    ]

    dentists = [
        {
            name : 'Dr. Pritika Rai',
            distance : '1km'
        },
        {
            name : 'Dr. Bindu Susheel',
            distance : '1.5km'
        },
        {
            name : 'Dr. Poornima Preethy',
            distance : '2km'
        },
        {
            name : 'Dr. Ganesh Kumar',
            distance : '2km'
        },
        {
            name : 'Dr. Vijay Kumar',
            distance : '2.5km'
        },
        {
            name : 'Dr. Bindu Susheel',
            distance : '5km'
        }
    ]

} 