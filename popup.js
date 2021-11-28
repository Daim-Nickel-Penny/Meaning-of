"use strict";

let control = document.getElementById("meaningOfEnabled");
chrome.storage.sync.get("isEnabled", function (data) {
  control.checked = data.isEnabled;
});
control.onchange = function () {
  chrome.storage.sync.set(
    {
      isEnabled: control.checked,
    },
    () => {
      console.log(`Meaning Of ${control.checked ? "enabled" : "disabled"}`);
    }
  );
};

let anchor = document.getElementById("meaningOfAnchor");
chrome.storage.sync.get("anchor", function (data) {
  anchor.value = data.anchor;
});
anchor.onchange = function () {
  chrome.storage.sync.set(
    {
      anchor: anchor.value,
    },
    () => {
      console.log(`Meaning Of anchored at ${anchor.value}`);
    }
  );
};
