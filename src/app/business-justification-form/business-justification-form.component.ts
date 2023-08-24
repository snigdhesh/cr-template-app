import { Component, Input } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { IQuestionAnswer } from '../models/IQuestionAnswer';
import { businessJustificationData } from '../data/businessJustificationData';

@Component({
  selector: 'app-business-justification-form',
  templateUrl: './business-justification-form.component.html',
  styleUrls: ['./business-justification-form.component.css']
})
export class BusinessJustificationFormComponent {
  formData:any;
  formStatus:string="";
  questionAndSampleAnswers:IQuestionAnswer[]=[];
  copyBtnText="copy";
  @Input() data: IQuestionAnswer[]=[]; //This "data" will be given as input from ChangeRequestComponent

  //Left this for reference: This is how to create static formGroup.
  /*businessJustificationForm= new FormGroup({
    urgencyCause: new FormControl(''),
    impactIfDeployed: new FormControl(''),
    isTested: new FormControl(''),
    whoTested: new FormControl(''),
    rollBackPlan: new FormControl(''),
    impactIfNotDeployed: new FormControl('')
  })*/
  businessJustificationForm: any;

  ngOnInit(){
    this.businessJustificationForm=this.toFormGroup(this.data); //This is how to create dynamic formGroup.
    this.formData=this.businessJustificationForm.value;
    this.questionAndSampleAnswers=this.data;
  }
  
  toFormGroup(data:any){
    const group: any ={};
    data.forEach((item:IQuestionAnswer)=>{
      group[item.attribute] = new FormControl('');
    });
    return new FormGroup(group);
  }

  onBusinessJustificationsSubmit(myDialog: any){
    this.formData=this.businessJustificationForm.value;
    this.formStatus="Business Justification saved successfully";
    myDialog.showModal();
    this.businessJustificationForm.reset();
  }



  autoFill(){
    this.questionAndSampleAnswers.forEach((item: IQuestionAnswer)=>{
      this.businessJustificationForm.get(item.attribute)?.setValue(item.sampleAnswer);
    })

    //Left this for reference: This is another way we can set values for a form.
    /* this.businessJustificationForm= new FormGroup({
       urgencyCause: new FormControl('This prod roll-out brings the required remediations which will get rid of those possible security flaws.'),
       impactIfDeployed: new FormControl('No outage anticipated for existing customers'),
       isTested: new FormControl('Tested in NPE by developers and NPE support. Artifacts are attached to the CR.Testers will be available for validations post deployment.'),
       whoTested: new FormControl('Consumers'),
       rollBackPlan: new FormControl('Rollback plan includes deploy the previous version. Rollback takes < 10 mins to implement.'),
       impactIfNotDeployed: new FormControl('No impact to the front-line users. However, SAST vulnerability issue will reappear in the next scan report.')
     })*/
  }

  clearForm(){
    this.businessJustificationForm.reset();
  }
  copy(){
    var finalString:string="";

    this.questionAndSampleAnswers.forEach((item:IQuestionAnswer)=>{
       finalString=finalString.concat(this.getQA(item.question,this.formData[item.attribute])).concat("\n\n");
    })

    navigator.clipboard.writeText(finalString).then(()=>{
      console.log("text copied to clipboard");
    })
    .catch((error) => {
      console.error('Failed to copy text to clipboard:', error);
    });

    this.resetCopyButton();
  }

  getQA(question:string, answer: string){
    return question.concat("\n").concat(answer);
  }

  resetCopyButton(){    
    this.copyBtnText="Copied to clipboard";
    
    setTimeout(()=>{
      this.copyBtnText="copy"
    },2000);
  }

}

