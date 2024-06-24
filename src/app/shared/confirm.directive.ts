import {
  Directive,
  Input,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[bmConfirm]',
  standalone: true,
})
export class ConfirmDirective {
  @Input('bmConfirm') confirmText?: string;
  @Output() confirm = new EventEmitter<void>();
  @HostListener('click') onClick() {
    if (window.confirm(this.confirmText)) {
      this.confirm.emit();
    }
  }
}
