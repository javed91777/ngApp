import {NgModule} from "@angular/core"
import {OrdersComponent} from "./orders.component"
import {RouterModule} from "@angular/router"
import {CommonModule} from "@angular/common"


const orderroutes = [
    {path: '', component: OrdersComponent}
]

@NgModule({
    declarations: [OrdersComponent],
    imports: [RouterModule.forChild(orderroutes), CommonModule],
    exports: [RouterModule]
})

export class OrdersRouterModule{

}