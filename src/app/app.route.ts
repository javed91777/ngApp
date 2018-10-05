import {NgModule} from "@angular/core"
import {Routes, RouterModule} from "@angular/router"
import {OrdersRouterModule} from "./orders/ordersroutes.module"

const routes:Routes =[
    {path:'customers', loadChildren:"./customers/customers.module#CustomersModule"},
    {path:'orders', loadChildren:"./orders/orders.module#OrdersModule"},
    {path:'', redirectTo:'customers', pathMatch:'full'}
]

@NgModule({
    imports:[RouterModule.forRoot(routes), OrdersRouterModule],
    exports:[RouterModule]
})
export class RouteModule{

}