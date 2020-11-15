import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Photos {
  urls: {
    regular: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(private httpClient: HttpClient) {}

  getRandomPhoto(): Observable<Photos> {
    return this.httpClient.get<Photos>(
      'https://api.unsplash.com/photos/random',
      {
        headers: {
          Authorization:
            'Client-ID -Ry1M5k61r-GxFgjYJzJPK3ZdRlnWjYZ9yKsIVkKA4c',
        },
      }
    );
  }
}
