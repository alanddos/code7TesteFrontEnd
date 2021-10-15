import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { LayoutModule } from "@angular/cdk/layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";
import { AddressFormComponent } from "./address-form/address-form.component";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatRadioModule } from "@angular/material/radio";
import { ReactiveFormsModule } from "@angular/forms";
import { TableComponent } from "./table/table.component";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { TreeComponent } from "./tree/tree.component";
import { MatTreeModule } from "@angular/material/tree";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { DragDropComponent } from "./drag-drop/drag-drop.component";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { NoPageFoundComponent } from "./no-page-found/no-page-found.component";
import { LoginComponent } from "./login/login.component";
import { UserComponent } from "./user/user.component";

//anuglar pwa
import { ServiceWorkerModule } from "@angular/service-worker";
import { UpdateService } from "./services/update.service";

//editor
 import { EditorModule } from '@tinymce/tinymce-angular';


import * as $ from "jquery";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DashboardComponent,
    AddressFormComponent,
    TableComponent,
    TreeComponent,
    DragDropComponent,
    NoPageFoundComponent,
    LoginComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTreeModule,
    DragDropModule,
    MatSnackBarModule,
    EditorModule,
    ServiceWorkerModule.register("ngsw-worker.js", {

    }),
  ],
  providers: [ UpdateService],
  bootstrap: [AppComponent],
})
export class AppModule {}
