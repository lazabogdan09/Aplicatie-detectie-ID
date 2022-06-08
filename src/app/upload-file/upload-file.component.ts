import {Component, ElementRef, ViewChild, OnInit, AfterViewInit} from '@angular/core';
import * as tmImage from '@teachablemachine/image';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit, AfterViewInit {
  url = 'https://teachablemachine.withgoogle.com/models/sQoKPC_Os';
  model: any;
  predictions: any;
  labelContainer: any;
  maxPredictions: any;
  classPrediction: any;
  images: any;
  url2: any;
  msg = '';
  image: any;

  @ViewChild('@imagePreview', {static: true}) imagePreview: ElementRef | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  async ngAfterViewInit() {

    const modelURL = this.url + '/model.json';
    const metadataURL = this.url + '/metadata.json';
    this.model = await tmImage.load(modelURL, metadataURL);
    this.maxPredictions = this.model.getTotalClasses();
    this.labelContainer = document.getElementById('label-container');
    for (let i = 0; i < this.maxPredictions; i++) {
      this.labelContainer.appendChild(document.createElement('div'));
    }
  }

  async loop() {
    this.image = document.getElementById('imagePreview');
    this.predictions = await this.model.predict(this.image, false);
    /*for (let i = 0; i < this.maxPredictions; i++) {
      this.classPrediction = this.predictions[i].className + ': ' + this.predictions[i].probability.toFixed(2);
      this.labelContainer.childNodes[i].innerHTML = this.classPrediction;
    }*/
  }

  // tslint:disable-next-line:typedef
  selectFile(event: any) {
    if (!event.target.files[0] || event.target.files[0].length === 0) {
      this.msg = 'You must select an image';
      return;
    }

    var mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      this.msg = 'Only images are supported';
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    this.ngAfterViewInit().then(() => {
      this.loop();
    });

    reader.onload = (_event) => {
      this.msg = '';
      this.url2 = reader.result;
    };
  }
}
