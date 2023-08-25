$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("devtest.feature");
formatter.feature({
  "line": 1,
  "name": "Dev Test Cases",
  "description": "",
  "id": "dev-test-cases",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "TS:[\"\u003cTS\u003e\"] - [health Check Page]  - \"\u003cScenario\u003e\" - \"\u003cDescription\u003e\"",
  "description": "",
  "id": "dev-test-cases;ts:[\"\u003cts\u003e\"]---[health-check-page]----\"\u003cscenario\u003e\"---\"\u003cdescription\u003e\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@regressive"
    },
    {
      "line": 7,
      "name": "@e2e"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "check message on screen \"\u003cmessage\u003e\"",
  "keyword": "When "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "dev-test-cases;ts:[\"\u003cts\u003e\"]---[health-check-page]----\"\u003cscenario\u003e\"---\"\u003cdescription\u003e\";",
  "rows": [
    {
      "cells": [
        "TS",
        "Scenario",
        "Description",
        "message"
      ],
      "line": 11,
      "id": "dev-test-cases;ts:[\"\u003cts\u003e\"]---[health-check-page]----\"\u003cscenario\u003e\"---\"\u003cdescription\u003e\";;1"
    },
    {
      "cells": [
        "001",
        "001",
        "Check Page text is display",
        "Github Username"
      ],
      "line": 12,
      "id": "dev-test-cases;ts:[\"\u003cts\u003e\"]---[health-check-page]----\"\u003cscenario\u003e\"---\"\u003cdescription\u003e\";;2"
    },
    {
      "cells": [
        "001",
        "002",
        "Check Page text inst display",
        "Github Username Luis"
      ],
      "line": 13,
      "id": "dev-test-cases;ts:[\"\u003cts\u003e\"]---[health-check-page]----\"\u003cscenario\u003e\"---\"\u003cdescription\u003e\";;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "open the test environment \"http://localhost:3000/\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:3000/",
      "offset": 27
    }
  ],
  "location": "searchPageSteps.openTheTestEnvironment(String)"
});
formatter.result({
  "duration": 14865651242,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: net::ERR_CONNECTION_REFUSED\n  (Session info: chrome\u003d116.0.5845.110)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027Braziltest iMac\u0027, ip: \u0027fe80:0:0:0:14e5:472d:be96:787c%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002713.4.1\u0027, java.version: \u002711.0.19\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.110, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: /var/folders/49/9k0n0b6s1v3...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:52385}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: a17f12c10cbf079354cf65d028eb4420\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:276)\n\tat br.com.luisdet.interfaces.Driverfactory.OpenBrowserChrome(Driverfactory.java:47)\n\tat br.com.luisdet.interfaces.Driverfactory.getDriver(Driverfactory.java:21)\n\tat br.com.luisdet.Steps.searchPageSteps.openTheTestEnvironment(searchPageSteps.java:16)\n\tat ✽.Given open the test environment \"http://localhost:3000/\"(devtest.feature:4)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 12,
  "name": "TS:[\"001\"] - [health Check Page]  - \"001\" - \"Check Page text is display\"",
  "description": "",
  "id": "dev-test-cases;ts:[\"\u003cts\u003e\"]---[health-check-page]----\"\u003cscenario\u003e\"---\"\u003cdescription\u003e\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@regressive"
    },
    {
      "line": 7,
      "name": "@e2e"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "check message on screen \"Github Username\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "Github Username",
      "offset": 25
    }
  ],
  "location": "searchPageSteps.checkMessageOnScreen(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "open the test environment \"http://localhost:3000/\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:3000/",
      "offset": 27
    }
  ],
  "location": "searchPageSteps.openTheTestEnvironment(String)"
});
formatter.result({
  "duration": 7134242183,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: net::ERR_CONNECTION_REFUSED\n  (Session info: chrome\u003d116.0.5845.110)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027Braziltest iMac\u0027, ip: \u0027fe80:0:0:0:14e5:472d:be96:787c%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002713.4.1\u0027, java.version: \u002711.0.19\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.110, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: /var/folders/49/9k0n0b6s1v3...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:52416}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: ce7cec3e0af00cfc9754eefecb073b7f\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:276)\n\tat br.com.luisdet.interfaces.Driverfactory.OpenBrowserChrome(Driverfactory.java:47)\n\tat br.com.luisdet.interfaces.Driverfactory.getDriver(Driverfactory.java:21)\n\tat br.com.luisdet.Steps.searchPageSteps.openTheTestEnvironment(searchPageSteps.java:16)\n\tat ✽.Given open the test environment \"http://localhost:3000/\"(devtest.feature:4)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 13,
  "name": "TS:[\"001\"] - [health Check Page]  - \"002\" - \"Check Page text inst display\"",
  "description": "",
  "id": "dev-test-cases;ts:[\"\u003cts\u003e\"]---[health-check-page]----\"\u003cscenario\u003e\"---\"\u003cdescription\u003e\";;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@regressive"
    },
    {
      "line": 7,
      "name": "@e2e"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "check message on screen \"Github Username Luis\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "Github Username Luis",
      "offset": 25
    }
  ],
  "location": "searchPageSteps.checkMessageOnScreen(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "TS:[\"\u003cTS\u003e\"] - [Check Result Page]  - \"\u003cScenario\u003e\" - \"\u003cDescription\u003e\"",
  "description": "",
  "id": "dev-test-cases;ts:[\"\u003cts\u003e\"]---[check-result-page]----\"\u003cscenario\u003e\"---\"\u003cdescription\u003e\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@regressive1"
    },
    {
      "line": 15,
      "name": "@e2e"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "search for a repo \"\u003crepo\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "check message on screen \"\u003cmessage\u003e\"",
  "keyword": "When "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "dev-test-cases;ts:[\"\u003cts\u003e\"]---[check-result-page]----\"\u003cscenario\u003e\"---\"\u003cdescription\u003e\";",
  "rows": [
    {
      "cells": [
        "TS",
        "Scenario",
        "Description",
        "repo",
        "message"
      ],
      "line": 20,
      "id": "dev-test-cases;ts:[\"\u003cts\u003e\"]---[check-result-page]----\"\u003cscenario\u003e\"---\"\u003cdescription\u003e\";;1"
    },
    {
      "cells": [
        "002",
        "001",
        "Search for a repo in input field and check result",
        "1",
        "discourse_docker"
      ],
      "line": 21,
      "id": "dev-test-cases;ts:[\"\u003cts\u003e\"]---[check-result-page]----\"\u003cscenario\u003e\"---\"\u003cdescription\u003e\";;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "open the test environment \"http://localhost:3000/\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:3000/",
      "offset": 27
    }
  ],
  "location": "searchPageSteps.openTheTestEnvironment(String)"
});
formatter.result({
  "duration": 7445314204,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: net::ERR_CONNECTION_REFUSED\n  (Session info: chrome\u003d116.0.5845.110)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027Braziltest iMac\u0027, ip: \u0027fe80:0:0:0:14e5:472d:be96:787c%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002713.4.1\u0027, java.version: \u002711.0.19\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.110, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: /var/folders/49/9k0n0b6s1v3...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:52448}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: d1c3b55f6e65c7bc60e19aa45176efeb\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:276)\n\tat br.com.luisdet.interfaces.Driverfactory.OpenBrowserChrome(Driverfactory.java:47)\n\tat br.com.luisdet.interfaces.Driverfactory.getDriver(Driverfactory.java:21)\n\tat br.com.luisdet.Steps.searchPageSteps.openTheTestEnvironment(searchPageSteps.java:16)\n\tat ✽.Given open the test environment \"http://localhost:3000/\"(devtest.feature:4)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 21,
  "name": "TS:[\"002\"] - [Check Result Page]  - \"001\" - \"Search for a repo in input field and check result\"",
  "description": "",
  "id": "dev-test-cases;ts:[\"\u003cts\u003e\"]---[check-result-page]----\"\u003cscenario\u003e\"---\"\u003cdescription\u003e\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@regressive1"
    },
    {
      "line": 15,
      "name": "@e2e"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "search for a repo \"1\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "check message on screen \"discourse_docker\"",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 19
    }
  ],
  "location": "searchPageSteps.searchForARepoRepo(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "discourse_docker",
      "offset": 25
    }
  ],
  "location": "searchPageSteps.checkMessageOnScreen(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 26,
  "name": "TS:[\"\u003cTS\u003e\"] - [Check Result Page]  - \"\u003cScenario\u003e\" - \"\u003cDescription\u003e\"",
  "description": "",
  "id": "dev-test-cases;ts:[\"\u003cts\u003e\"]---[check-result-page]----\"\u003cscenario\u003e\"---\"\u003cdescription\u003e\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@regressive2"
    },
    {
      "line": 25,
      "name": "@e2e"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "search for a repo \"\u003crepo\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "navigate on repo \"\u003cresult\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "check message on screen github \"\u003cmessage\u003e\"",
  "keyword": "When "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "dev-test-cases;ts:[\"\u003cts\u003e\"]---[check-result-page]----\"\u003cscenario\u003e\"---\"\u003cdescription\u003e\";",
  "rows": [
    {
      "cells": [
        "TS",
        "Scenario",
        "Description",
        "repo",
        "result",
        "message"
      ],
      "line": 31,
      "id": "dev-test-cases;ts:[\"\u003cts\u003e\"]---[check-result-page]----\"\u003cscenario\u003e\"---\"\u003cdescription\u003e\";;1"
    },
    {
      "cells": [
        "002",
        "001",
        "Search for a repo in input field and check result",
        "11",
        "2D-Platformer-Engine",
        "GuodGameEngine"
      ],
      "line": 32,
      "id": "dev-test-cases;ts:[\"\u003cts\u003e\"]---[check-result-page]----\"\u003cscenario\u003e\"---\"\u003cdescription\u003e\";;2"
    },
    {
      "cells": [
        "002",
        "001",
        "Search for a repo in input field and check result",
        "11",
        "2D-Platformer-Engine",
        "test123"
      ],
      "line": 33,
      "id": "dev-test-cases;ts:[\"\u003cts\u003e\"]---[check-result-page]----\"\u003cscenario\u003e\"---\"\u003cdescription\u003e\";;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "open the test environment \"http://localhost:3000/\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:3000/",
      "offset": 27
    }
  ],
  "location": "searchPageSteps.openTheTestEnvironment(String)"
});
formatter.result({
  "duration": 14167049184,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: net::ERR_CONNECTION_REFUSED\n  (Session info: chrome\u003d116.0.5845.110)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027Braziltest iMac\u0027, ip: \u0027fe80:0:0:0:14e5:472d:be96:787c%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002713.4.1\u0027, java.version: \u002711.0.19\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.110, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: /var/folders/49/9k0n0b6s1v3...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:52485}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: f9ddb9b7522de6cc404efb82ff9ba475\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:276)\n\tat br.com.luisdet.interfaces.Driverfactory.OpenBrowserChrome(Driverfactory.java:47)\n\tat br.com.luisdet.interfaces.Driverfactory.getDriver(Driverfactory.java:21)\n\tat br.com.luisdet.Steps.searchPageSteps.openTheTestEnvironment(searchPageSteps.java:16)\n\tat ✽.Given open the test environment \"http://localhost:3000/\"(devtest.feature:4)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 32,
  "name": "TS:[\"002\"] - [Check Result Page]  - \"001\" - \"Search for a repo in input field and check result\"",
  "description": "",
  "id": "dev-test-cases;ts:[\"\u003cts\u003e\"]---[check-result-page]----\"\u003cscenario\u003e\"---\"\u003cdescription\u003e\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@regressive2"
    },
    {
      "line": 25,
      "name": "@e2e"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "search for a repo \"11\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "navigate on repo \"2D-Platformer-Engine\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "check message on screen github \"GuodGameEngine\"",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 19
    }
  ],
  "location": "searchPageSteps.searchForARepoRepo(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2D-Platformer-Engine",
      "offset": 18
    }
  ],
  "location": "searchPageSteps.navigateOnRepo(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "GuodGameEngine",
      "offset": 32
    }
  ],
  "location": "searchPageSteps.checkMessageOnScreenGithub(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "open the test environment \"http://localhost:3000/\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:3000/",
      "offset": 27
    }
  ],
  "location": "searchPageSteps.openTheTestEnvironment(String)"
});
formatter.result({
  "duration": 30860485943,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: net::ERR_CONNECTION_REFUSED\n  (Session info: chrome\u003d116.0.5845.110)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027Braziltest iMac\u0027, ip: \u0027fe80:0:0:0:14e5:472d:be96:787c%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002713.4.1\u0027, java.version: \u002711.0.19\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.110, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: /var/folders/49/9k0n0b6s1v3...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:52534}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: ebd3795424dc2a8e85841a60f5a071d4\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:276)\n\tat br.com.luisdet.interfaces.Driverfactory.OpenBrowserChrome(Driverfactory.java:47)\n\tat br.com.luisdet.interfaces.Driverfactory.getDriver(Driverfactory.java:21)\n\tat br.com.luisdet.Steps.searchPageSteps.openTheTestEnvironment(searchPageSteps.java:16)\n\tat ✽.Given open the test environment \"http://localhost:3000/\"(devtest.feature:4)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 33,
  "name": "TS:[\"002\"] - [Check Result Page]  - \"001\" - \"Search for a repo in input field and check result\"",
  "description": "",
  "id": "dev-test-cases;ts:[\"\u003cts\u003e\"]---[check-result-page]----\"\u003cscenario\u003e\"---\"\u003cdescription\u003e\";;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@regressive2"
    },
    {
      "line": 25,
      "name": "@e2e"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "search for a repo \"11\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "navigate on repo \"2D-Platformer-Engine\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "check message on screen github \"test123\"",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 19
    }
  ],
  "location": "searchPageSteps.searchForARepoRepo(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2D-Platformer-Engine",
      "offset": 18
    }
  ],
  "location": "searchPageSteps.navigateOnRepo(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test123",
      "offset": 32
    }
  ],
  "location": "searchPageSteps.checkMessageOnScreenGithub(String)"
});
formatter.result({
  "status": "skipped"
});
});