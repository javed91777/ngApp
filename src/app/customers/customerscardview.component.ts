import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-customerscardview',
    templateUrl: 'customerscardview.component.html'
})
export class CustomersCardViewComponent {
     @Input() custData;
}