import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { BookFormComponent } from './book-form/book-form.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LocalDateValueAccessor } from 'angular-date-value-accessor';
import { BookEditComponent } from './book-edit/book-edit.component';

@NgModule({
  declarations: [BookFormComponent, BookCreateComponent, BookEditComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LocalDateValueAccessor,
  ],
})
export class AdminModule {}
