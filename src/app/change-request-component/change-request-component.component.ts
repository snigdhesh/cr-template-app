import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { businessJustificationData } from '../data/businessJustificationData';
import { businessJustificationData2 } from '../data/businessJustificationData2';

@Component({
  selector: 'app-change-request-component',
  templateUrl: './change-request-component.component.html',
  styleUrls: [
    './change-request-component.component.css'
  ]
})
export class ChangeRequestComponentComponent {
  formData: any = {}; // Initialize an empty object to store form data
  basicInfoElement: any;
  businessJustificationsElement: any;
  businessJustificationData1: any;
  businessJustificationData2: any;

  ngOnInit() {
    this.basicInfoElement = document.getElementById('basicInfoPDFContent');
    this.businessJustificationsElement=document.getElementById('businessJustificationsPDFContent');
    this.businessJustificationData1=businessJustificationData;
    this.businessJustificationData2=businessJustificationData2;
  }

  onBasicInfoSubmit() {
    console.log(this.formData);

    // Set initial y position for the text
    let y = 40;

    const pdf = new jsPDF();
    this.setPDFTitle(pdf, 'Basic info - Change Request form');

    this.setPDFContent(pdf,y);

    html2canvas(this.basicInfoElement).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      //pdf.addImage(imgData, 'PNG', 10, 10, 190, 280);
      pdf.save('basicInfo.pdf');
    });
    this.formData={};
  }

  onBusinessJustificationsSubmit() {
    console.log(this.formData);

    // Set initial y position for the text
    let y = 40;

    const pdf2 = new jsPDF();
    this.setPDFTitle(pdf2, 'Business Justification - Change Request form');

    this.setPDFContent(pdf2,y);

    html2canvas(this.businessJustificationsElement).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      //pdf.addImage(imgData, 'PNG', 10, 10, 190, 280);
      pdf2.save('businessJustifications.pdf');
    });

    this.formData={};

  }



  setPDFTitle(pdf: jsPDF, title: string) {
    // Set title font size and style
    pdf.setFontSize(20);
    pdf.setFont('helvetica', 'bold');

    //Set title text color
    pdf.setTextColor(219, 0, 91);

    // Add title to the PDF
    pdf.text(title, 20, 20);

    //Set default color, once title is set.
    pdf.setTextColor(0, 0, 0,);

    // Reset font size and style for the form data
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'normal');

  }

  setPDFContent(pdf: jsPDF,y: number) {
    // Loop through form data and add it to the PDF
    for (const key in this.formData) {
      if (this.formData.hasOwnProperty(key)) {
        const value = this.formData[key];

        //const text = `${key}:\n${value}`;        
        //pdf.text(text,20,y);

        // Set fill color for the key text
        pdf.setTextColor(219, 0, 91); // Red color (RGB: 255, 0, 0)

        //Add key to the PDF
        pdf.text(this.checkConditions(key), 20, y);

        // Reset fill color
        pdf.setTextColor(0, 0, 0); // Reset to default color (black)

        // Increment y position for the next line (for the value)
        y += 8;

        // Add value to the PDF
        pdf.text(value, 20, y);

        // Increment y position for the next line
        y += 20;

        this.resetPage(pdf,y);
      }
    }
  }

  checkConditions(key: string){
    if(key=='urgencyCause')
      key="Why is this Change needed and why can’t it be delayed until after the Freeze period ends?"
    else if(key=='impactIfDeployed')
      key="What is the anticipated impact of this Change during the Planned Deployment Window?"
    else if(key=='isTested')
      key="Has the Change been tested, and will Testers be available during and after CR implementation?"
    else if(key=='whoTested')
      key="Who's testing this application post deployment?"
    else if(key=='rollBackPlan')
      key="Is there a tested Rollback Plan and how long does the Rollback takes to implement?"
    else if(key=='impactIfNotDeployed')
      key="What is the potential impact of this Change if it does not go as planned?"
    //basic info
    else if(key=='sis')
      key="SIS plan"
    
    return key;
  }


  resetPage(pdf:jsPDF,y:number){
    // Check if the content exceeds the available space on the first page
    if (y >= 280) {
     // Add a new page
     pdf.addPage();

     // Reset y position for the second page
     y = 20;

     // Set title font size for the second page
     pdf.setFontSize(20);

     // Add title to the second page
     pdf.text('Continued ..', 20, y);

     // Reset font size for the second page
     pdf.setFontSize(12);
   }
 }
}
