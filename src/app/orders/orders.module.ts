import {NgModule} from "@angular/core"
import {CommonModule} from "@angular/common"
import {OrdersRouterModule} from "./ordersroutes.module"

@NgModule({
    imports:[CommonModule,OrdersRouterModule]
})
export class OrdersModule{

}