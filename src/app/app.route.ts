import {NgModule} from "@angular/core"
import {Routes, RouterModule} from "@angular/router"
import {OrdersRouterModule} from "./orders/ordersroutes.module"
import {CustomersRouterModule} from "./customers/customersroutes.module"
import {CommonModule} from "@angular/common"
import {LoginFormModule} from "./forms/login-form/login-form.module"
import {LoginFormComponent} from "./forms/login-form/login-form.component"

const routes:Routes =[
    {path:'login', component: LoginFormComponent},
    {path:'customers', loadChildren:"./customers/customers.module#CustomersModule"},
    {path:'orders', loadChildren:"./orders/orders.module#OrdersModule"},    
    {path:'', redirectTo:'login', pathMatch:'full'}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class RouteModule{

}