"use strict";
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hsciifontpicker = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
var react_select_1 = __importDefault(require("react-select"));
var options_json_1 = __importDefault(require("./options.json"));
var hsciifont_classnames_js_1 = require("./hsciifont_classnames.js");
var Hsciifontpicker = function () {
    var _a = (0, react_1.useState)(null), selectedCategory = _a[0], setSelectedCategory = _a[1];
    var _b = (0, react_1.useState)(null), selectedItem = _b[0], setSelectedItem = _b[1];
    var currfontcn = "";
    var handleCategoryChange = function (selectedOption) {
        setSelectedCategory(selectedOption);
        setSelectedItem(null); // Reset the second select
        if (selectedOption) {
            setBodyFont(selectedOption.value);
        }
    };
    var handleItemChange = function (selectedOption) {
        setSelectedItem(selectedOption);
        if (selectedOption) {
            setBodyFont(selectedOption.value);
        }
    };
    var setBodyFont = function (selected_hsciifont_name) {
        // alert(`currfontcn is ${currfontcn}. document.body.classList is ${document.body.classList}`);
        document.body.classList.value = document.body.classList.value.replaceAll(/__className_\w+\s+antialiased/g, "");
        document.body.classList.value = document.body.classList.value.replaceAll(/antialiased\s+__className_\w+/g, "");
        currfontcn = hsciifont_classnames_js_1.hsciifont_classnames[selected_hsciifont_name];
        document.body.classList.add(currfontcn);
        document.body.classList.add("antialiased");
    };
    var itemOptions = selectedCategory ? selectedCategory.children : [];
    return ((0, jsx_runtime_1.jsxs)("div", { style: { width: 400, marginBottom: 20, color: 'black', backgroundColor: 'white' }, children: [(0, jsx_runtime_1.jsx)(react_select_1.default, { options: options_json_1.default, onChange: handleCategoryChange, value: selectedCategory, placeholder: "8aiueohcg lxnguAge(bh\u03B1s\u03B1).select" }), (0, jsx_runtime_1.jsx)(react_select_1.default, { options: itemOptions, onChange: handleItemChange, value: selectedItem, placeholder: "8aiueohcg font.select", isDisabled: !selectedCategory })] }));
};
exports.Hsciifontpicker = Hsciifontpicker;
