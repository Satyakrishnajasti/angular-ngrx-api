import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
@NgModule({
  declarations: [],
  imports: [CommonModule, MatTableModule, MatMenuModule, MatProgressBarModule],
  exports: [MatTableModule, MatMenuModule, MatProgressBarModule],
})
export class MaterialModule {}
