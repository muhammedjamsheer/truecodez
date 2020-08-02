import { Injectable } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Injectable({
  providedIn: 'root'
})
export class PdfmakeService {
  profile: any = {
    "firstname": "muhammed",
    "lastname": "Jamsheer",
    "email": "jamsheer@mail.com",
    "username": "jamsheer ptb",
  }
  constructor() { }
  generatePdfMakeExample1(type){
    const documentDefinition = { content: 'This is for testing.' };
    if(type=='download'){
      pdfMake.createPdf(documentDefinition).download();
    }else{
      pdfMake.createPdf(documentDefinition).open();
    }
  }

  generatePdfMakeExample2(action = 'open') {
    const documentDefinition = this.getDocumentDefinition();
    switch (action) {
      case 'open': pdfMake.createPdf(documentDefinition).open();
        break;
      case 'print': pdfMake.createPdf(documentDefinition).print();
        break;
      case 'download':
        pdfMake.createPdf(documentDefinition).download();
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
