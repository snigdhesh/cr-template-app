import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { IQuestionAnswer } from '../models/IQuestionAnswer';
import { basicInfoData } from '../data/basicInfoData';

@Component({
  selector: 'app-basic-info-form',
  templateUrl: './basic-info-form.component.html',
  styleUrls: ['./basic-info-form.component.css']
})
export class BasicInfoFormComponent {
  formStatus: string="";
  formData:any;
  questionAndSampleAnswers:IQuestionAnswer[]=[];
  copyBtnText="copy";

  basicInfoForm = new FormGroup({
    feature: new FormControl(''),
    featureDocumentation: new FormControl(''),
    applicationName: new FormControl(''),
    gitRepo: new FormControl(''),
    gitBranch: new FormControl(''),
    mergeRequest: new FormControl(''),
    sis: new FormControl('')
  })

  ngOnInit(){
    this.formData=this.basicInfoForm.value;
    this.questionAndSampleAnswers=basicInfoData;
  }

  onBasicInfoSubmit(myDialog:any){
    this.formData=this.basicInfoForm.value;    
    this.formStatus="Basic information saved successfully.\n\nPlease fill Business Justifications"
    myDialog.showModal();
    this.basicInfoForm.reset();
  }

  autoFill(){
    this.questionAndSampleAnswers.forEach((item: IQuestionAnswer)=>{
      this.basicInfoForm.get(item.attribute)?.setValue(item.sampleAnswer);
    })
    // this.basicInfoForm = new FormGroup({
    //   feature: new FormControl('test'),
    //   featureDocumentation: new FormControl('https://gitlab.com'),
    //   applicationName: new FormControl('test-app'),
    //   gitRepo: new FormControl('gitlab.com/test-app'),
    //   gitBranch: new FormControl('main'),
    //   mergeRequest: new FormControl('gitlab.com/test-app/mr/01'),
    //   sis: new FormControl("Merge > Deploy > Validate > Close CR")
    // })
  }

  clearForm(){
    this.basicInfoForm.reset();
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
