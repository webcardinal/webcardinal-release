import{g as e}from"./p-8419ec55.js";import{n as t,c as n}from"./p-51cfb66d.js";const o="definedEvents",r="definedControllers",s="data-define-events",i="data-define-controller",a={PSK_BUTTON_EVT:"PSK_BUTTON_EVT",PSK_SUB_MENU_EVT:"PSK_SUB_MENU_EVT"};function c(o){return function(r,s){const{connectedCallback:i,render:a,componentWillLoad:c,componentDidLoad:d}=r;r.componentWillLoad=function(){if(!e(this).hasAttribute("data-define-props"))return c&&c.call(this)},r.componentDidLoad=function(){if(!e(this).hasAttribute("data-define-props"))return d&&d.call(this)},r.connectedCallback=function(){let n=this,r=e(n),a=t(String(s));if(r.hasAttribute("data-define-props")){if(!n.componentDefinitions)return n.componentDefinitions={definedProperties:[Object.assign(Object.assign({},o),{propertyName:a})]},i&&i.call(n);let e=n.componentDefinitions;const t=Object.assign(Object.assign({},o),{propertyName:a});if(e&&e.hasOwnProperty("definedProperties")){let n=[...e.definedProperties];n.push(t),e.definedProperties=[...n]}else e.definedProperties=[t];n.componentDefinitions=Object.assign({},e)}return i&&i.call(n)},r.render=function(){let t=this;const o=e(t).tagName.toLowerCase();if(!t.componentDefinitions||!t.componentDefinitions||!t.componentDefinitions.definedProperties)return a&&a.call(t);let r=t.componentDefinitions.definedProperties;r&&(r=r.reverse()),n("psk-send-props",{composed:!0,bubbles:!0,cancelable:!0,detail:{tag:o,props:r}},!0)}}}export{s as D,a as E,c as T,i as a,o as b,r as c}