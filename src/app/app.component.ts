import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

// ngOnIniti => called by Angular to indicate that its done creating this component
// We use it like this as its good practise if we use the ngOnInit() method
export class AppComponent implements OnInit {
  // ViewChild allows us to inject into a component class references to elements used inside its template
  @ViewChild('agGrid')
  // Assign this instance to agGrid API we imported
  agGrid: AgGridAngular;

  title = 'my-grid-app';

  // Configuring properties of the grid
  // -> column definitions
  // -> each column entry has header label + data field
  // -> the data (rowData)

  // Want to enable sorting based on price of the car: have to set the sortable property in each column we want to be able to sort by
  // -> sort the grid by clicking on col headers

  // Want to enable filtering using the filter property
  // -> the grid will display a small column menu icon when you hover the header -> pressing displays a popup with a filtering UI which lets you choose the kind of filter and the text that you want to filter by

  // Allow the user to select a certain rows (under the make column) from the grid with checkboxSelection property -> when user checks the make field it selects that row


  // columnDefs = [
  //   { field: 'make', sortable: true, filter: true, checkboxSelection: true },
  //   { field: 'model', sortable: true, filter: true },
  //   { field: 'price', sortable: true, filter: true },
  // ];

  // With grouping --> 
  // -> Grid groups the data by MAKE, while listing the model field value when expanded
  defaultColDef = {
    sortable: true,
    filter: true
  };
  
  columnDefs = [
    { field: 'make', rowGroup: true },
    { field: 'price' }
  ];
  
  // The col that shows up -> have to expand to get the above colDefs
  autoGroupColumnDef = {
    headerName: 'Model',
    field: 'model',
    cellRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
        checkbox: true
    }
};




  // We dont know the type yet of the data from server
  rowData: any;

  // constructor is called before the ngOnInit()
  // good for setting up dependency injection
  constructor(private http: HttpClient) {}

  ngOnInit() {
    // rowData is now an Observable
    // So to get our grid template to work in our html file => in that file we need to use the async pipe so it can subscribe to this observable
    this.rowData = this.http.get(
      'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/rowData.json'
    );
  }

  // getSelectedRows method

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map((node) => node.data);
    const selectedDataStringPresentation = selectedData
      .map((node) => node.make + ' ' + node.model)
      .join(', ');

    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }
}
