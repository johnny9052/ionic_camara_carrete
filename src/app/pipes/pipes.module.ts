import { NgModule } from '@angular/core';
import { ImageSanatizerPipe } from './image-sanatizer.pipe';





@NgModule({
  declarations: [ImageSanatizerPipe],
  exports: [ImageSanatizerPipe]
})
export class PipesModule { }
