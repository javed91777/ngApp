import {NgModule} from "@angular/core"
import {OrdersComponent} from "./orders.component"
import {RouterModule} from "@angular/router"


const orderroutes = [
    {path: '', component: OrdersComponent}
]

@NgModule({
    declarations: [OrdersComponent],
    imports: [RouterModule.forChild(orderroutes)],
    exports: [RouterModule]
})

export class OrdersRouterModule{

}