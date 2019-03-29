var defaults = [];
defaults["teamkey"] = "frc686";
defaults["eventkey"] = "2019chcmp";
defaults["streamurl"] = "[auto]";
defaults["showsponsers"] = 1;
defaults["sponserpics"] = [
  "frc.magrittescow.com/bovine/pits/img/sponsors/1.png",
  "frc.magrittescow.com/bovine/pits/img/sponsors/2.png",
  "frc.magrittescow.com/bovine/pits/img/sponsors/3.png",
  "frc.magrittescow.com/bovine/pits/img/sponsors/4.png",
  "frc.magrittescow.com/bovine/pits/img/sponsors/5.png",
  "frc.magrittescow.com/bovine/pits/img/sponsors/6.png",
  "frc.magrittescow.com/bovine/pits/img/sponsors/7.png",
  "frc.magrittescow.com/bovine/pits/img/sponsors/8.png",
  "frc.magrittescow.com/bovine/pits/img/sponsors/9.png",
  "frc.magrittescow.com/bovine/pits/img/sponsors/10.png",
  "frc.magrittescow.com/bovine/pits/img/sponsors/11.png",
  "frc.magrittescow.com/bovine/pits/img/sponsors/12.png"
];

function loadDefaults(loadsetup) {
    initSettings();
    setSetting("teamkey", defaults["teamkey"]);
    setSetting("eventkey", defaults["eventkey"]);
    setSetting("showsponsers", defaults["showsponsers"]);
    setSetting("sponserpics", JSON.stringify(defaults["sponserpics"]));
    if (loadsetup) loadSetup();
    if (defaults["streamurl"] == "[auto]") {
        doTryGetStreamCustomEvent(defaults["eventkey"], false);
    } else {
        setSetting("streamurl", defaults["showsponsers"]);
    }
    if (loadsetup) {
        doSave();
        loadSetup();
        doSave();
    }
}

function clearSetup() {
    document.getElementsByName("input-teamkey")[0].value = "";
    document.getElementsByName("input-eventkey")[0].value = "";
    document.getElementsByName("input-streamurl")[0].value = "";
    document.getElementsByName("input-sponserpics")[0].value = "";
    $("#input-showsponsers:checked").prop("checked", false);
    doSave();
    loadSetup();
}
