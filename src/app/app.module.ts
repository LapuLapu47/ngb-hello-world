import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [ // DECLARATIONS MEAN DEFINED WITHIN THIS APP, WHICH ARE ALL IN SUBFOLDERS OF THE MAIN APP.MODULE/APP.COMPONENT
    AppComponent,
    HelloWorldComponent,
    UserItemComponent,
    UserListComponent
  ],
  imports: [ // THESE ARE PARENT-LEVEL IMPORTS, WHICH IS SIGNIFIED BY THE @ SYMBOL 
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
