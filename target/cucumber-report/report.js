$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("devtest.feature");
formatter.feature({
  "line": 1,
  "name": "Dev Test Functions",
  "description": "",
  "id": "dev-test-functions",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 26,
  "name": "TS:[\"\u003cTS\u003e\"] - [health Check Page]  - \"\u003cScenario\u003e\" - \"\u003cDescription\u003e\"",
  "description": "",
  "id": "dev-test-functions;ts:[\"\u003cts\u003e\"]---[health-check-page]----\"\u003cscenario\u003e\"---\"\u003cdescription\u003e\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@regressive2"
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
  "id": "dev-test-functions;ts:[\"\u003cts\u003e\"]---[health-check-page]----\"\u003cscenario\u003e\"---\"\u003cdescription\u003e\";",
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
      "id": "dev-test-functions;ts:[\"\u003cts\u003e\"]---[health-check-page]----\"\u003cscenario\u003e\"---\"\u003cdescription\u003e\";;1"
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
      "id": "dev-test-functions;ts:[\"\u003cts\u003e\"]---[health-check-page]----\"\u003cscenario\u003e\"---\"\u003cdescription\u003e\";;2"
    },
    {
      "cells": [
        "002",
        "001",
        "Search for a repo in input field and check result",
        "11",
        "2D-Platformer-Engine",
        "teste123"
      ],
      "line": 33,
      "id": "dev-test-functions;ts:[\"\u003cts\u003e\"]---[health-check-page]----\"\u003cscenario\u003e\"---\"\u003cdescription\u003e\";;3"
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
  "duration": 5873473030,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "TS:[\"002\"] - [health Check Page]  - \"001\" - \"Search for a repo in input field and check result\"",
  "description": "",
  "id": "dev-test-functions;ts:[\"\u003cts\u003e\"]---[health-check-page]----\"\u003cscenario\u003e\"---\"\u003cdescription\u003e\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@regressive2"
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
  "duration": 617868416,
  "status": "passed"
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
  "duration": 3101892917,
  "status": "passed"
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
  "duration": 5152850391,
  "status": "passed"
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
  "duration": 5267777670,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "TS:[\"002\"] - [health Check Page]  - \"001\" - \"Search for a repo in input field and check result\"",
  "description": "",
  "id": "dev-test-functions;ts:[\"\u003cts\u003e\"]---[health-check-page]----\"\u003cscenario\u003e\"---\"\u003cdescription\u003e\";;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@regressive2"
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
  "name": "check message on screen github \"teste123\"",
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
  "duration": 716280044,
  "status": "passed"
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
  "duration": 283956518,
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat org.junit.Assert.assertFalse(Assert.java:64)\n\tat org.junit.Assert.assertFalse(Assert.java:74)\n\tat br.com.luisdet.Pages.searchPage.navigateOnRepo(searchPage.java:59)\n\tat br.com.luisdet.Steps.searchPageSteps.navigateOnRepo(searchPageSteps.java:40)\n\tat ✽.And navigate on repo \"2D-Platformer-Engine\"(devtest.feature:28)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "teste123",
      "offset": 32
    }
  ],
  "location": "searchPageSteps.checkMessageOnScreenGithub(String)"
});
formatter.result({
  "status": "skipped"
});
});