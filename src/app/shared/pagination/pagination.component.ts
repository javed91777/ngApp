import {Component, Output, EventEmitter} from "@angular/core"

@Component({
    selector: 'app-pagination',
    templateUrl: 'pagination.component.html'
})

export class PaginationComponent{
    data = [1,2,3];
    @Output() sendInfo = new EventEmitter();

    onclick(val){
        console.log(val);
        this.sendInfo.emit(val);
    }
    
}
