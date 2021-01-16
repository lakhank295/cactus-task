import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { IPostInfo } from 'src/app/shared/models/postInfo.model';
import { ICommentInfo } from 'src/app/shared/models/commentInfo.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonService } from './../../../shared/services/common.service';
import { IAllUserResponse } from './../../../shared/models/all-user-response.model';
import { ICommentsResponse } from './../../../shared/models/all-comments-response.model';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.scss']
})

export class Assignment1Component implements OnInit {
  public allPosts: IPostInfo[];
  public allComments: ICommentInfo[] = [];
  public userForm: FormGroup;
  public cookieValue: string
  public isUserExist: boolean;

  public comment: string;

  constructor(private _service: CommonService, private cookieService: CookieService) { }

  ngOnInit(): void  {
    this.userForm = new FormGroup({
      email: new FormControl(null,[Validators.required, Validators.email]),
      name: new FormControl(null,[Validators.required])
    })

    this.isUserExist = false;

    this.getAllPosts()
  }

  private getAllPosts(): void {
    this._service.getAllPosts().subscribe((res: IAllUserResponse) => {
      if(res.code === 200) {
        this.allPosts = res.data

        this.allPosts.forEach((el) => {
          el.isReadMore = false;
          el.isCreateUser = false
        })
      }
    })
  }

  public getPostWiseComments(post: IPostInfo): void {
    this.allComments = [];

    if(post.isReadMore) {
      this._service.getCommentsById(post.id).subscribe((res: ICommentsResponse) => {
        if(res.code === 200) {
          this.allComments = res.data
        }
      })
    }

    this.validateCookie()
  }

  public validateCookie() {
    this.cookieValue = this.cookieService.get('users');
    let tempCookieValue;
    console.log(this.cookieValue)

    if(this.cookieValue) {
      tempCookieValue = JSON.parse(this.cookieValue)
    }

    if(!tempCookieValue) {
      this.isUserExist = true;
    } else {
      this.isUserExist = false
    }
  }

  public addComment(): void {
    this.cookieValue = this.cookieService.get('users');
    let tempCookieValue;

    if(this.cookieValue) {
      tempCookieValue = JSON.parse(this.cookieValue)
    }

    let tempObj = {
      body: this.comment,
      email: tempCookieValue[0].email,
      id: 1,
      name: tempCookieValue[0].name,
      post_id: 1,
      created_at: new Date().toString(),
      updated_at: new Date().toString()
    }
    this.allComments.push(tempObj);

    this.comment = ''
  }

  public onSubmit(): void {
    let data: any[] = []
    data.push(this.userForm.value)
    this.cookieService.set('users', JSON.stringify(data))

    this.userForm.reset();

    this.isUserExist = false
  }
}