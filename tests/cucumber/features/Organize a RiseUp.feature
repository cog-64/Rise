Feature: Organizer creates a rise up action

  As an organizer
  I want to define the connection and location information for an uprising
  So that people can join in to a particular action
  
  The story above is set to the context of the reader; it is for documentation context rather than for test exectution..
  
  
Background:An organizer needs to create the access informaton/parameters that citizens will use to connect to the action
  Given organizer has predefined access to the administrative UI

@dev
Scenario: First access into the admin site
  When I navigate to "\"
  Then My security access should be checked
    
    
@dev
Scenario: Organizer lacks proper credentials
  When I provide insufficient credentials
  Then Access denied message is shown to user
  

  @dev
  Scenario: Organizer enters acceptable credentials
    When I provide validated credentials
    Then I am directed to the select uprising screen for that organizer  
    

    @dev
    Scenario: 
      When 
      Then   
      
    
    
  
  
      
    
    
  
  