import { r as registerInstance, h, g as getElement } from './index-8ac0a813.js';
import { P as PskButtonEvent, n as normalizeRegexToString, C as CustomTheme, B as BindModel, T as TableOfContentProperty } from './index-84d7ff7a.js';

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
const INVALID_ID_CHARACTERS_REGEX = /[^A-Za-z0-9_-]/g;
const PskSelect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.options = [];
    this.selectOptions = null;
    this.label = null;
    this.value = null;
    this.selectionType = 'single';
    this.placeholder = null;
    this.required = false;
    this.disabled = false;
    this.invalidValue = null;
  }
  componentWillLoad() {
    if (this.selectionType !== 'single' && this.selectionType !== 'multiple') {
      this.selectionType = 'single';
    }
    if (this.selectOptions) {
      this.__createOptions();
    }
  }
  __onChangeHandler(evt) {
    evt.preventDefault();
    evt.stopImmediatePropagation();
    let selectedOptions = Array.from(evt.target.selectedOptions);
    let selectedValues = selectedOptions.map(selectedOption => { return selectedOption['value']; });
    const value = this.selectionType === "multiple" ? selectedValues : selectedValues[0];
    if (this.modelHandler)
      this.modelHandler.updateModel('value', value);
    if (this.eventName) {
      evt.preventDefault();
      evt.stopImmediatePropagation();
      this._host.dispatchEvent(new PskButtonEvent(this.eventName, {
        value,
        payload: this.eventData
      }, {
        bubbles: true,
        composed: true,
        cancelable: true
      }));
    }
  }
  __createOptions() {
    let optionsArray = this.selectOptions.split('|');
    this.options = optionsArray.map((option) => {
      let labelValue = option.trim().split(',');
      let value, label = labelValue[0].trim();
      if (labelValue.length === 1) {
        value = normalizeRegexToString(label, INVALID_ID_CHARACTERS_REGEX, '');
      }
      else {
        value = labelValue[1].trim();
      }
      return {
        label: label,
        value: value
      };
    });
  }
  render() {
    if (!this._host.isConnected)
      return null;
    const name = this.label && normalizeRegexToString(this.label, INVALID_ID_CHARACTERS_REGEX, '').toLowerCase();
    const placeholderSelected = this.options.findIndex((opt) => opt.value === this.value) === -1;
    let placeholderElement = null;
    if (this.placeholder) {
      placeholderElement = h("option", { disabled: true, label: this.placeholder, value: '', selected: placeholderSelected });
    }
    let selectOptionsList = [];
    if (this.options) {
      selectOptionsList = this.options.map((option) => {
        const optValue = typeof option.value !== "undefined" ? option.value
          : option.label && normalizeRegexToString(option.label, INVALID_ID_CHARACTERS_REGEX, '');
        const isSelected = option.selected === true || this.value === optValue;
        return (h("option", { value: optValue, label: option.label, selected: isSelected }, option.label));
      });
    }
    return (h("div", { class: "form-group" }, h("psk-label", { for: name, label: this.label }), h("select", { name: name, id: name, class: "form-control", disabled: this.disabled, required: this.required, multiple: this.selectionType === 'multiple', onChange: this.__onChangeHandler.bind(this) }, placeholderElement, selectOptionsList)));
  }
  get _host() { return getElement(this); }
};
__decorate([
  CustomTheme(),
  BindModel()
], PskSelect.prototype, "modelHandler", void 0);
__decorate([
  TableOfContentProperty({
    description: [`This property is providing the list of the options available for selection.`,
      `Each option is separated by the special character "|" (pipe) (e.g. option 1 | option 2 | option 3).`,
      `For each option, as a recommendation, you should add a value separated by comma.`,
      `Example of options with values: "Romania, ROM | Italy, ITA | Germany, DE"`,
      `If no value is provided for an option, the component will create one. It will take the option and will normalize it creating the value. Any character which does not comply to the rule, will be removed.`,
      `The rule is that a label must match the following regular expression: "A-Za-z0-9_-"., which means that all the characters should be alpha-numeric and only two special characters are allowed (_ and -).`],
    isMandatory: false,
    propertyType: 'string'
  })
], PskSelect.prototype, "selectOptions", void 0);
__decorate([
  TableOfContentProperty({
    description: [`By filling out this property, the component will display above it, a label using <psk-link page="forms/psk-label">psk-label</psk-link> component.`],
    isMandatory: false,
    propertyType: 'string',
    specialNote: `If this property is not provided, the component will be displayed without any label`
  })
], PskSelect.prototype, "label", void 0);
__decorate([
  TableOfContentProperty({
    description: [`Specifies the value of a psk-select component.`,
      `This value is updated also in the model using the two-way binding. Information about two-way binding using models and templates can be found at: <psk-link page="forms/using-forms">Using forms</psk-link>.`],
    isMandatory: false,
    propertyType: 'string'
  })
], PskSelect.prototype, "value", void 0);
__decorate([
  TableOfContentProperty({
    description: [`Specifies the type of the psk-select component.`,
      `There are two possible values, "single" and "multiple". If no value is provided, "single" is assumed.`],
    isMandatory: false,
    propertyType: 'string',
    defaultValue: 'single'
  })
], PskSelect.prototype, "selectionType", void 0);
__decorate([
  TableOfContentProperty({
    description: [`Specifies a short hint that describes the expected value of an psk-date-input component`],
    isMandatory: false,
    propertyType: 'string'
  })
], PskSelect.prototype, "placeholder", void 0);
__decorate([
  TableOfContentProperty({
    description: [`Specifies that at least one option must be selected before submitting the form.`,
      `Accepted values: "true" and "false"`],
    isMandatory: false,
    propertyType: 'boolean',
    defaultValue: "false"
  })
], PskSelect.prototype, "required", void 0);
__decorate([
  TableOfContentProperty({
    description: [`	Specifies that the component is disabled. Most of the times is used within conditional formatting of components.`,
      `Accepted values: "true" and "false"`],
    isMandatory: false,
    propertyType: 'boolean',
    defaultValue: "false"
  })
], PskSelect.prototype, "disabled", void 0);
__decorate([
  TableOfContentProperty({
    description: [`This property indicates if the value entered by the user is a valid one according to some validation present in the controller.`],
    isMandatory: false,
    propertyType: 'boolean'
  })
], PskSelect.prototype, "invalidValue", void 0);
__decorate([
  TableOfContentProperty({
    description: `By defining this attribute, the component will be able to trigger an event.`,
    isMandatory: false,
    propertyType: 'string'
  })
], PskSelect.prototype, "eventName", void 0);
__decorate([
  TableOfContentProperty({
    description: ['This attribute is used to pass some information along with an event.',
      'This attribute is taken into consideration only if the eventName has a value. If not, it is ignored.'],
    isMandatory: false,
    propertyType: 'any'
  })
], PskSelect.prototype, "eventData", void 0);

export { PskSelect as psk_select };
