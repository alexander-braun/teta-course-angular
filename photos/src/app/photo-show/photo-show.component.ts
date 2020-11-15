import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css'],
})
export class PhotoShowComponent implements OnInit {
  currentPhoto: string;

  constructor(private photosService: PhotosService) {
    this.getNewRandomPhoto();
  }

  ngOnInit(): void {}

  getNewRandomPhoto(): void {
    this.photosService.getRandomPhoto().subscribe((res) => {
      this.currentPhoto = res.urls.regular;
    });
  }
}
