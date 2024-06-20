import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {

  videos: Video[] = []; 
  selectedVideo!: Video;

  constructor(private _videoService: VideoService) { }

  ngOnInit(): void { 
    this._videoService.getVideos()
      .subscribe(
        resVideoData => {
          console.log('Video data fetched:', resVideoData); 
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

  onSubmitAddVideo(vid: Video): void {
    this.videos.push(vid);
    this._videoService.addVideo(vid)
      .subscribe(
        resNewVideo => {
          this.selectedVideo = resNewVideo;
        },
        err => {
          console.error('Error adding video:', err);
        }
      );
  }

  newVideo(): void {
    this.selectedVideo = {
      _id: '',
      title: '',
      url: '',
      description: ''
    };
  }
}
