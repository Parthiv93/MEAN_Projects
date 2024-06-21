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
  selectedVideo: Video | null = null;

  hidenewVideo: boolean = true;

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
    this.hidenewVideo = true;
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
      this.hidenewVideo = true;
  }

  onUpdateVideoEvent(vid: any): void {
    this._videoService.updateVideo(vid)
      .subscribe(
        resUpdatedVideo => vid = resUpdatedVideo,
        err => {
          console.error('Error updating video:', err);
        }
      );
    // this.selectedVideo = null;
  }

  onDeleteVideoEvent(vid: any): void {
    let videoArray = this.videos;
    this._videoService.deleteVideo(vid)
      .subscribe(
        resDeletedVideo => {
          for (let i = 0; i < videoArray.length; i++) {
            if (videoArray[i]._id === vid._id) {
              videoArray.splice(i, 1);
            }
          }
        },
        err => {
          console.error('Error deleting video:', err);
        }
      );
    this.selectedVideo = null;
  }

  newVideo(): void {
    this.hidenewVideo = false;
    this.selectedVideo = {
      _id: '',
      title: '',
      url: '',
      description: ''
    };
  }
}
