import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-basic-info-form',
  templateUrl: './basic-info-form.component.html',
  styleUrls: ['./basic-info-form.component.css']
})
export class BasicInfoFormComponent {
  formStatus: string="";
  formData:any;

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
    this.formData=this.basicInfoForm.value
    console.log(this.formData)
  }
  onBasicInfoSubmit(myDialog:any){
    console.log(this.basicInfoForm.value)
    this.formData=this.basicInfoForm.value;    
    this.formStatus="Basic information saved successfully.\n\nPlease fill Business Justifications"
    myDialog.showModal();
    this.basicInfoForm.reset();
  }

  autoFill(){
    this.basicInfoForm = new FormGroup({
      feature: new FormControl('test'),
      featureDocumentation: new FormControl('https://tmobileusa.sharepoint.com/sites/IdentityManagment/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FIdentityManagment%2FShared%20Documents%2FIGA%2FIGA%20Projects&viewid=5aee59a2%2D5d9a%2D43c3%2D8db4%2Dfd35dbc20ef9'),
      applicationName: new FormControl('test-app'),
      gitRepo: new FormControl('gitlab.com/test-app'),
      gitBranch: new FormControl('main'),
      mergeRequest: new FormControl('gitlab.com/test-app/mr/01'),
      sis: new FormControl("Merge > Deploy > Validate > Close CR")
    })
  }

  clearForm(){
    this.basicInfoForm.reset();
  }
}
