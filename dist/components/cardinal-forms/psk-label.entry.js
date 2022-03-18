import { r as registerInstance, h, g as getElement } from './index-8ac0a813.js';
import { C as CustomTheme, B as BindModel, T as TableOfContentProperty } from './index-84d7ff7a.js';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const PskLabel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.for = null;
  }
  render() {
    if (!this.htmlElement.isConnected)
      return null;
    return (h("label", { class: "col-form-label", htmlFor: this.for }, this.label && this.label, h("slot", null)));
  }
  get htmlElement() { return getElement(this); }
};
__decorate([
  CustomTheme(),
  BindModel()
], PskLabel.prototype, "modelHandler", void 0);
__decorate([
  TableOfContentProperty({
    description: ['Specifies the label to be displayed.',
      `If this attribute is not provided, the component will display the content of the component as label.`],
    isMandatory: false,
    propertyType: 'string'
  })
], PskLabel.prototype, "label", void 0);
__decorate([
  TableOfContentProperty({
    description: ['Specifies which form element a label is bound to.',
      'Usually, this attribute comes in pair with another component, and is used by the browser to group the content in a specific order to be read by screen readers.',
      'The screen readers are used by the people with disabilities in order to have the possibility to navigate a website.',
      `An example of this pair of components can be found in the <a href="#live-examples">Examples section</a>.`],
    isMandatory: false,
    propertyType: 'string'
  })
], PskLabel.prototype, "for", void 0);

export { PskLabel as psk_label };
