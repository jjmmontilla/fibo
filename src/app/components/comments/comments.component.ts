import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  public comments: any[] = [];
  public displayedColumns: string[] = ['postId', 'name', 'email', 'body'];


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      //console.log('------id', params);
      const postId = params.id;

      this.postService.getComments(postId).then((resp : any) => {
        //console.log('-----------comments', resp);

        this.comments = resp;
      });

    });

  }

  public back () {
    this.router.navigate(['/']);
  }

}
