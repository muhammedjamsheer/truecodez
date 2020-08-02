import { Component, OnInit } from '@angular/core';
import { PdfmakeService } from '../services/pdfmake.service';

@Component({
  selector: 'app-angular-export',
  templateUrl: './angular-export.component.html',
  styleUrls: ['./angular-export.component.scss']
})
export class AngularExportComponent implements OnInit {
  codes: any = [];
  exportDataList: any[];

  studentsList= [
    {
      "id": 1,
      "name": "Jamsheer",
      "email": "jamsheer@mail.com",
      "mobile": 8592947647,
      "dob": "29/06/12"
    },
    {
      "id": 1,
      "name": "suhail",
      "email": "suhail@mail.com",
      "mobile": 8592947647,
      "dob": "29/06/12"
    },
    {
      "id": 1,
      "name": "Nithin",
      "email": "nithin@mail.com",
      "mobile": 9048188905,
      "dob": "06/06/12"
    },
    {
      "id": 1,
      "name": "Pranav",
      "email": "pranav@mail.com",
      "mobile": 7736400352,
      "dob": "29/06/12"
    }
  ]
  constructor(
    public PdfmakeService:PdfmakeService
  ) { 
    
 
  }

  ngOnInit() {
    this.getsamplecodes();
  }

 exportPdf(type) {
    this.exportDataList = [];
    this.studentsList.forEach((element, index) => {
      this.exportDataList.push([
          index + 1,
          element.name,
          element.email,
          element.mobile,
          element.dob,
        ]);
    });
    let pdfColumns = ["Sl No", "Name", "Email", "Mobile", "Date Of Birth"];
    import("jspdf").then(jsPDF => {
      import("jspdf-autotable").then(x => {
        const doc = new jsPDF.default(0, 0);
        doc.autoTable(pdfColumns, this.exportDataList);
        if(type=='download'){
          doc.save('students.pdf');
        }else{
          doc.output('dataurlnewwindow'); 
        }
       
      })
    })
  }
  generatePdfMakeExample1(type:string){
    this.PdfmakeService.generatePdfMakeExample1(type);
  }
  generatePdfMakeExample2(type:string){
    this.PdfmakeService.generatePdfMakeExample2(type);
  }

  

















  getsamplecodes() {
    this.codes.install_jspdf = `npm install jspdf jspdf-autotable`;
    this.codes.jspdf_component_html = 
`<div class="card">
    <div class="card-header">
        Export PDF in Angular with JSPDF
    </div>
    <div class="card-body">
        <div class=" text-right">
            <button  class="btn btn-success btn-sm m-2" (click)="exportPdf('open')">Open PDF</button>
            <button  class="btn btn-danger btn-sm m-2" (click)="exportPdf('download')">Download PDF</button>
         </div>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Sl No.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Date of Birth</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let std of studentsList; let i = index;">
                    <td>{{i+1}}</td>
                    <td>{{std.name}}</td>
                    <td>{{std.email}}</td>
                    <td>{{std.mobile}}</td>
                    <td>{{std.dob}}</td>
                </tr>
            </tbody>
        </table>
    </div>
 </div>`;
    this.codes.jspdf_component_ts = 
`import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-angular-export',
    templateUrl: './angular-export.component.html',
    styleUrls: ['./angular-export.component.scss']
  })

  export class AngularExportComponent implements OnInit {
    exportDataList: any[];
    studentsList= [
      {
        "id": 1,
        "name": "Jamsheer",
        "email": "jamsheer@mail.com",
        "mobile": 8592947647,
        "dob": "29/06/12"
      },
      {
        "id": 1,
        "name": "suhail",
        "email": "suhail@mail.com",
        "mobile": 8592947647,
        "dob": "29/06/12"
      }
    ]
    constructor() { }
    ngOnInit() { }
    
    exportPdf(type) {
      this.exportDataList = [];
      this.studentsList.forEach((element, index) => {
        this.exportDataList.push([
            index + 1,
            element.name,
            element.email,
            element.mobile,
            element.dob,
          ]);
      });
      let pdfColumns = ["Sl No", "Name", "Email", "Mobile", "Date Of Birth"];
      import("jspdf").then(jsPDF => {
        import("jspdf-autotable").then(x => {
          const doc = new jsPDF.default(0, 0);
          doc.autoTable(pdfColumns, this.exportDataList);
          if(type=='download'){
            doc.save('students.pdf');
          }else{
            doc.output('dataurlnewwindow'); 
          }
        })
      })
    }
  `;
  this.codes.install_pdfmake = `npm install pdfmake --save`;
  this.codes.pdfmake_singleline_html = `
<div class="text-right">
  <button class="btn btn-success btn-sm m-2" (click)="generatePDF('open')">Open PDF</button>
  <button class="btn btn-danger btn-sm m-2" (click)="generatePDF('download')">Download PDF</button>
</div>
`;
  this.codes.pdfmake_singleline_ts = `
import { Component, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-angular-export',
  templateUrl: './angular-export.component.html',
  styleUrls: ['./angular-export.component.scss']
})

export class AngularExportComponent implements OnInit {

  constructor() { }
  ngOnInit() { }
  
  generatePDF(type){
    const documentDefinition = { content: 'This is for testing.' };
    if(type=='download'){
      pdfMake.createPdf(documentDefinition).download();
    }else{
      pdfMake.createPdf(documentDefinition).open();
    }
  }
  `;
  this.codes.pdfmake_dynamic_html = `
<div class="text-right">
  <button class="btn btn-success btn-sm m-2" (click)="generatePDF(action='open')">Open PDF</button>
  <button class="btn btn-danger btn-sm m-2" (click)="generatePDF(action='download')">Download PDF</button>
</div>
  `;
  this.codes.pdfmake_dynamic_ts = `
import { Component, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-angular-export',
  templateUrl: './angular-export.component.html',
  styleUrls: ['./angular-export.component.scss']
})

export class AngularExportComponent implements OnInit {
  profile: any = {
    "firstname": "muhammed",
    "lastname": "Jamsheer",
    "email": "jamsheer@mail.com",
    "username": "jamsheer ptb",
  }

  constructor() { }
  ngOnInit() { }
  
  generatePDF(action = 'open') {
    const documentDefinition = this.getDocumentDefinition();
    switch (action) {
      case 'open': pdfMake.createPdf(documentDefinition).open();
        break;
      case 'print': pdfMake.createPdf(documentDefinition).print();
        break;
      case 'download': pdfMake.createPdf(documentDefinition).download();
        break;
      default: pdfMake.createPdf(documentDefinition).open();
        break;
    }
  }
  getDocumentDefinition() {
    return {
      content: [
        {
          text: 'PROFILE',
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20]
        },
        {
          columns: [
            [{
              text: 'Firstname : ' + this.profile.firstname
            },
            {
              text: 'Lastname : ' + this.profile.lastname
            },
            {
              text: 'Username : ' + this.profile.username
            },
            {
              text: 'Email : ' + this.profile.email
            }]
          ]
        }],
      styles: {
        name: {
          fontSize: 16,
          bold: true
        }
      }
    };
  }
}
  `;
}
}
