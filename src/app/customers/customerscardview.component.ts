import { Component, Input, OnChanges } from "@angular/core";

@Component({
    selector: 'app-customerscardview',
    templateUrl: 'customerscardview.component.html'
    
})
export class CustomersCardViewComponent implements OnChanges{
     @Input() custData;
     @Input() currentPageNumber;
     currentData = [];
     numOfCustomersPerPage:number=10;
     custIndex;
     custLastIndex:number;
     gender;
     maleGenderImagePath= "../assets/images/male.jpg";
     femaleGenderImagePath="../assets/images/female.png";

     ngOnChanges(){
         console.log(this.custData);

         if(this.currentPageNumber!=undefined && this.currentPageNumber!=0){
             
            if(this.currentPageNumber==1){
                this.custIndex = 0;
                this.custLastIndex = this.numOfCustomersPerPage-1;
            }
            else{
                this.custIndex = ((this.currentPageNumber-1) * this.numOfCustomersPerPage);
                
                console.log("curr", this.currentPageNumber);
                if(this.custData.length/this.currentPageNumber>=10){                
                   this.custLastIndex = (this.currentPageNumber*this.numOfCustomersPerPage)-1;
                   console.log("If block ", this.custLastIndex);
                }
                else{
                    console.log(this.custData.length % this.numOfCustomersPerPage);                
                    this.custLastIndex = ((this.currentPageNumber-1)*this.numOfCustomersPerPage)+(this.custData.length % this.numOfCustomersPerPage)-1;
                    console.log("Else block ", this.custLastIndex);
                }
            }             
         }
         else{
             console.log("current page number in else block ", this.currentPageNumber);
                this.custIndex = 0;
                this.custLastIndex = this.numOfCustomersPerPage-1;
         }

        if(this.custData!=undefined){
            console.log("req custIndex ", this.custIndex);
            console.log("req custLastIndex ", this.custLastIndex);
            this.currentData = [];
            for(var i=this.custIndex; i<=this.custLastIndex; i++){
                this.currentData.push(this.custData[i]);
                //this.setGenderImage(this.custData[i].gender);
            }
            console.log("data to be displayed ", this.currentData);
        }
     }

}