(function (window, $, undefined) {
  'use strict';

  var Ui = function SimpleTheme() {
    var jsFileLocation = urlOfJsFile('simple-theme.js');

    this.name = 'simple-theme';   // for the settings
    this.viewName = 'Simple Theme'; // for the UI

    this.polymerTemplateFile = jsFileLocation + '../simple-theme.html';
    this.template = '<rov-ui-simple-theme></rov-ui-simple-theme>';

    this.loaded = function() {

    };
    this.disable = function () {
    };

  };
  window.Cockpit.UIs.push(new Ui());
}(window, jQuery));