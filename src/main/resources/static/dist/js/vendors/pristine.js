(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/pristinejs/dist/pristine.js
  var require_pristine = __commonJS({
    "node_modules/pristinejs/dist/pristine.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.Pristine = factory());
      })(exports, function() {
        "use strict";
        var lang = {
          en: {
            required: "This field is required",
            email: "This field requires a valid e-mail address",
            number: "This field requires a number",
            integer: "This field requires an integer value",
            url: "This field requires a valid website URL",
            tel: "This field requires a valid telephone number",
            maxlength: "This fields length must be < ${1}",
            minlength: "This fields length must be > ${1}",
            min: "Minimum value for this field is ${1}",
            max: "Maximum value for this field is ${1}",
            pattern: "Please match the requested format",
            equals: "The two fields do not match",
            default: "Please enter a correct value"
          }
        };
        function findAncestor(el, cls) {
          while ((el = el.parentElement) && !el.classList.contains(cls)) {
          }
          return el;
        }
        function tmpl(o) {
          var _arguments = arguments;
          return this.replace(/\${([^{}]*)}/g, function(a, b) {
            return _arguments[b];
          });
        }
        function groupedElemCount(input) {
          return input.pristine.self.form.querySelectorAll('input[name="' + input.getAttribute("name") + '"]:checked').length;
        }
        function mergeConfig(obj1, obj2) {
          for (var attr in obj2) {
            if (!(attr in obj1)) {
              obj1[attr] = obj2[attr];
            }
          }
          return obj1;
        }
        var defaultConfig = {
          classTo: "form-group",
          errorClass: "has-danger",
          successClass: "has-success",
          errorTextParent: "form-group",
          errorTextTag: "div",
          errorTextClass: "text-help"
        };
        var PRISTINE_ERROR = "pristine-error";
        var SELECTOR = "input:not([type^=hidden]):not([type^=submit]), select, textarea";
        var ALLOWED_ATTRIBUTES = ["required", "min", "max", "minlength", "maxlength", "pattern"];
        var EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var MESSAGE_REGEX = /-message(?:-([a-z]{2}(?:_[A-Z]{2})?))?/;
        var currentLocale = "en";
        var validators = {};
        var _ = function _2(name, validator) {
          validator.name = name;
          if (validator.priority === void 0)
            validator.priority = 1;
          validators[name] = validator;
        };
        _("text", { fn: function fn(val) {
          return true;
        }, priority: 0 });
        _("required", { fn: function fn(val) {
          return this.type === "radio" || this.type === "checkbox" ? groupedElemCount(this) : val !== void 0 && val.trim() !== "";
        }, priority: 99, halt: true });
        _("email", { fn: function fn(val) {
          return !val || EMAIL_REGEX.test(val);
        } });
        _("number", { fn: function fn(val) {
          return !val || !isNaN(parseFloat(val));
        }, priority: 2 });
        _("integer", { fn: function fn(val) {
          return !val || /^\d+$/.test(val);
        } });
        _("minlength", { fn: function fn(val, length) {
          return !val || val.length >= parseInt(length);
        } });
        _("maxlength", { fn: function fn(val, length) {
          return !val || val.length <= parseInt(length);
        } });
        _("min", { fn: function fn(val, limit) {
          return !val || (this.type === "checkbox" ? groupedElemCount(this) >= parseInt(limit) : parseFloat(val) >= parseFloat(limit));
        } });
        _("max", { fn: function fn(val, limit) {
          return !val || (this.type === "checkbox" ? groupedElemCount(this) <= parseInt(limit) : parseFloat(val) <= parseFloat(limit));
        } });
        _("pattern", { fn: function fn(val, pattern) {
          var m = pattern.match(new RegExp("^/(.*?)/([gimy]*)$"));
          return !val || new RegExp(m[1], m[2]).test(val);
        } });
        _("equals", { fn: function fn(val, otherFieldSelector) {
          var other = document.querySelector(otherFieldSelector);
          return other && (!val && !other.value || other.value === val);
        } });
        function Pristine2(form, config, live) {
          var self2 = this;
          init(form, config, live);
          function init(form2, config2, live2) {
            form2.setAttribute("novalidate", "true");
            self2.form = form2;
            self2.config = mergeConfig(config2 || {}, defaultConfig);
            self2.live = !(live2 === false);
            self2.fields = Array.from(form2.querySelectorAll(SELECTOR)).map(function(input) {
              var fns = [];
              var params = {};
              var messages = {};
              [].forEach.call(input.attributes, function(attr) {
                if (/^data-pristine-/.test(attr.name)) {
                  var name = attr.name.substr(14);
                  var messageMatch = name.match(MESSAGE_REGEX);
                  if (messageMatch !== null) {
                    var locale = messageMatch[1] === void 0 ? "en" : messageMatch[1];
                    if (!messages.hasOwnProperty(locale))
                      messages[locale] = {};
                    messages[locale][name.slice(0, name.length - messageMatch[0].length)] = attr.value;
                    return;
                  }
                  if (name === "type")
                    name = attr.value;
                  _addValidatorToField(fns, params, name, attr.value);
                } else if (~ALLOWED_ATTRIBUTES.indexOf(attr.name)) {
                  _addValidatorToField(fns, params, attr.name, attr.value);
                } else if (attr.name === "type") {
                  _addValidatorToField(fns, params, attr.value);
                }
              });
              fns.sort(function(a, b) {
                return b.priority - a.priority;
              });
              self2.live && input.addEventListener(!~["radio", "checkbox"].indexOf(input.getAttribute("type")) ? "input" : "change", function(e) {
                self2.validate(e.target);
              }.bind(self2));
              return input.pristine = { input, validators: fns, params, messages, self: self2 };
            }.bind(self2));
          }
          function _addValidatorToField(fns, params, name, value) {
            var validator = validators[name];
            if (validator) {
              fns.push(validator);
              if (value) {
                var valueParams = name === "pattern" ? [value] : value.split(",");
                valueParams.unshift(null);
                params[name] = valueParams;
              }
            }
          }
          self2.validate = function(input, silent) {
            silent = input && silent === true || input === true;
            var fields = self2.fields;
            if (input !== true && input !== false) {
              if (input instanceof HTMLElement) {
                fields = [input.pristine];
              } else if (input instanceof NodeList || input instanceof (window.$ || Array) || input instanceof Array) {
                fields = Array.from(input).map(function(el) {
                  return el.pristine;
                });
              }
            }
            var valid = true;
            for (var i = 0; fields[i]; i++) {
              var field = fields[i];
              if (_validateField(field)) {
                !silent && _showSuccess(field);
              } else {
                valid = false;
                !silent && _showError(field);
              }
            }
            return valid;
          };
          self2.getErrors = function(input) {
            if (!input) {
              var erroneousFields = [];
              for (var i = 0; i < self2.fields.length; i++) {
                var field = self2.fields[i];
                if (field.errors.length) {
                  erroneousFields.push({ input: field.input, errors: field.errors });
                }
              }
              return erroneousFields;
            }
            if (input.tagName && input.tagName.toLowerCase() === "select") {
              return input.pristine.errors;
            }
            return input.length ? input[0].pristine.errors : input.pristine.errors;
          };
          function _validateField(field) {
            var errors = [];
            var valid = true;
            for (var i = 0; field.validators[i]; i++) {
              var validator = field.validators[i];
              var params = field.params[validator.name] ? field.params[validator.name] : [];
              params[0] = field.input.value;
              if (!validator.fn.apply(field.input, params)) {
                valid = false;
                if (typeof validator.msg === "function") {
                  errors.push(validator.msg(field.input.value, params));
                } else if (typeof validator.msg === "string") {
                  errors.push(tmpl.apply(validator.msg, params));
                } else if (validator.msg === Object(validator.msg) && validator.msg[currentLocale]) {
                  errors.push(tmpl.apply(validator.msg[currentLocale], params));
                } else if (field.messages[currentLocale] && field.messages[currentLocale][validator.name]) {
                  errors.push(tmpl.apply(field.messages[currentLocale][validator.name], params));
                } else if (lang[currentLocale] && lang[currentLocale][validator.name]) {
                  errors.push(tmpl.apply(lang[currentLocale][validator.name], params));
                } else {
                  errors.push(tmpl.apply(lang[currentLocale].default, params));
                }
                if (validator.halt === true) {
                  break;
                }
              }
            }
            field.errors = errors;
            return valid;
          }
          self2.addValidator = function(elem, fn, msg, priority, halt) {
            if (elem instanceof HTMLElement) {
              elem.pristine.validators.push({ fn, msg, priority, halt });
              elem.pristine.validators.sort(function(a, b) {
                return b.priority - a.priority;
              });
            } else {
              console.warn("The parameter elem must be a dom element");
            }
          };
          function _getErrorElements(field) {
            if (field.errorElements) {
              return field.errorElements;
            }
            var errorClassElement = findAncestor(field.input, self2.config.classTo);
            var errorTextParent = null, errorTextElement = null;
            if (self2.config.classTo === self2.config.errorTextParent) {
              errorTextParent = errorClassElement;
            } else {
              errorTextParent = errorClassElement.querySelector("." + self2.config.errorTextParent);
            }
            if (errorTextParent) {
              errorTextElement = errorTextParent.querySelector("." + PRISTINE_ERROR);
              if (!errorTextElement) {
                errorTextElement = document.createElement(self2.config.errorTextTag);
                errorTextElement.className = PRISTINE_ERROR + " " + self2.config.errorTextClass;
                errorTextParent.appendChild(errorTextElement);
                errorTextElement.pristineDisplay = errorTextElement.style.display;
              }
            }
            return field.errorElements = [errorClassElement, errorTextElement];
          }
          function _showError(field) {
            var errorElements = _getErrorElements(field);
            var errorClassElement = errorElements[0], errorTextElement = errorElements[1];
            var input = field.input;
            var inputId = input.id || Math.floor((/* @__PURE__ */ new Date()).valueOf() * Math.random());
            var errorId = "error-" + inputId;
            if (errorClassElement) {
              errorClassElement.classList.remove(self2.config.successClass);
              errorClassElement.classList.add(self2.config.errorClass);
              input.setAttribute("aria-describedby", errorId);
              input.setAttribute("aria-invalid", "true");
            }
            if (errorTextElement) {
              errorTextElement.setAttribute("id", errorId);
              errorTextElement.setAttribute("role", "alert");
              errorTextElement.innerHTML = field.errors.join("<br/>");
              errorTextElement.style.display = errorTextElement.pristineDisplay || "";
            }
          }
          self2.addError = function(input, error) {
            input = input.length ? input[0] : input;
            input.pristine.errors.push(error);
            _showError(input.pristine);
          };
          function _removeError(field) {
            var errorElements = _getErrorElements(field);
            var errorClassElement = errorElements[0], errorTextElement = errorElements[1];
            var input = field.input;
            if (errorClassElement) {
              errorClassElement.classList.remove(self2.config.errorClass);
              errorClassElement.classList.remove(self2.config.successClass);
              input.removeAttribute("aria-describedby");
              input.removeAttribute("aria-invalid");
            }
            if (errorTextElement) {
              errorTextElement.removeAttribute("id");
              errorTextElement.removeAttribute("role");
              errorTextElement.innerHTML = "";
              errorTextElement.style.display = "none";
            }
            return errorElements;
          }
          function _showSuccess(field) {
            var errorClassElement = _removeError(field)[0];
            errorClassElement && errorClassElement.classList.add(self2.config.successClass);
          }
          self2.reset = function() {
            for (var i = 0; self2.fields[i]; i++) {
              self2.fields[i].errorElements = null;
            }
            Array.from(self2.form.querySelectorAll("." + PRISTINE_ERROR)).map(function(elem) {
              elem.parentNode.removeChild(elem);
            });
            Array.from(self2.form.querySelectorAll("." + self2.config.classTo)).map(function(elem) {
              elem.classList.remove(self2.config.successClass);
              elem.classList.remove(self2.config.errorClass);
            });
          };
          self2.destroy = function() {
            self2.reset();
            self2.fields.forEach(function(field) {
              delete field.input.pristine;
            });
            self2.fields = [];
          };
          self2.setGlobalConfig = function(config2) {
            defaultConfig = config2;
          };
          return self2;
        }
        Pristine2.addValidator = function(name, fn, msg, priority, halt) {
          _(name, { fn, msg, priority, halt });
        };
        Pristine2.addMessages = function(locale, messages) {
          var langObj = lang.hasOwnProperty(locale) ? lang[locale] : lang[locale] = {};
          Object.keys(messages).forEach(function(key, index) {
            langObj[key] = messages[key];
          });
        };
        Pristine2.setLocale = function(locale) {
          currentLocale = locale;
        };
        return Pristine2;
      });
    }
  });

  // src/js/vendors/pristine.js
  var import_pristinejs = __toESM(require_pristine());
  window.Pristine = import_pristinejs.default;
})();
