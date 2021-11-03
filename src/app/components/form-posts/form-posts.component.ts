import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-form-posts',
  templateUrl: './form-posts.component.html',
  styleUrls: ['./form-posts.component.scss']
})
export class FormPostsComponent implements OnInit {
  public formPost: FormGroup | undefined;

  constructor(
    private fb: FormBuilder,
    private servicePosts: PostService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  public initForm(): void {
    this.formPost = this.fb.group({
      title: [ '',
        [
          Validators.required
        ]
      ],
      body: [ '',
        [Validators.required]
      ]

    });
  }

  public back () {
    this.router.navigate(['/']);
  }

  public onSubmit(): void {
    if (this.formPost) {
      console.log('----- enviar- save', this.formPost.value);

      this.servicePosts.createPost(this.formPost.value).then((resp: any) => {

        if (resp && resp.id) {
          console.log('----- creado con id:', resp.id);
          this.router.navigate(['/']);
        }
      });

    }
  }

}
