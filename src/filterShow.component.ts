/**
 * Created by Jordy Frijters on 13-12-2017.
 */
import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appIfnot]'
})
export class IfnotDirective {
  @Input() set appIfnot(value: boolean) {
    if (!value) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }

  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {
  }

}
