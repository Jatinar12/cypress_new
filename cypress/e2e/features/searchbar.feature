Feature: Search Bar

    # @SEBA001 @Regression @MYD-40 @NotAutomated @Patient @Search
    Scenario Outline: Search Bar - Check for the search functionality for doctors
        Given user navigates to the "<Page Type>" page
        When user enters value "<Data>" in the "Search Doctors-placeholder" input field
        And user clicks on the "submit-type" field
        Then the corresponding page appears with the expected elements: "<Item>"
        Examples:
            | Page Type | Data | Item                               |
            | Homepage  | Wava | Dr. Wava Grant                     |
            | Homepage  | Ro   | Dr. Rosina Watsica,Dr. Roslyn Rath |

    # @SEBA002 @Regression @MYD-40 @NotAutomated @Patient @Specialities @Search
    Scenario Outline: Search Bar - Check for the search functionality for specialities
        Given user navigates to the "<Page Type>" page
        When user clicks on the "Specialities" field
        And user enters value "<value>" in the "Search a Speciality-placeholder" input field
        And user clicks on the "submitButton"
        And user clicks on the "Dental-title" field
        Then the corresponding page appears with the expected elements: "<Item>"
        Examples:
            | Page Type | value  | Item                                      |
            | Homepage  | Dental | Dr. Morgan Altenwerth,Dr. Akeem Lueilwitz |

    @SEBA003 @Regression @Sanity @MYD-40 @NotAutomated @Patient @Specialities @Search
    Scenario Outline: Search Bar - Check for the search functionality for doctors and specialities
        Given user navigates to the "<Page Type>" page
        When user enters value "<value>" in the "Select a Service-placeholder" input field
        And user enters value "<Data>" in the "Search Doctors-placeholder" input field
        And user clicks on the "submit-type" field
        Then the corresponding page appears with the expected elements: "<Item>"

        Examples:
            | Page Type | value                  | Data   | Item               |
            | Homepage  | Critical Care Medicine | Joesph | Dr. Joesph Hermann |
            | Homepage  | Cosmetology            | Tom    | Dr. Tom Thompson   |

    # @SEBA004 @Regression @MYD-40 @NotAutomated @Patient @Search
    Scenario Outline: Search Bar - Check for the search functionality with invalid doctor name
        Given user navigates to the "<Page Type>" page
        When user enters value "<Data>" in the "Search Doctors-placeholder" input field
        And user clicks on the "submit-type" field
        Then the corresponding page appears with the expected elements: "<message>"

        Examples:
            | Page Type | Data      | message   |
            | Homepage  | Rish123@# | Rish123@# |

    # @SEBA005 @Regression @MYD-40 @NotAutomated @Patient @Specialities @Search
    Scenario Outline: Search Bar - Check for the search functionality with invalid specialities
        Given user navigates to the "<Page Type>" page
        When user enters value "<value>" in the "Select a Service-placeholder" input field
        Then user can view message "No options"

        Examples:
            | Page Type | value    |
            | Homepage  | 1245@#$% |
