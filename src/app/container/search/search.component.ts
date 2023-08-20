import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  // example of two-way data binding using ngModel, which is import through FormsModule from @angular/forms in app.modules.ts
  searchText: string = ""

  @Output() searchTextEvent: EventEmitter<string> = new EventEmitter<string>();
  
  // example of on-way data binding using event binding
  updateSearchParameter(event: any){
    this.searchText = event.target.value;
  }

  onSerachTextChange(){
    this.searchTextEvent.emit(this.searchText);
  }
}
