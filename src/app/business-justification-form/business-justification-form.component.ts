import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';



@Component({
  selector: 'app-business-justification-form',
  templateUrl: './business-justification-form.component.html',
  styleUrls: ['./business-justification-form.component.css']
})
export class BusinessJustificationFormComponent {
  formData:any;
  formStatus:string="";
  businessJustificationForm= new FormGroup({
    urgencyCause: new FormControl(''),
    impactIfDeployed: new FormControl(''),
    isTested: new FormControl(''),
    whoTested: new FormControl(''),
    rollBackPlan: new FormControl(''),
    impactIfNotDeployed: new FormControl('')
  })

  onBusinessJustificationsSubmit(myDialog: any){
    console.log(this.businessJustificationForm.value);
    this.formData=this.businessJustificationForm.value;    
    this.formStatus="Business Justification saved successfully"
    myDialog.showModal();
    this.businessJustificationForm.reset();
  }

  
  ngOnInit(){
    this.formData=this.businessJustificationForm.value
    console.log(this.formData)
  }

  autoFill(){
    this.businessJustificationForm= new FormGroup({
      urgencyCause: new FormControl('This prod roll-out brings the required remediations which will get rid of those possible security flaws.'),
      impactIfDeployed: new FormControl('No outage anticipated for existing customers'),
      isTested: new FormControl('Tested in NPE by developers and NPE support. Artifacts are attached to the CR.Testers will be available for validations post deployment.'),
      whoTested: new FormControl('Consumers'),
      rollBackPlan: new FormControl('Rollback plan includes deploy the previous version. Rollback takes < 10 mins to implement.'),
      impactIfNotDeployed: new FormControl('No impact to the front-line users. However, SAST vulnerability issue will reappear in the next scan report.')
    })
  }

  clearForm(){
    this.businessJustificationForm.reset();
  }
}
