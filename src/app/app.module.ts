import { BrowserModule } from "@angular/platform-browser";
import { DiagramComponent } from "./diagram/diagram.component";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSliderModule } from "@angular/material/slider";

@NgModule({
  declarations: [AppComponent, DiagramComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
