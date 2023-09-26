# Feature: Error Page

#   @ERPA001 @MYD-83 @Regression @NotAutomated @Patient @Error
#   Scenario Outline: Checking the visibility of the UI element of 404 error page
#       Given user navigates to the "<Page Type>" page
#       And the corresponding page appears with the expected elements: "<Item>"
#       Examples:
#         | Page Type | Item  |
#         | 404 error | OOPS! |


#   @ERPA002 @MYD-83 @Regression @Sanity @NotAutomated @Patient @Error
#   Scenario Outline: Checking the functionality of 404 error page
#     Given user logs in with "<Role>" credentials
#     When user clicks on the "<Text Links>" field
#     Then the corresponding page appears with the expected elements: "<Item>"
#     Examples:
#       | Page Type | Role    | Text Links       | Item                          |
#       | 404 error | PATIENT | My Appointments  | My Appointment                |
#       | 404 error | PATIENT | Account Settings | My Profile                    |
#       | 404 error | PATIENT | Doctors          | 20+ Specialities,110+ Doctors |


#   @ERPA003 @MYD-83 @Regression @NotAutomated @Error
#   Scenario Outline: Checking the functionality of 404 error page without logging in
#     Given user navigates to the "<Page Type>" page
#     When user clicks on the "<Text Links>" field
#     Then the corresponding page appears with the expected elements: "<Item>"
#     Examples:
#       | Page Type | Text Links   | Item                           |
#       | 404 error | Doctors      | 20+ Specialities,110+ Doctors  |
#       | 404 error | Login/SignUp | Login,Forgot Password?,Sign up |

#   @ERPA004 @MYD-83 @Regression @Sanity @NotAutomated @Doctor @Error
#   Scenario Outline: Checking the functionality of 404 error page for doctors
#     Given user logs in with "<Role>" credentials
#     And user navigates to the "<Page Type>" page
#     When user clicks on the "<Text Links>" field
#     Then the corresponding page appears with the expected elements: "<Item>"
#     Examples:
#       | Page Type | Role   | Text Links       | Item                                        |
#       | 404 error | DOCTOR | My Appointments  | My Appointment,No appointments are made yet |
#       | 404 error | DOCTOR | Account Settings | My Profile                                  |