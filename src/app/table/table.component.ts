import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TableDataSource, TableItem } from './table-datasource';
import { Breakpoints, BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<TableItem>;
  dataSource: TableDataSource;

  /** checar se está em mobile */
  mobile: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) { }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns;
  showFloatingButtons = false;
  ngOnInit() {
    this.dataSource = new TableDataSource();
  }

  ngAfterViewInit() {
    this.breakpointObserver.observe(['(min-width: 900px)']).subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.mobile = false;
        this.displayedColumns = ['id', 'nome', 'ano', 'genero', 'diretor', 'actions'];
      } else {
        this.mobile = true;
        this.displayedColumns = ['id', 'actions'];
      }
    });

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  toggleFloat() {
    this.showFloatingButtons = !this.showFloatingButtons;
    console.log('show:' + this.showFloatingButtons);
  }
}
