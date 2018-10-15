import {NgModule} from "@angular/core"
import {LoginFormComponent} from "./login-form.component"
import {ReactiveFormsModule} from "@angular/forms"
import {FormsModule} from "@angular/forms"

@NgModule({
    declarations: [LoginFormComponent],
    imports:[ReactiveFormsModule, FormsModule]
})

export class LoginFormModule{
    
}