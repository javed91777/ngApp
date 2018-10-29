import {NgModule} from "@angular/core"
import {LoginFormComponent} from "./login-form.component"
import {ReactiveFormsModule} from "@angular/forms"
import {FormsModule} from "@angular/forms"
import {CommonModule} from "@angular/common"

@NgModule({
    declarations: [LoginFormComponent],
    imports:[ReactiveFormsModule, FormsModule, CommonModule]
})

export class LoginFormModule{
    
}