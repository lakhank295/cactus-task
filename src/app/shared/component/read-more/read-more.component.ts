import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss']
})
export class ReadMoreComponent implements OnInit {
  @Input('content') public content: string;
  @Input('limit') public limit: number;
  @Input('completeWords') public completeWords: boolean;

  public isContentToggled: boolean;
  public nonEditedContent: string;

  @Output('isReadMore') isReadMore = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    this.nonEditedContent = this.content;
    this.content = this.formatContent(this.content);
  }

  toggleContent() {
    this.isContentToggled = !this.isContentToggled;
    this.isReadMore.emit(this.isContentToggled)
    this.content = this.isContentToggled ? this.nonEditedContent : this.formatContent(this.content);
  }

  formatContent(content: string) {
    if (this.completeWords) {
      this.limit = content.substr(0, this.limit).lastIndexOf(' ');
    }
    return `${content.substr(0, this.limit)}...`;
  }

}
