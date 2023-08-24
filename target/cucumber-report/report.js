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
  "duration": 11395048739,
  "status": "passed"
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
  "duration": 513327833,
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
  "duration": 4880801599,
  "status": "passed"
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
  "duration": 15079424753,
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat org.junit.Assert.assertFalse(Assert.java:64)\n\tat org.junit.Assert.assertFalse(Assert.java:74)\n\tat br.com.luisdet.Pages.searchPage.checkMessage(searchPage.java:21)\n\tat br.com.luisdet.Steps.searchPageSteps.checkMessageOnScreen(searchPageSteps.java:29)\n\tat ✽.When check message on screen \"Github Username Luis\"(devtest.feature:9)\n",
  "status": "failed"
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
  "duration": 6627233631,
  "status": "passed"
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
  "duration": 852470885,
  "status": "passed"
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
  "duration": 461317358,
  "status": "passed"
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
  "duration": 10745084330,
  "status": "passed"
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
  "duration": 761657025,
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
  "duration": 3356322186,
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
  "duration": 210371100,
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
  "duration": 11550481382,
  "status": "passed"
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
  "duration": 1218078220,
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
  "duration": 3667915445,
  "status": "passed"
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
  "duration": 324004920,
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat org.junit.Assert.assertFalse(Assert.java:64)\n\tat org.junit.Assert.assertFalse(Assert.java:74)\n\tat br.com.luisdet.Pages.searchPage.checkMessageOnScreenGithub(searchPage.java:71)\n\tat br.com.luisdet.Steps.searchPageSteps.checkMessageOnScreenGithub(searchPageSteps.java:45)\n\tat ✽.When check message on screen github \"test123\"(devtest.feature:29)\n",
  "status": "failed"
});
});