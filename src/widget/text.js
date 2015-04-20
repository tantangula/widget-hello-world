/* global gadgets:false */

var RiseVision = RiseVision || {};
RiseVision.Text = {};

RiseVision.Text = (function(gadgets) {
  "use strict";

  var prefs = new gadgets.Prefs();

  /*
   *  Private Methods
   */
   
  function ready() {
    gadgets.rpc.call("", "rsevent_ready", null, prefs.getString("id"), true,
      true, true, true, true);
  }

  /*
   *  Public Methods
   */
   
  function getAdditionalParams(name, value) {
    if (name === "additionalParams" && value) {
      var params = JSON.parse(value);
      var title = params.message;
      
      document.getElementById("message").innerHTML = title;
    }

    ready();
  }

  return {
    getAdditionalParams: getAdditionalParams
  };
})(gadgets);
