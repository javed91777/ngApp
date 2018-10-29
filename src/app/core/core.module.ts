import {NgModule} from "@angular/core"
import {MenuComponent} from "./menu.component"
import {RouterModule} from "@angular/router"
import {AuthGuard} from "./services/AuthGuard"
import {CommonModule} from "@angular/common"
import {RestTestComponent} from "./services/RestTest.component"

@NgModule({
    imports: [RouterModule, CommonModule],
    declarations: [MenuComponent, RestTestComponent],
    exports: [MenuComponent, RestTestComponent]
})

export class CoreModule{

}