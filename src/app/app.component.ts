import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  EditService,
  EditSettingsModel,
  GridComponent,
  PageService,
  PageSettingsModel,
} from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [EditService, PageService],
})
export class AppComponent implements OnInit {
  rowDataSelected?: any;
  rowIndex: number = 0;
  cellName?: string;
  cellValue?: string;
  data: Object[] = [
    {
      OrderID: 10248,
      CustomerID: 'VINET',
      EmployeeID: 5,
      OrderDate: '1996-07-04T00:00:00Z',
      Freight: 32.38,
      ShipCountry: 'City1',
    },
    {
      OrderID: 10249,
      CustomerID: 'VINET',
      EmployeeID: 5,
      OrderDate: '1996-07-04T00:00:00Z',
      Freight: 32.38,
      ShipCountry: 'City2',
    },
    {
      OrderID: 10250,
      CustomerID: 'VINET',
      EmployeeID: 5,
      OrderDate: '1996-07-04T00:00:00Z',
      Freight: 32.38,
      ShipCountry: 'City3',
    },
    {
      OrderID: 10251,
      CustomerID: 'VINET',
      EmployeeID: 5,
      OrderDate: '1996-07-04T00:00:00Z',
      Freight: 32.38,
      ShipCountry: 'City4',
    },
    {
      OrderID: 10252,
      CustomerID: 'VINET',
      EmployeeID: 5,
      OrderDate: '1996-07-04T00:00:00Z',
      Freight: 32.38,
      ShipCountry: 'City5',
    },
    {
      OrderID: 10253,
      CustomerID: 'VINET',
      EmployeeID: 5,
      OrderDate: '1996-07-04T00:00:00Z',
      Freight: 32.38,
      ShipCountry: 'City6',
    },
  ];
  editSettings: EditSettingsModel = {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    mode: 'Batch',
  };
  pageSettings: PageSettingsModel = { pageCount: 5, pageSize: 3 };
  shipCountryDistinctData = [
    'City1',
    'City2',
    'City3',
    'City4',
    'City5',
    'City6',
  ];
  orderForm?: FormGroup;
  @ViewChild('batchgrid') grid?: GridComponent;
  public ngOnInit(): void {
    this.orderForm = new FormGroup({
      OrderID: new FormControl(''),
      CustomerID: new FormControl(''),
      EmployeeID: new FormControl(''),
      Freight: new FormControl(''),
      OrderDate: new FormControl(''),
      ShipCountry: new FormControl(''),
    });
  }

  rowSelected(e: any) {
    this.rowDataSelected = e.data;
  }

  rowDeselected(e: any) {
    console.log('rowDeselected', e);
    console.log(this.orderForm?.value);
    this.rowIndex = e.rowIndex;
  }

  beginEdit(e: any) {
    console.log('beginEdit: ', e);
  }

  cellDeselected(e: any) {
    console.log('cellDeselected: ', e);
  }

  cellEdit(e: any) {
    this.orderForm?.patchValue(e.rowData);
    this.cellName = e.columnName;
    this.cellValue = e.value;
  }

  cellSaved(e: any) {
    console.log('cell save', e);
    console.log('fb change', this.orderForm);
    if (e.value !== this.cellValue)
      this.grid?.updateCell(this.rowIndex, e.columnName, this.cellValue!);
  }

  actionComplete(e: any) {
    console.log('actionComplete', e);
  }

  valueChange(e: any, f: string) {
    if (e === this.cellValue) {
      return;
    }
    this.cellValue = e;
  }
}
