import { BrowserModule } from "@angular/platform-browser";
import { DiagramComponent } from "./diagram/diagram.component";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSliderModule } from "@angular/material/slider";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { AppUiModule } from "./app-ui.module";
import { RouterModule, Routes } from "@angular/router";

@NgModule({
  declarations: [AppComponent, DiagramComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    AppUiModule,
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
