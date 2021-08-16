import { PostServiceService } from './../../services/post-service.service';
import { AfterViewInit, Component, ViewChild, Inject } from '@angular/core';
import { Post } from 'src/app/interfaces/posts';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HttpErrorResponse } from '@angular/common/http';

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

  constructor(@Inject(PostServiceService) private _postService: PostServiceService) { }

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
