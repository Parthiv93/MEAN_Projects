import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {

  videos: Video[] = []; // Initialize as an empty array
  selectedVideo!: Video;

  constructor(private _videoService: VideoService) { }

  ngOnInit(): void { 
    this._videoService.getVideos()
      .subscribe(
        resVideoData => {
          console.log('Video data fetched:', resVideoData); // Add logging
          this.videos = resVideoData;
        },
        err => {
          console.error('Error fetching videos:', err);
        }
      );
  }

  onSelectVideo(vid: Video): void {
    this.selectedVideo = vid;
    console.log(this.selectedVideo);
  }
}
