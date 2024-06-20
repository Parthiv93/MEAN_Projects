import { Component, Input } from '@angular/core';
import { Video } from '../video'; 
@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent {
  editTitle: boolean = false;
  @Input() video: Video = new Video();

  ngOnChanges() {
    this.editTitle = false;
  }

  onTitleClick() {
    this.editTitle = true;
  }
}
