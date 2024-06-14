import { Component, Input } from '@angular/core';
import { Video } from '../video'; // Import the Video interface or class if it exists

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent {
  @Input() videos: Video[] = [];
}
