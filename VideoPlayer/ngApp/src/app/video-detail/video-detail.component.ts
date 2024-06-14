import { Component, Input } from '@angular/core';
import { Video } from '../video'; 
@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent {
  @Input() video!: Video;
}
