import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { Video } from '../video'; 

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  inputs: ['videos'],
  outputs: ['SelectVideo']

})
export class VideoListComponent {
  @Input() videos: Video[] = [];
  public SelectVideo = new EventEmitter();
  onSelect(vid: Video) {
    this.SelectVideo.emit(vid);
  }
}
