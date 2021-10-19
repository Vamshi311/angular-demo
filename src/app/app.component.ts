import { Component, ViewChild ,AfterViewInit, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomSnackbarComponent } from './custom-snackbar/custom-snackbar.component';
import { CustomDialogContentComponent } from './custom-dialog-content/custom-dialog-content.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'angular-demo';
  notifications = 5;
  showSpinner = false;
  opened = false;
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  selectedValue: string = "";
  options :string[] = ['Angular', 'React', 'Vue'];
  favoriteUI:string="";

  toppings: FormGroup;

  minDate = new Date(2019, 2, 6);
  maxDate = new Date(2019, 3, 10);

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  
  @ViewChild(MatSort) sort: MatSort; // to get the reference of MatSort component
  @ViewChild(MatPaginator) paginator: MatPaginator;

  numbers: number[] = [];

  constructor(fb: FormBuilder, private snackbar: MatSnackBar, public dialog: MatDialog) {
    this.toppings = fb.group({
      pepperoni: false,
      extracheese: false,
      mushroom: false
    });
    for (let i=0; i<1000; i++) {
      this.numbers.push(i);
    }
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  loadData() {
    this.showSpinner = true;

    setTimeout(() => this.showSpinner = false, 5000);

  }


  log(state: string) {
    console.log(state);
  }

  logData(row: any) {
    console.log("Row selected :" + row.name);
  }

  dateFilter = (date :Date) => {
    const day = date.getDay();
    return day!=0 && day !=6;
  }

  openSnackBar(message: string, action: string) {
    let snackbarRef = this.snackbar.open(message, action, {duration:2000});
    snackbarRef.afterDismissed().subscribe(()=> { console.log("snackbar dismissed")});
    snackbarRef.onAction().subscribe(()=>console.log("dismiss action triggered"));  
  }

  openCustomSnackBar(message: string, action: string) {
    let snackbarRef = this.snackbar.openFromComponent(CustomSnackbarComponent, {duration:2000});// second param is config to be passed to snackbar
  }

  openDialog() {
    // second oparam of this.dialog.open() is data to be passed to custom dialog component. data is key for object which can have any value
    let dialogRef = this.dialog.open(CustomDialogContentComponent, {data: {name: 'John'}}); 
    dialogRef.afterClosed().subscribe((result)=> { // result will have mat-dialog-close value of button that got clicked
      console.log(`Dialog result is: ${result}`);
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
