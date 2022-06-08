import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {WebcamComponent} from './webcam/webcam.component';
import {UploadFileComponent} from './upload-file/upload-file.component';
import { FormComponent } from './form/form.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    WebcamComponent,
    UploadFileComponent,
    FormComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatProgressBarModule,
        MatSelectModule,
        MatToolbarModule,
        FlexLayoutModule,
        MatProgressSpinnerModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatButtonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
