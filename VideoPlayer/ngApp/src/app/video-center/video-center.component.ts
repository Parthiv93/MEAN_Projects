import { Component, OnInit } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {

  videos: Video[] = [
    {'_id': '1', 'title': 'Title 1', 'url': 'URL 1', 'description': 'Description 1'},
    {'_id': '2', 'title': 'Title 2', 'url': 'URL 2', 'description': 'Description 2'},
    {'_id': '3', 'title': 'Title 3', 'url': 'URL 3', 'description': 'Description 3'},
    {'_id': '4', 'title': 'Title 4', 'url': 'URL 4', 'description': 'Description 4'}
  ];

  selectedVideo!: Video;

  constructor() { }

  ngOnInit(): void {
  }
  onSelectVideo(vid: Video) {
    this.selectedVideo = vid;
    console.log(this.selectedVideo);
  }

}
