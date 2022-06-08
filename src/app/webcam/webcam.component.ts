import { Component, ElementRef, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import * as tmImage from '@teachablemachine/image';

@Component({
  selector: 'app-webcam',
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.scss']
})
export class WebcamComponent implements OnInit, AfterViewInit {

  url = 'https://teachablemachine.withgoogle.com/models/sQoKPC_Os';
  model: any;
  predictions: any;
  webcam: any;
  maxPredictions: any;
  loading = true;

  @ViewChild('video', {static: true}) video: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  async ngAfterViewInit() {

    const modelURL = this.url + '/model.json';
    const metadataURL = this.url + '/metadata.json';
    this.model = await tmImage.load(modelURL, metadataURL);
    this.maxPredictions = this.model.getTotalClasses();
    const flip = true;
    this.webcam = new tmImage.Webcam(400, 400, flip);
    await this.webcam.setup();
    this.loading = false;
    await this.webcam.play();
    requestAnimationFrame(() => this.loop());
    this.video.nativeElement.appendChild(this.webcam.canvas);
  }

  // tslint:disable-next-line:typedef
  async loop() {
    this.webcam.update(); // update the webcam frame
    this.predictions = await this.model.predict(this.webcam.canvas, true);
    requestAnimationFrame(() => this.loop());
  }

}
