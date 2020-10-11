import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

// ngOnIniti => called by Angular to indicate that its done creating this component
// We use it like this as its good practise if we use the ngOnInit() method
export class AppComponent implements OnInit {
  title = 'my-grid-app';

  // Configuring properties of the grid
  // -> column definitions
  // -> each column entry has header label + data field
  // -> the data (rowData)

  // Want to enable sorting based on price of the car: have to set the sortable property in each column we want to be able to sort by
  // -> sort the grid by clicking on col headers

  // Want to enable filtering using the filter property
  // -> the grid will display a small column menu icon when you hover the header -> pressing displays a popup with a filtering UI which lets you choose the kind of filter and the text that you want to filter by

  columnDefs = [
    { field: 'make', sortable: true, filter: true },
    { field: 'model', sortable: true, filter: true },
    { field: 'price', sortable: true, filter: true },
  ];

  // Hard-coded data:
  // rowData = [
  //   { make: 'Toyota', model: 'Celica', price: 35000 },
  //   { make: 'Ford', model: 'Mondeo', price: 32000 },
  //   { make: 'Porsche', model: 'Boxter', price: 72000 },
  // ];

  // We dont know the type yet of the data from server
  rowData: any;

  // constructor is called before the ngOnInit()
  // good for setting up dependency injection
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.rowData = this.http.get(
      'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/smallRowData.json'
    );
  }
}
