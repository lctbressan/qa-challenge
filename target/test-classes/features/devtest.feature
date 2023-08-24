Feature: Dev Test Cases

  Background:
   Given open the test environment "http://localhost:3000/"


  @regressive @e2e
  Scenario Outline: TS:["<TS>"] - [health Check Page]  - "<Scenario>" - "<Description>"
    When check message on screen "<message>"
    Examples:
      | TS      | Scenario      | Description                     |message                 |
      | 001     | 001           | Check Page text is display     |Github Username          |
      | 001     | 002           | Check Page text inst display   |Github Username Luis     |

  @regressive1  @e2e
  Scenario Outline: TS:["<TS>"] - [Check Result Page]  - "<Scenario>" - "<Description>"
    When search for a repo "<repo>"
    When check message on screen "<message>"
    Examples:
      | TS      | Scenario      | Description                                           |repo|message                 |
      | 002     | 001           | Search for a repo in input field and check result     |   1|discourse_docker        |



  @regressive2  @e2e
  Scenario Outline: TS:["<TS>"] - [Check Result Page]  - "<Scenario>" - "<Description>"
    When search for a repo "<repo>"
    And navigate on repo "<result>"
    When check message on screen github "<message>"
    Examples:
      | TS      | Scenario      | Description                                           |repo|result              |message                 |
      | 002     | 001           | Search for a repo in input field and check result     |  11|2D-Platformer-Engine|GuodGameEngine          |
      | 002     | 001           | Search for a repo in input field and check result     |  11|2D-Platformer-Engine|test123                 |

