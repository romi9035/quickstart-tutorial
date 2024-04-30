/* sap.ui.define([
  "sap/m/Button",
    "sap/m/MessageToast"
], (Button, MessageToast) => {
    "use strict";

    new Button({
     ui5.quickstart.index   text: "Ready...",
        press() {
            MessageToast.show("Hello World!");
        }
    }).placeAt("content");

});*/
sap.ui.define([
    "sap/ui/core/mvc/XMLView"
], function (XMLView) {
    'use strict';

    XMLView.create({
        viewName: "ui5.quickstart.App"
    }).then((oView) => oView.placeAt("content"))
});