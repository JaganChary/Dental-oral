import { Component } from "@angular/core";

@Component({
    selector: 'konnect-admin',
    templateUrl: 'konnect-admin.component.html',
    styleUrls: ['konnect-admin.component.css']
})
export class KonnectAdminComponent {

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
    ];
    selected = 1;
    tab = 1;
    request = 'appointment';
    type="";
    report = "camp"

    patients = [
        {
            name: 'Vishal Singh',
            type: 'Student',
            class: '10th',
            email: 'vishal.singh@gmail.com',
            contact: 9203349920,
            address: 'vp - 501, pitam pura, delhi-110088'
        }, {
            name: 'Vishal Singh',
            type: 'Student',
            class: '10th',
            email: 'vishal.singh@gmail.com',
            contact: 9203349920,
            address: 'vp - 501, pitam pura, delhi-110088'
        }, {
            name: 'Vishal Singh',
            type: 'Student',
            class: '10th',
            email: 'vishal.singh@gmail.com',
            contact: 9203349920,
            address: 'vp - 501, pitam pura, delhi-110088'
        }, {
            name: 'Vishal Singh',
            type: 'Student',
            class: '10th',
            email: 'vishal.singh@gmail.com',
            contact: 9203349920,
            address: 'vp - 501, pitam pura, delhi-110088'
        }
    ];

    dentists = [
        {
            name: 'Dr Vijay Kumar',
            qualification: 'MBBS',
            email: 'vijay.kumar@gmail.com',
            contact: 9632568715,
            address: 'vp - 501, pitam pura, delhi-110088'
        }, {
            name: 'Dr Vijay Kumar',
            qualification: 'MBBS',
            email: 'vijay.kumar@gmail.com',
            contact: 9632568715,
            address: 'vp - 501, pitam pura, delhi-110088'
        }, {
            name: 'Dr Vijay Kumar',
            qualification: 'MBBS',
            email: 'vijay.kumar@gmail.com',
            contact: 9632568715,
            address: 'vp - 501, pitam pura, delhi-110088'
        }, {
            name: 'Dr Vijay Kumar',
            qualification: 'MBBS',
            email: 'vijay.kumar@gmail.com',
            contact: 9632568715,
            address: 'vp - 501, pitam pura, delhi-110088'
        }
    ];

    organisations = [
        {
            name: "Ravindra Public School",
            address: "115, SD Block, pitam pura, delhi-110088",
            type: "School",
            email: "ravindra.public.school@gmail.com",
            contact: 79585674678,
        }, {
            name: "Ravindra Public School",
            address: "115, SD Block, pitam pura, delhi-110088",
            type: "School",
            email: "ravindra.public.school@gmail.com",
            contact: 79585674678,
        }, {
            name: "Ravindra Public School",
            address: "115, SD Block, pitam pura, delhi-110088",
            type: "School",
            email: "ravindra.public.school@gmail.com",
            contact: 79585674678,
        }, {
            name: "Ravindra Public School",
            address: "115, SD Block, pitam pura, delhi-110088",
            type: "School",
            email: "ravindra.public.school@gmail.com",
            contact: 79585674678,
        }
    ]

    camps = [
        {
            location: "Ravindra Public School",
            status: "Completed",
            date: "10 March 2018",
            
        },
        {
            location: "DAV Public School",
            status: "Schduled",
            date: "30 March 2018"
        },
        {
            location: "Sachdeva Public School",
            status: "Open"
        },
        {
            location: "Ravindra Public School",
            status: "Completed",
            date: "10 March 2018"
        },
        {
            location: "Ravindra Public School",
            status: "Completed",
            date: "10 March 2018"
        }
    ];

    campsreport = [
        {
            location: "Ravindra Public School",
            description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque numquam similique assumenda doloremque dicta obcaecati aliquam nulla dolor tenetur a repudiandae molestiae repellat, consequatur eligendi consectetur deleniti iusto enim dignissimos!",
            date: "10 March 2018",
            name: 'Dr Vijay Kumar'
             
        },
        {
            location: "DAV Public School",
            description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque numquam similique assumenda doloremque dicta obcaecati aliquam nulla dolor tenetur a repudiandae molestiae repellat, consequatur eligendi consectetur deleniti iusto enim dignissimos!",
            name: 'Dr Vijay Kumar',
            date: "30 March 2018"
        },
        {
            location: "Sachdeva Public School",
            description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque numquam similique assumenda doloremque dicta obcaecati aliquam nulla dolor tenetur a repudiandae molestiae repellat, consequatur eligendi consectetur deleniti iusto enim dignissimos!",
            name: 'Dr Vijay Kumar',
            date: "30 March 2018"
        },
        {
            location: "Ravindra Public School",
            description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque numquam similique assumenda doloremque dicta obcaecati aliquam nulla dolor tenetur a repudiandae molestiae repellat, consequatur eligendi consectetur deleniti iusto enim dignissimos!",
            name: 'Dr Vijay Kumar',
            date: "10 March 2018"
        },
        {
            location: "Ravindra Public School",
            description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque numquam similique assumenda doloremque dicta obcaecati aliquam nulla dolor tenetur a repudiandae molestiae repellat, consequatur eligendi consectetur deleniti iusto enim dignissimos!",
            name: 'Dr Vijay Kumar',
            date: "10 March 2018"
        }
    ];

    appointmentsReport = [
        {
            doctor: "Dr Vijay Kumar",
            description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque numquam similique assumenda doloremque dicta obcaecati aliquam nulla dolor tenetur a repudiandae molestiae repellat, consequatur eligendi consectetur deleniti iusto enim dignissimos!",
            
            patient : "Vinay Aggarwal",
            location: "Pitam Pura",
            date: "14 March 2018",
            status: "Converted To Visit"
        },
        {
            doctor: "Dr Vijay Kumar",
            description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque numquam similique assumenda doloremque dicta obcaecati aliquam nulla dolor tenetur a repudiandae molestiae repellat, consequatur eligendi consectetur deleniti iusto enim dignissimos!",
            
            patient : "Vinay Aggarwal",
            location: "Pitam Pura",
            date: "14 March 2018",
            status: "Converted To Visit"
        }, {
            doctor: "Dr Vijay Kumar",
            patient : "Vinay Aggarwal",
            description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque numquam similique assumenda doloremque dicta obcaecati aliquam nulla dolor tenetur a repudiandae molestiae repellat, consequatur eligendi consectetur deleniti iusto enim dignissimos!",
            
            location: "Pitam Pura",
            date: "14 March 2018",
            status: "Converted To Visit"
        }, {
            doctor: "Dr Vijay Kumar",
            patient : "Vinay Aggarwal",
            description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque numquam similique assumenda doloremque dicta obcaecati aliquam nulla dolor tenetur a repudiandae molestiae repellat, consequatur eligendi consectetur deleniti iusto enim dignissimos!",
            
            location: "Pitam Pura",
            date: "14 March 2018",
            status: "Converted To Visit"
        }
    ];

    appointments = [
        {
            doctor: "Dr Vijay Kumar",
            location: "Pitam Pura",
            date: "14 March 2018",
            status: "Converted To Visit"
        },
        {
            doctor:  "Dr Vijay Kumar",
            location: "Pitam Pura",
            date: "14 March 2018",
            status: "Not Converted To Visit"
        }, {
            doctor: "Dr Vijay Kumar",
            location: "Pitam Pura",
            date: "14 March 2018",
            status: "Not Converted To Visit"
        }, {
            doctor: "Dr Vijay Kumar",
            location: "Pitam Pura",
            date: "14 March 2018",
            status: "Converted To Visit"
        }
    ];
    queries = [
        {
            title : "Lorem ipsum dolor",
            description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque numquam similique assumenda doloremque dicta obcaecati aliquam nulla dolor tenetur a repudiandae molestiae repellat, consequatur eligendi consectetur deleniti iusto enim dignissimos!",
            status : "Responded"
        },
        {
            title : "Lorem ipsum dolor",
            description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque numquam similique assumenda doloremque dicta obcaecati aliquam nulla dolor tenetur a repudiandae molestiae repellat, consequatur eligendi consectetur deleniti iusto enim dignissimos!",
            status : "Open"
        },
        {
            title : "Lorem ipsum dolor",
            description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque numquam similique assumenda doloremque dicta obcaecati aliquam nulla dolor tenetur a repudiandae molestiae repellat, consequatur eligendi consectetur deleniti iusto enim dignissimos!",
            status : "Open"
        },
        {
            title : "Lorem ipsum dolor",
            description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque numquam similique assumenda doloremque dicta obcaecati aliquam nulla dolor tenetur a repudiandae molestiae repellat, consequatur eligendi consectetur deleniti iusto enim dignissimos!",
            status : "Responded"
        },{
            title : "Lorem ipsum dolor",
            description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque numquam similique assumenda doloremque dicta obcaecati aliquam nulla dolor tenetur a repudiandae molestiae repellat, consequatur eligendi consectetur deleniti iusto enim dignissimos!",
            status : "Open"
        }

    ]

}