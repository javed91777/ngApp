import { CustomersCardViewComponent } from "./customerscardview.component";
import { CustomersComponent } from "./customers.component";
import { CustomersListViewComponent } from "./customerslistview.component";
import {NgModule} from "@angular/core"
import {RouterModule}  from "@angular/router"
import {CommonModule} from "@angular/common"
import {SharedModule} from "../shared/sharedmodule"

const custroutes = [
    {   path:'', component:CustomersComponent,
        children: [
            {path:'cardView', component: CustomersCardViewComponent},
            {path: 'listView', component: CustomersListViewComponent},
            {path: '', component:CustomersCardViewComponent}
        ]
    }
]

@NgModule({
    declarations: [CustomersComponent, CustomersCardViewComponent, CustomersListViewComponent],
    imports: [CommonModule, SharedModule, RouterModule.forChild(custroutes)],
    exports: [RouterModule]

})
export class CustomersRouterModule{
    
}