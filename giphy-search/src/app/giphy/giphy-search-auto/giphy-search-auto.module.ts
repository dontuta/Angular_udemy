import { NgModule } from '@angular/core';
import { GiphySearchAutoComponent } from './giphy-search-auto.component';
import { GiphySearchAutoRoutingModule } from './giphy-search-auto-routing.module';
import { GiphySearchService } from '../giphy-search.service';
import { SharedModuleModule } from 'src/app/shared/shared.module';
import { GiphySearchListModule } from '../giphy-search-list/giphy-search-list.module';

@NgModule({
  declarations: [ GiphySearchAutoComponent ],
  imports: [
    SharedModuleModule,
    GiphySearchListModule,
    GiphySearchAutoRoutingModule
  ],
  providers: [ GiphySearchService ],
})

// adicionado o default para o uso do lazy loading
export default class GiphySearchAutoModule { }
