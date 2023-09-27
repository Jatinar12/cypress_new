Feature: Login Page

  @Regression @Complete @UI  @Automated
  Scenario Outline: Sucessfully Login with valid credential
    Given user navigates to the "<Page type>" page
    When user clicks on the "Login" field
    And user enters the user "<email>" in the "emailOrMobile" input field
    And user enters the user "<password>" in the "password" input field
    And user clicks on the "submit button"
    Then user should navigate to the "Homepage"

    Examples:
      | Page type | email      | password      |
      | Homepage  | USER_EMAIL | USER_PASSWORD |

