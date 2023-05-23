import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ChangeRequestComponentComponent } from "./change-request-component/change-request-component.component";

const appRoute: Routes =[
    {path:'',component: ChangeRequestComponentComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoute)
    ],
    exports: []
})
export class AppRoutingModule{}