Feature: Dashboard

  # @DA001 @Regression @Automated @Dashboard @Patient @MYD-76
  Scenario Outline: Checking the visibility of UI element
    Given user navigates to the "<Page type>" page
    And the corresponding page appears with the expected elements: "<Item>"

    Examples:
      | Page type | Item                          |
      | Homepage  | 20+ Specialities,120+ Doctors |

  # @DA002 @Regression @Sanity @Automated @Dashboard @SpecialitiesCard @Patient @MYD-76
  Scenario Outline: Check the functionality of Specialities Card
    Given user navigates to the "<Page type>" page
    When user clicks on the "<button>"
    Then the corresponding page appears with the expected elements: "<Item>"
      
    Examples:
      | Page type | button          | Item                         |
      | Homepage  | specialityCard  | Dr. Wava Grant,Dr. Eden Dach |


  # @DA003 @Regression @Automated @Dashboard @SpecialitiesCard @Patient @MYD-76
  Scenario Outline: Check the functionality of View all specialities link
    Given user navigates to the "<Page type>" page
    When user clicks on the "View all Specialities..." field
    Then the corresponding page appears with the expected elements: "<Item>"

    Examples:
      | Page type | Item                                                        |
      | Homepage  | Cosmetology,Anethesiology,Development Behavioral Pediatrics |

  # @DA004 @Regression @Sanity @Automated @Dashboard @DoctorCard @Patient @MYD-76
  Scenario Outline: Check the functionality of Doctor card
    Given user navigates to the "<Page type>" page
    When user clicks on the "<Doctor>" field
    Then the corresponding page appears with the expected elements: "<Item>"

  Examples:
    | Page type | Doctor               | Item                        |
    | Homepage  | Dr. Erick Mccullough | Consultation Fee: Rs. 3349  |

  # @DA005 @Regression @Automated @Dashboard @Pagination @Patient @MYD-31
  Scenario Outline: Check the functionality of pagination on doctorCards by clicking on number
    Given user navigates to the "<Page Type>" page
    And user can view list of "doctorCards"
    And User is on "<Number>" page of "dashboard"
    When user clicks on "<Button>" page of "dashboard"
    Then User is on "<Value>" page of "dashboard"

    Examples:
      | Page Type | Number | Button | Value | text |
      | Homepage  | 3      | 2      | 2     | 3    |
