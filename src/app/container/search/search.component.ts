import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string = "Mens wear"
  // example of two-way data binding using ngModel, which is import through FormsModule from @angular/forms in app.modules.ts
  updateSearchParameter(event: any){
    this.searchText = event.target.value;
  }
}
