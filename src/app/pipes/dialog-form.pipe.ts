import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dialogForm'
})
export class DialogFormPipe implements PipeTransform {

  transform(formData: any, attribute: any, ...args: unknown[]): unknown {
    return formData[attribute];
  }

}
