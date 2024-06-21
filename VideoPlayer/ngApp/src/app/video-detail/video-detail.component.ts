import { Component, EventEmitter, Input } from '@angular/core';
import { Video } from '../video'; 
@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  outputs: ['updateVideoEvent', 'deleteVideoEvent']
})
export class VideoDetailComponent {
  editTitle: boolean = false;
  updateVideoEvent = new EventEmitter();
  deleteVideoEvent = new EventEmitter();
  @Input() video: Video = new Video();

  ngOnChanges() {
    this.editTitle = false;
  }

  onTitleClick() {
    this.editTitle = true;
  }

  updateVideo() {
    this.updateVideoEvent.emit(this.video);
  }

  deleteVideo() {
    this.deleteVideoEvent.emit(this.video);
  }
}
