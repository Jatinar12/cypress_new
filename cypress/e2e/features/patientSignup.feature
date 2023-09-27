Feature: Patient Registration

  @PASI001 @Sanity @NotAutomated @Regression @PatientRegistration
  Scenario Outline:User navigates to the Patient Registration page and signs up
    Given user navigates to the "<Page type>" page
    When user clicks on the "login button"
    When user clicks on the "patientSignup button"
    When user enters value "<Name>" in the "full_name-id" input field
    And user selects checkbox with value "Gender" Type
    And user selects "<Date>" in the "date" select field
    And user selects "<Month>" in the "month" select field
    And user selects "<Year>" in the "year" select field
    And user enters value "<Email>" in the "email_address-id" input field
    And user enters value "<Mobile Number>" in the "mobile_number-id" input field
    And user enters value "<Password>" in the "password-id" input field
    And user enters value "<Password>" in the "confirm_password-id" input field
    # When user clicks on the "register button"
    # Then user can view message "<Registration Message>"
    Examples:
      | Page type | Name         | Email               | Mobile Number | Password    | Gender | Page Type            | Date | Month | Year | Registration Message    |
      | Homepage  | Hunter Brown | hunteeror@gmail.com | 4038780922    | 9797@Qwerty | Male   | Patient Registration | 5    | May   | 1998 | Signed up successfully! |


#   @PASI002  @PatientRegistration @Regression @NotAutomated @Patient
  Scenario Outline: User navigates to the Patient Registration and signs up with invalid data
    Given user navigates to the "<Page type>" page
    When user clicks on the "login button"
    When user clicks on the "patientSignup button"
    When user enters value "<Name>" in the "full_name-id" input field
    And user selects checkbox with value "Gender" Type
    And user enters value "<Email>" in the "email_address-id" input field
    And user enters value "<Mobile Number>" in the "mobile_number-id" input field
    And user enters value "<Password>" in the "password-id" input field
    Then user can view message "<Error Message>"
    Examples:
      | Page type | Name  | Email       | Mobile Number | Page Type            | Error Message                                |
      | Homepage  | sam.1 | abc@abc.com | 9541108298    | Patient Registration | Please enter a valid name!                   |
      | Homepage  | sam+- | abc@abc.com | 9876543211    | Patient Registration | Please enter a valid name!                   |
      | Homepage  | sam   | ab.com      | 9541108297    | Patient Registration | Please enter a valid e-mail address!         |
      | Homepage  | sam   | .com        | 9876543211    | Patient Registration | Please enter a valid e-mail address!         |
      | Homepage  | sam   | abc@abc.com | 954110829     | Patient Registration | Please enter a valid 10-digit mobile number! |
      | Homepage  | sam   | abc@abc.com | 987654115     | Patient Registration | Please enter a valid 10-digit mobile number! |

  @PASI003  @PatientRegistration @Regression @NotAutomated @Patient
  Scenario Outline: User is not able to register with invalid password
    Given user navigates to the "<Page type>" page
    When user clicks on the "login button"
    When user clicks on the "patientSignup button"
    When user enters value "<Name>" in the "full_name-id" input field
    And user selects checkbox with value "Gender" Type
    And user enters value "<Email>" in the "email_address-id" input field
    And user enters value "<Mobile Number>" in the "mobile_number-id" input field
    And user enters value "<Password>" in the "password-id" input field
    And user enters value "<Password>" in the "confirm_password-id" input field
    Then user can view message "<rule>"
    Examples:
      | Page type | Name      | Mobile Number | GenderType | Email       | Password       | rule                                         |
      | Homepage  | Test User | 9876543211    | Male       | abc@abc.com | Alp@1          | Must contain at least 6 characters.          |
      | Homepage  | Test User | 9876543211    | Male       | abc@abc.com | Alpha123       | Must contain at least one special character. |
      | Homepage  | Test User | 9876543211    | Male       | abc@abc.com | alpha@123      | Must contain uppercase letter.               |
      | Homepage  | Test User | 9876543211    | Male       | abc@abc.com | ALPHA@12       | Must contain lowercase letter.               |
      | Homepage  | Test User | 9876543211    | Male       | abc@abc.com | 12345678       | Must contain at least one special character. |
      | Homepage  | Test User | 9876543211    | Male       | abc@abc.com | Alphaitsystems | Must contain at least one special character. |
      | Homepage  | Test User | 9876543211    | Male       | abc@abc.com | !@#$%^         | Must contain lowercase letter.               |
      | Homepage  | Test User | 9876543211    | Male       | abc@abc.com | Alpha@12       | Passwords must match.                        |

  @PASI004 @PatientRegistration @Regression @NotAutomated @Patient
  Scenario Outline: User is not able to register with existing mobile number & email
    Given user navigates to the "<Page type>" page
    When user clicks on the "login button"
    When user clicks on the "patientSignup button"
    When user enters value "<Name>" in the "full_name-id" input field
    And user selects checkbox with value "Gender" Type
    And user selects "<Date>" in the "date" select field
    And user selects "<Month>" in the "month" select field
    And user selects "<Year>" in the "year" select field
    And user enters value "<Email>" in the "email_address-id" input field
    And user enters value "<Mobile Number>" in the "mobile_number-id" input field
    And user enters value "<Password>" in the "password-id" input field
    And user enters value "<Password>" in the "confirm_password-id" input field
    And user enters value "<Mobile Number>" in the "mobile_number-id" input field
    And user enters value "<Email>" in the "email_address-id" input field
    Then user can view message "<Error Message>"
    Examples:
      | Page type | Name         | Email                    | Mobile Number | Password    | Gender Type | Page Type            | Date | Month | Year | Email              | Mobile Number | Error Message                 |
      | Homepage  | Hunter Brown | huntrqssrmrown@gmail.com | 8754567894    | 9797@Qwerty | Male        | Patient Registration | 5    | 5     | 1998 | test@testuser1.com | 9541308298    | Mobile number already exists! |
