import { PostServiceService } from './../../services/post-service.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Post } from 'src/app/interfaces/posts';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HttpErrorResponse } from '@angular/common/http';

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
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements AfterViewInit {

  posts: Post[];
  dataSource: MatTableDataSource<Post>
  displayedColumns: string[] = ['userid', 'title', 'body'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private _postService: PostServiceService) { }

  ngAfterViewInit(): void{
    this._postService.getData()
      .subscribe(data => {
        this.posts = data
        this.dataSource = new MatTableDataSource<Post>(data)
        this.dataSource.paginator = this.paginator
      }, (err: HttpErrorResponse) => console.log(err))

    //this.dataSource.paginator = this.paginator;
  }

}
