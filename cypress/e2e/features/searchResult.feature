# Feature: Search page result functionality

#     # https://team-1628225445927.atlassian.net/browse/MYD-156
#     # @MYD-156
#     # @Regression

#     Scenario Outline: check for the search result page using search keyword  or specialization
#         Given user navigates to the "<Page Type>" page
#         And "search" keyword is "<keyword>"
#         And "speciality" is "<special>"
#         And search "logo" is clicked
#         And "doctor" per page is "<count>"
#         Then "user" should see "<keyword>"

#         Examples:
#             | Page Type | keyword | special | page | count |
#             | Homepage  | Sara    | Bone    | 1    | 1     |

#     # https://team-1628225445927.atlassian.net/browse/MYD-156
#     # @MYD-156

#     Scenario Outline: check for the search result page using search keyword
#         Given user navigates to the "<Page Type>" page
#         And "search" keyword is "<keyword>"
#         And search "logo" is clicked
#         And "doctor" per page is "<count>"
#         Then "user" should see "<keyword>"

#     Examples:
#             | Page Type | keyword | page | count |
#             | Homepage  | Sara    | 1    | 1     |

#     # https://team-1628225445927.atlassian.net/browse/MYD-156
#     # @MYD-156

#     Scenario Outline: check for the search result page using specialization
#         Given user navigates to the "<Page Type>" page
#         And "speciality" is "<special>"
#         And search "logo" is clicked
#         And "doctor" per page is "<count>"
#         Then "user" should see "<Special>"

#         Examples:
#             | Page Type | special                        | page | count |
#             | Homepage  | Clinical Nutrition & Dietetics | 12    | 12   |


#     #https://team-1628225445927.atlassian.net/browse/MYD-156
#     # @MYD-156

#     Scenario Outline: check for the search result page using unexpected string in search keyword or specialization
#         Given user navigates to the "<Page Type>" page
#         And "search" keyword is "<keyword>"
#         And "speciality" is "<special>"
#         And search "logo" is clicked
#         Then Result contain "error message" "<message>"

#         Examples:
#             | Page Type | keyword | special | message         |
#             | Homepage  | @@@!@   | 78dbxbd | No result found |
#             | Homepage  | @@@!@   | __      | No result found |
#             | Homepage  | __      | @@@!@   | No result found |

#     # # https://team-1628225445927.atlassian.net/browse/MYD-156
#     # # @MYD-156

#     Scenario Outline: check for the search result page using no input given
#         Given user navigates to the "<Page Type>" page
#         And "speciality" is "<special>"
#         And search "logo" is clicked
#         Then result page is move to "DASHBOARD" page
#         Examples:
#             | Page Type | keyword | special |
#             | Homepage  |         | __      |