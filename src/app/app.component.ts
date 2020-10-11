import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-grid-app';

  // Configuring properties of the grid
  // -> column definitions
  // -> each column entry has header label + data field
  // -> the data (rowData)

  // Want to enable sorting based on price of the car: have to set the sortable property in each column we want to be able to sort by
  // -> sort the grid by clicking on col headers

  // Want to enable filtering using the filter property 
  // -> the grid will display a small column menu icon when you hover the header
  
  columnDefs = [
    { field: 'make', sortable: true, filter: true },
    { field: 'model', sortable: true, filter: true },
    { field: 'price', sortable: true, filter: true },
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
  ];
}
