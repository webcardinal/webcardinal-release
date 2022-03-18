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
const PskNumberInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.__inputHandler = (event) => {
      event.stopImmediatePropagation();
      let value = event.target.value;
      this.modelHandler.updateModel('value', value);
    };
    this.label = null;
    this.value = null;
    this.name = null;
    this.placeholder = null;
    this.required = false;
    this.readOnly = false;
    this.invalidValue = null;
  }
  render() {
    if (!this.htmlElement.isConnected)
      return null;
    return h("psk-input", { type: "number", label: this.label, name: this.name, value: this.value, placeholder: this.placeholder, required: this.required, readOnly: this.readOnly, invalidValue: this.invalidValue, specificProps: {
        onKeyUp: this.__inputHandler.bind(this),
        onChange: this.__inputHandler.bind(this)
      } });
  }
  get htmlElement() { return getElement(this); }
};
__decorate([
  CustomTheme(),
  BindModel()
], PskNumberInput.prototype, "modelHandler", void 0);
__decorate([
  TableOfContentProperty({
    description: [`By filling out this property, the component will display above it, a label using <psk-link page="forms/psk-label">psk-label</psk-link> component.`],
    isMandatory: false,
    propertyType: 'string',
    specialNote: `If this property is not provided, the component will be displayed without any label`
  })
], PskNumberInput.prototype, "label", void 0);
__decorate([
  TableOfContentProperty({
    description: [`Specifies the value of an psk-number-input component.`,
      `This value is updated also in the model using the two-way binding. Information about two-way binding using models and templates can be found at: <psk-link page="forms/using-forms">Using forms</psk-link>.`],
    isMandatory: false,
    propertyType: 'string'
  })
], PskNumberInput.prototype, "value", void 0);
__decorate([
  TableOfContentProperty({
    description: [`Specifies the name of a psk-number-input component. It is used along with the psk-label component.`],
    isMandatory: false,
    propertyType: 'string'
  })
], PskNumberInput.prototype, "name", void 0);
__decorate([
  TableOfContentProperty({
    description: [`Specifies a short hint that describes the expected value of an psk-number-input component`],
    isMandatory: false,
    propertyType: 'string'
  })
], PskNumberInput.prototype, "placeholder", void 0);
__decorate([
  TableOfContentProperty({
    description: [`Specifies that an input field must be filled out before submitting the form.`,
      `Accepted values: "true" and "false"`],
    isMandatory: false,
    propertyType: 'boolean',
    defaultValue: "false"
  })
], PskNumberInput.prototype, "required", void 0);
__decorate([
  TableOfContentProperty({
    description: [`	Specifies that an input field is read-only.`,
      `Accepted values: "true" and "false"`],
    isMandatory: false,
    propertyType: 'boolean',
    defaultValue: "false"
  })
], PskNumberInput.prototype, "readOnly", void 0);
__decorate([
  TableOfContentProperty({
    description: [`This property indicates if the value entered by the user is a valid one according to some validation present in the controller.`],
    isMandatory: false,
    propertyType: 'boolean'
  })
], PskNumberInput.prototype, "invalidValue", void 0);

export { PskNumberInput as psk_number_input };
