import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

import { UserListService } from '../user-list.service';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [MatTableModule, MatSortModule, MatPaginatorModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  private _liveAnnouncer = inject(LiveAnnouncer);

  adminName?: string;

  displayedColumns: string[] = ['id', 'name', 'email', 'gender', 'status'];
  dataSource = new MatTableDataSource<User>();

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  constructor(
    private route: ActivatedRoute,
    private userListService: UserListService
  ) {
    this.route.queryParams.subscribe((params) => {
      this.adminName = params['adminName'];
      console.log('admin is', this.adminName);
      this.userListService.getUsers().subscribe((data) => {
        this.dataSource.data = [...data];
      });
    });
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
