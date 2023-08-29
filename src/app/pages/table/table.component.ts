// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-table',
//   templateUrl: './table.component.html',
//   styleUrls: ['./table.component.css']
// })
// export class TableComponent {

// }

import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {



  username: string = "";
  email: string = "";
  contactno: any = "";
  feedback: any = "";

  constructor(private Router: Router, private activatedRoute: ActivatedRoute) {
     this.username = localStorage.getItem("username")!;
     this.email = localStorage.getItem("email")!;
     this.contactno = localStorage.getItem("contactno")!;
     this.feedback = localStorage.getItem("feedback")!;
   
   
    }

    ngOnInit(): void {

    }
    
}
