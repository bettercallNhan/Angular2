import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

import { ItemsCardsComponent } from 'src/app/items-cards/items-cards.component';
import { ToolsbarComponent } from 'src/app/toolsbar/toolsbar.component';
import { Router,RouterLink } from '@angular/router';
import { ItemsCard2Component } from 'src/app/items-card2/items-card2.component';

@NgModule({
  declarations: [
    ItemsCardsComponent,
    ToolsbarComponent,
    ItemsCard2Component
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    RouterLink
  ],
  exports : [
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,

    ItemsCardsComponent,
    ToolsbarComponent,
    ItemsCard2Component
  ]
})
export class SharedModule { }
