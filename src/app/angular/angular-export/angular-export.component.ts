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
  generatePdfMakeExample3(type:string){
    this.PdfmakeService.generatePdfMakeExample3(type);
  }
  generatePdfMakeExample4(type:string){
    this.PdfmakeService.generatePdfMakeExample4(type);
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
  this.codes.pdfmake_HEADER_html = `
<div class="text-right">
  <button class="btn btn-success btn-sm m-2" (click)="generatePDF('open')">Open PDF</button>
  <button class="btn btn-danger btn-sm m-2" (click)="generatePDF('download')">Download PDF</button>
</div>
  `;
  this.codes.pdfmake_HEADER_ts = `
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

    generatePDF(data) {
      var pdf = {
        pageMargins: [40, 140, 40, 60],
        header: function (currentPage, pageCount, pageSize) {
          return [
            { image: 'building', height: 90, width: 515, margin: [0, 20, 0, 0], alignment: 'center' },
            {
              text: 'QUOTATION FOR CUSTOMS CLEARANCE IMPORT',
              alignment: 'center',
              fontSize: 13,
              bold: true,
              margin: [0, 0, 0, 5],
            },
            {
              text: "Page " + currentPage.toString() + ' of ' + pageCount,
              fontSize: 8,
              alignment: 'right',
              margin: [0, 0, 40, 0]
  
            },
          ]
        },
        content: [
          {
            text: "dummy text1",
            marginBottom: 185,
            style: 'boldText',
          },
          {
            text: "dummy text2",
            marginBottom: 65,
            style: 'boldText',
          },
          { text: 'Text', pageBreak: 'after' },
          { text: 'Text', pageBreak: 'after' },
          { text: 'Text', pageBreak: 'after' },
        ],
        footer: [
          {
            margin: [40, 0, 40, 10],
            canvas:
              [
                {
                  type: 'line',
                  x1: 0, y1: 10,
                  x2: 515, y2: 10,
                  lineWidth: 0.5,
                  lineColor: '#3c4045',
                },
              ]
          },
          {
            image: await this.getBase64ImageFromURL("../../../assets/images/quotation3.png"),
            width: 515,
            height: 30,
            alignment: 'center',
          },
        ],
        images: {
          building: await this.getBase64ImageFromURL("../../../assets/images/quotation.png"),
        },
        styles:
        {
          boldText: {
            fontSize: 8,
            bold: true
          },
          normalText: {
            fontSize: 8,
          },
        },
        info: {
          title: 'student.pdf',
        },
      }
  
      if (data == 'download') {
        pdfMake.createPdf(pdf).download();
      }
      else {
        pdfMake.createPdf(pdf).open();
      }
    }

    getBase64ImageFromURL(url) {
      return new Promise((resolve, reject) => {
        var img = new Image();
        img.setAttribute("crossOrigin", "anonymous");
        img.onload = () => {
          var canvas = document.createElement("canvas");
          canvas.width = img.width;
          canvas.height = img.height;
          var ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0);
          var dataURL = canvas.toDataURL("image/png");
          resolve(dataURL);
        };
        img.onerror = error => {
          reject(error);
        };
        img.src = url;
      });
    }
  }
  `;

  this.codes.pdfmake_table_ts = `
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

    students: any = [
      { name: "jamsheer", email: "jamsheer@mail.com", mobile: "8592947647", gender: "male" },
      { name: "suhail", email: "suhail@mail.com", mobile: "8592947647", gender: "male" },
      { name: "pranav", email: "pranav@mail.com", mobile: "8592947647", gender: "male" }
    ]

    constructor() { }
    ngOnInit() { }

    generatePDF(data) {
    var pdf = {
      content: [
        {
          columns: [
            this.getcustomerdataleft(),
            this.getcustomerdataright(),
          ],
          columnGap: 50
        },
        {
          margin: [0, 10, 0, 0],
          columns: [
            { width: 70, text: "Name", style: 'boldText', },
            { width: 10, text: ':', style: 'boldText', },
            { width: 200, text: "Muhammed", style: 'normalText', },
            { width: 80, text: "Email", style: 'boldText', },
            { width: 10, text: ':', style: 'boldText', },
            { width: 100, text: "Muhammed@mail.com", style: 'normalText', },
          ],
        },
        {
          margin: [0, 10, 0, 0],
          columns: [
            { width: 70, text: "Name", style: 'boldText', },
            { width: 10, text: ':', style: 'boldText', },
            { width: 200, text: "Muhammed", style: 'normalText', },
            { width: 80, text: "Email", style: 'boldText', },
            { width: 10, text: ':', style: 'boldText', },
            { width: 100, text: "Muhammed@mail.com", style: 'normalText', },
          ],
        },
        {
          text: '',
          margin: [0, 10, 0, 0],
        },
        this.getHorizontalLine(),
        {
          text: "Header Text",
          alignment: 'center',
          fontSize: 11,
          bold: true,
          margin: [0, 8, 0, 0],
        },
        this.getHorizontalLine(),
        this.getSectorTable(),
      ],
      styles:
      {
        boldText: {
          fontSize: 8,
          bold: true
        },
        normalText: {
          fontSize: 8,
        },

        header:
        {
          fontSize: 12,
          bold: true,
          margin: [0, 10, 0, 10],
          alignment: 'center'
        },
        table: {
          fontSize: 8,
        },
        tableHeader:
        {
          color: '#000',
          fontSize: 9,
          bold: true,
          decoration: 'underline',
          margin: [0, 10, 0, 0],
        },
      },
      info: {
        title: 'students',
      },
    }
    if (data == 'download') {
      pdfMake.createPdf(pdf).download();
    }
    else {
      pdfMake.createPdf(pdf).open();
    }
  }

  getcustomerdataleft() {
    return {
      table: {
        widths: [250],
        alignment: 'left',
        body: [
          [{
            margin: 5,
            columns: [
              [
                {
                  columns: [
                    { width: 245, text: "Muhammed Jamsheer", style: 'boldText', },
                  ],
                  columnGap: 10
                },
                {
                  columns: [
                    { width: 50, text: "Email", style: 'boldText', },
                    { width: 5, text: ':', style: 'boldText', },
                    { width: 185, text: "Jamsheer@mail.com", style: 'normalText', },
                  ],
                  columnGap: 10
                },
                {
                  columns: [
                    { width: 50, text: "Mobile", style: 'boldText', },
                    { width: 5, text: ':', style: 'boldText', },
                    { width: 185, text: "8592947647", style: 'normalText', },
                  ],
                  columnGap: 10
                },
                {
                  columns: [

                    { width: 50, text: "Address", style: 'boldText', },
                    { width: 5, text: ':', style: 'boldText', },
                    { width: 185, text: "Pattambi", style: 'normalText', },
                  ],
                  columnGap: 10
                },
                {
                  columns: [
                    { width: 50, text: "Gender", style: 'boldText', },
                    { width: 5, text: ':', style: 'boldText', },
                    { width: 185, text: "Male", style: 'normalText', },
                  ],
                  columnGap: 10
                },
              ],
            ]
          },
          ]
        ]
      },
      layout: {
        hLineColor: '#b0abab',
        vLineColor: '#b0abab'
      }
    };
  }
  getcustomerdataright() {
    return {
      table: {
        widths: [200],
        alignment: 'right',
        body: [
          [{
            margin: 5,
            lineHeight: 1.5,
            columns: [
              [
                {
                  columns: [
                    { width: 60, text: "College", style: 'boldText', },
                    { width: 5, text: ':', style: 'boldText' },
                    { width: 110, text: "IESCE", style: 'normalText', },
                  ],
                  columnGap: 10
                },
                {
                  columns: [
                    { width: 60, text: "Department", style: 'boldText', },
                    { width: 5, text: ':', style: 'boldText', },
                    { width: 110, text: "ECE", style: 'normalText', },
                  ],
                  columnGap: 10
                },
                {
                  columns: [
                    { width: 60, text: "DOB", style: 'boldText', },
                    { width: 5, text: ':', style: 'boldText', },
                    { width: 110, text: new Date(), style: 'normalText', },
                  ],
                  columnGap: 10
                },
              ],
            ]
          },

          ]
        ]
      },
      layout: {
        hLineColor: '#b0abab',
        vLineColor: '#b0abab'
      },
    };
  }
  getHorizontalLine() {
    return {
      canvas:
        [
          {
            type: 'line',
            x1: 0, y1: 10,
            x2: 515, y2: 10,
            lineWidth: 0.5,
            lineColor: '#3c4045',
          },
        ]
    };
  }
  getSectorTable() {
    return {
      layout: 'noBorders', // optional
      style: 'table',
      table: {
        headerRows: 1,
        margin: [10, 20, 0, 20],
        widths: [125, 70, 70, 70, 70, 70],
        style: 'table',
        body: [
          [{
            text: "Name",
            alignment: 'left',
            style: 'tableHeader'
          },
          {
            text: "Email",
            style: 'tableHeader',
            alignment: 'left'
          },
          {
            text: "Mobile",
            style: 'tableHeader',
            alignment: 'right'
          },
          {
            text: "Gender",
            style: 'tableHeader',
            alignment: 'right'
          },

          ],

          ...this.students.map(item => {
            return [
              { text: item.name, alignment: 'left' },
              { text: item.email, alignment: 'left' },
              { text: item.mobile, alignment: 'right' },
              { text: item.gender, alignment: 'right' },
            ];
          }),
        ],
      }
    };
  }
  `;
}
}
