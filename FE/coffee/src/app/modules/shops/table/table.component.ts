import { TableService } from 'src/app/service/table.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  constructor(private tableService: TableService) {}
  imgFull = '/assets/image/banfull.jpg';
  imgEmpty = '/assets/image/bantrong.jpg';
  listTable;
  ngOnInit(): void {
    this.getAllTable();
  }
  getAllTable() {
    this.tableService.getAll().subscribe((res) => {
      this.listTable = res;
    });
  }
}
