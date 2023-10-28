Feature: Google Login

  Scenario Outline: Sucessfully Login with valid credential
    Given user navigates to the "<Page type>" page
    When user clicks on the "searchbar"
    # When user enters the user "<email>" in the "enterinput" input field
    # Then the corresponding page appears with the expected elements: "<Element>"

    Examples:
      | Page type | email    | password      | Element        |
      | Homepage  | you tube | USER_PASSWORD | 20+ Specialist |