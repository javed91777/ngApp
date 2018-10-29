import {NgModule} from "@angular/core"
import {Routes, RouterModule} from "@angular/router"
import {OrdersRouterModule} from "./orders/ordersroutes.module"
import {CustomersRouterModule} from "./customers/customersroutes.module"
import {CommonModule} from "@angular/common"
import {LoginFormModule} from "./forms/login-form/login-form.module"
import {LoginFormComponent} from "./forms/login-form/login-form.component"
import {AuthGuard} from "./core/services/AuthGuard"
import {RestTestComponent} from "./core/services/RestTest.component"

const routes:Routes =[
    {path:'login', component: LoginFormComponent},
    {path:'customers', loadChildren:"./customers/customers.module#CustomersModule", canActivate: [AuthGuard]},
    {path:'orders', loadChildren:"./orders/orders.module#OrdersModule", canActivate: [AuthGuard]},
    {path:'restTest', canActivate: [AuthGuard], component: RestTestComponent},        
    {path:'', redirectTo:'login', pathMatch:'full'}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class RouteModule{

}