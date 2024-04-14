---
  layout: default.md
  title: "Developer Guide"
  pageNav: 3
---

# CulinaryContacts Developer Guide

<!-- * Table of Contents -->
<page-nav-print />

--------------------------------------------------------------------------------------------------------------------

## **Acknowledgements**

* UI Rendering: [JavaFX](https://openjfx.io/)
* Testing Framework: [JUnit5](https://github.com/junit-team/junit5)
* JSON Data Management: [Jackson](https://github.com/FasterXML/jackson)
* Base UI Framework: [AddressBook Level-3](https://se-education.org/addressbook-level3/)

--------------------------------------------------------------------------------------------------------------------

## **Setting up, getting started**

Refer to the guide [Setting up and getting started](SettingUp.md).

--------------------------------------------------------------------------------------------------------------------

## **Design**

### Architecture

<puml src="diagrams/ArchitectureDiagram.puml" width="280" />

The architecture diagram given above explains the high-level design of the App.

Given below is a quick overview of main components and how they interact with each other.

**Main components of the architecture**

**`Main`** (consisting of classes [`Main`](https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/Main.java) and [`MainApp`](https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/MainApp.java)) is in charge of the app launch and shut down.
* At app launch, it initializes the other components in the correct sequence, and connects them up with each other.
* At shut down, it shuts down the other components and invokes cleanup methods where necessary.

The bulk of the app's work is done by the following four components:

* [**`UI`**](#ui-component): The UI of the App.
* [**`Logic`**](#logic-component): The command executor.
* [**`Model`**](#model-component): Holds the data of the App in memory.
* [**`Storage`**](#storage-component): Reads data from, and writes data to, the hard disk.

[**`Commons`**](#common-classes) represents a collection of classes used by multiple other components.

**How the architecture components interact with each other**

The sequence diagram below shows how the components interact with each other for the scenario where the user issues the command `delete 1`.

<puml src="diagrams/ArchitectureSequenceDiagram.puml" width="574" />

Each of the four main components (also shown in the diagram above),

* defines its *API* in an `interface` with the same name as the Component.
* implements its functionality using a concrete `{Component Name}Manager` class (which follows the corresponding API `interface` mentioned in the previous point.

For example, the `Logic` component defines its API in the `Logic.java` interface and implements its functionality using the `LogicManager.java` class which follows the `Logic` interface. Other components interact with a given component through its interface rather than the concrete class (reason: to prevent outside component's being coupled to the implementation of a component), as illustrated in the (partial) class diagram below.

<puml src="diagrams/ComponentManagers.puml" width="300" />

The sections below give more details of each component.

### UI component

The **API** of this component is specified in [`Ui.java`](https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/ui/Ui.java)

<puml src="diagrams/UiClassDiagram.puml" alt="Structure of the UI Component"/>

The UI consists of a `MainWindow` that is made up of parts e.g.`CommandBox`, `ResultDisplay`, `PersonListPanel`, `StatusBarFooter` etc. All these, including the `MainWindow`, inherit from the abstract `UiPart` class which captures the commonalities between classes that represent parts of the visible GUI.

The `UI` component uses the JavaFx UI framework. The layout of these UI parts are defined in matching `.fxml` files that are in the `src/main/resources/view` folder. For example, the layout of the [`MainWindow`](https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/ui/MainWindow.java) is specified in [`MainWindow.fxml`](https://github.com/se-edu/addressbook-level3/tree/master/src/main/resources/view/MainWindow.fxml)

The `UI` component,

* executes user commands using the `Logic` component.
* listens for changes to `Model` data so that the UI can be updated with the modified data.
* keeps a reference to the `Logic` component, because the `UI` relies on the `Logic` to execute commands.
* depends on some classes in the `Model` component, as it displays `Person` object residing in the `Model`.

### Logic component

**API** : [`Logic.java`](https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/logic/Logic.java)

Here's a (partial) class diagram of the `Logic` component:

<puml src="diagrams/LogicClassDiagram.puml" width="550"/>

The sequence diagram below illustrates the interactions within the `Logic` component, taking `execute("delete 1")` API call as an example.

<puml src="diagrams/DeleteSequenceDiagram.puml" alt="Interactions Inside the Logic Component for the `delete 1` Command" />

<box type="info" seamless>

**Note:** The lifeline for `DeleteCommandParser` should end at the destroy marker (X) but due to a limitation of PlantUML, the lifeline continues till the end of diagram.
</box>

How the `Logic` component works:

1. When `Logic` is called upon to execute a command, it is passed to an `AddressBookParser` object which in turn creates a parser that matches the command (e.g., `DeleteCommandParser`) and uses it to parse the command.
1. This results in a `Command` object (more precisely, an object of one of its subclasses e.g., `DeleteCommand`) which is executed by the `LogicManager`.
1. The command can communicate with the `Model` when it is executed (e.g. to delete a person).<br>
   Note that although this is shown as a single step in the diagram above (for simplicity), in the code it can take several interactions (between the command object and the `Model`) to achieve.
1. The result of the command execution is encapsulated as a `CommandResult` object which is returned back from `Logic`.

Here are the other classes in `Logic` (omitted from the class diagram above) that are used for parsing a user command:

<puml src="diagrams/ParserClasses.puml" width="600"/>

How the parsing works:
* When called upon to parse a user command, the `AddressBookParser` class creates an `XYZCommandParser` (`XYZ` is a placeholder for the specific command name e.g., `AddCommandParser`) which uses the other classes shown above to parse the user command and create a `XYZCommand` object (e.g., `AddCommand`) which the `AddressBookParser` returns back as a `Command` object.
* All `XYZCommandParser` classes (e.g., `AddCommandParser`, `DeleteCommandParser`, ...) inherit from the `Parser` interface so that they can be treated similarly where possible e.g, during testing.

### Model component
**API** : [`Model.java`](https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/model/Model.java)

<puml src="diagrams/ModelClassDiagram.puml" width="450" />


The `Model` component,

* stores the address book data i.e., all `Person` and `Reservation` objects (which are contained in the
  `UniquePersonList` and `UniqueReservationList` objects respectively.
  * Note that we have two `UniquePersonList` objects: one called `persons` representing the contacts list and another called `archivedPersons` for the archived list.
* stores the currently 'selected' `Person` objects (e.g., results of a search query) as a separate _filtered_ list which is exposed to outsiders as an unmodifiable `ObservableList<Person>` that can be 'observed' e.g. the UI can be bound to this list so that the UI automatically updates when the data in the list change.
* stores the currently 'selected' `Reservation` objects in the same fashion as 'selected' `Person` objects.
* stores a `UserPref` object that represents the user’s preferences. This is exposed to the outside as a `ReadOnlyUserPref` objects.
* does not depend on any of the other three components (as the `Model` represents data entities of the domain, they should make sense on their own without depending on other components)

<box type="info" seamless>

**Note:** An alternative (arguably, a more OOP) model is given below. It has a `Tag` list in the `AddressBook`, which `Person` references. This allows `AddressBook` to only require one `Tag` object per unique tag, instead of each `Person` needing their own `Tag` objects.<br>

<puml src="diagrams/BetterModelClassDiagram.puml" width="450" />

</box>


### Storage component

**API** : [`Storage.java`](https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/storage/Storage.java)

<puml src="diagrams/StorageClassDiagram.puml" width="550" />

The `Storage` component,
* can save both address book data and user preference data in JSON format, and read them back into corresponding objects.
* inherits from both `AddressBookStorage` and `UserPrefStorage`, which means it can be treated as either one (if only the functionality of only one is needed).
* depends on some classes in the `Model` component (because the `Storage` component's job is to save/retrieve objects that belong to the `Model`)

### Common classes

Classes used by multiple components are in the `seedu.addressbook.commons` package.

--------------------------------------------------------------------------------------------------------------------

## **Implementation**

This section describes some noteworthy details on how certain features are implemented.

### Help Command

The implementation of help command is more related to the Ui part of the code compared to other commands as it opens another window to show the command summary. It is facilitated by the `handleHelp` method in the `MainWindow` class.

The following activity diagram shows how a user views the help window with the `help` command.

<puml src="diagrams/HelpActivityDiagram.puml" alt="HelpActivityDiagram" />

Given below is an example usage scenario of the `help` command.

Step 1. The user launches the application. The user will see the main window of the address book.

Step 2. The user executes the `help` command to open the help window. The `MainWindow#executeCommand()` will call `MainWindow#isShowHelp()` to check if the command to be executed is a `help` command. The `help` command is detected and causes `Model#handleHelp()` to be called which opens the help window.

Step 3. The user looks through the command summary table to find the information needed.

Step 4. The user can copy the website address by clicking `Copy URL` button in the help window and navigate to the website for more detailed information.

<box type="info" seamless>

**Note** The user can do this anytime as long as the help window is opened.

</box>

Step 5. The user can then click the `X` on top right corner or press`Q` on keyboard to close the help window.

#### Design considerations:

**Aspect: How help window is presented:**

* **Option 1 (current choice):** The website address and things to note on top of a command summary table.
  * Pros: Useful and convenient summary for easy reference.
  * Cons: May need to modify every time a new command is added.

* **Option 2:** Only the website address.
  * Pros: Easy to implement and no change needed in the future.
  * Cons: Not very useful and convenient as a quick reference.

### Filter command

The filtering of contacts by tag is facilitated by `HasMatchingTagPredicate`. It implements the `Predicate<Person>` interface and overrides the `test(Person)` method, which is used to decide which `Person`s will be displayed after the filter command. The `test(Person)` method will return true only if the person has a tag matching every filter tag.

Here is the class diagram for `FilterCommand`.

<puml src="diagrams/FilterCommandClass.puml" alt="FilterClassDiagram" />

The following sequence diagram shows how a filter command goes through the `Logic` component.

<puml src="diagrams/FilterSequenceDiagram-Logic.puml" alt="FilterSequenceDiagram" />

<box type="info" seamless>

**Note:** The lifeline for `FilterCommandParser` should end at the destroy marker (X) but due to a limitation of PlantUML, the lifeline continues till the end of diagram.
</box>

### Clear command

To safeguard against accidentally clearing the contacts list, the `clear` command requires the user to input a confirmation after the initial `clear` command. This is performed with the use of the two flags in the `ModelManager` class, namely `isAwaitingClear` and `isConfirmClear`, where their statuses are checked within the execution of the `clear` command since the model is passed to the command.

Another flag, `previouslyClear`, is used in the `LogicManager` class to check if the previous command was a `clear` command before handling the current command entered, where it checks if a confirmation "y" is entered.

The following activity diagram summarizes what happens when a user executes a `clear` command:

<puml src="diagrams/ClearCommandActivityDiagram.puml" alt="ClearCommandActivityDiagram" />

### Archive command

The `archive` command essentially removes the person from the `UniquePersonList persons` and places the person into the `UniquePersonList archivedPersons` in the address book, hiding the person's contact from the main list.


<puml src="diagrams/ArchiveCommandObjectDiagram0.puml" alt="ArchiveCommandObjectDiagram0" />

In this example, Irfan Ibrahim was initially in the `persons` list, at `INDEX` 1.

<puml src="diagrams/ArchiveCommandObjectDiagram1.puml" alt="ArchiveCommandObjectDiagram1" />

After being archived, Irfan was removed from the `persons` list and added to the `archivedPersons` list.

The `archive` command has its corresponding `unarchive` command which conversely removes the person from the `archivedPersons` list and adds them into the `persons` list inside the address book.

There is also the associated `alist` command that displays all the contacts that have been added into the `archivedPersons` list.

Archiving in CulinaryContacts has also been implemented in a way that allows for all other commands to be performed on the archived list. This was achieved by modifying the `FilteredList<Person> filteredPersons` within the `ModelManager` class to dynamically contain either the archived persons or the normal persons. This is because many of the original commands already make use of the `filteredPersons` list to execute the commands on. For commands that do not use the `filteredPersons` list in their execution, the flag `isViewingArchivedList` within the `ModelManager` is used instead in order to check if the user is currently viewing the normal persons or the archived persons before performing the command on the corresponding list.

--------------------------------------------------------------------------------------------------------------------

## **Documentation, logging, testing, configuration, dev-ops**

* [Documentation guide](Documentation.md)
* [Testing guide](Testing.md)
* [Logging guide](Logging.md)
* [Configuration guide](Configuration.md)
* [DevOps guide](DevOps.md)

--------------------------------------------------------------------------------------------------------------------

## **Appendix: Requirements**

### Product scope

**Target user profile**:

* small family restaurant owners
* has a need to manage a significant number of contacts such as suppliers, employees and customers
* restaurant accepts reservations
* prefer desktop apps over other types
* can type fast
* is reasonably comfortable using CLI apps

**Value proposition**:
This app offers streamlined contact and reservation management for small family-owned restaurants, enhancing operational efficiency without covering financial or inventory aspects. It also categorises and stores detailed information about suppliers and the food that they sell to help owners keep track of volatile contacts.

### User stories

Priorities: High (must have) - `* * *`, Medium (nice to have) - `* *`, Low (unlikely to have) - `*`

| Priority | As a …​                 | I want to …​                                                                                  | So that I can…​                                                    |
|----------|-------------------------|-----------------------------------------------------------------------------------------------|--------------------------------------------------------------------|
| `* * *`  | new user                | view the user guide easily                                                                    | learn more about the app as and when I need                        |
| `* * *`  | new user                | use a command to exit the program                                                             | close the application without moving my mouse                      |
| `* * *`  | new user                | add new contacts                                                                              | save their contact details                                         |
| `* * *`  | new user                | tag new contacts as 'supplier', 'customer' or 'employees'                                     | keep my contacts list organized                                     |
| `* * *`  | new user                | view all the contacts that I currently have in my address book                                |                                                                    |
| `* * *`  | new user                | delete existing contacts                                                                      | remove any unwanted or experimental contacts                       |
| `* * *`  | new user                | find specific contact(s) by name                                                              |                                                                    |
| `* * *`  | new user                | add new reservations                                                                          |                                                                    |
| `* * *`  | new user                | delete existing reservations                                                                  |                                                                    |
| `* * *`  | new user                | archive contacts of employees/suppliers whose contracts have expired                          | declutter my contacts list                                          |
| `* * *`  | new user                | unarchive contacts                                                                            | contact them when the need arises                                  |
| `* * *`  | intermediate user       | edit existing contacts                                                                        | update contacts easily without deleting and recreating a new one   |
| `* * *`  | intermediate user       | filter my contacts by specific tag(s)                                                         |                                                                    |
| `* * *`  | clumsy user             | get a confirmation message when clearing the entire address book                              | avoid accidentally deleting all contacts                           |
| `* *`    | new user                | see a helpful message when my command is not formatted correctly                              | figure out how to fix my command                                   |
| `* *`    | new user                | try out the features with some sample data                                                    | understand what each feature does                                  |
| `* *`    | new user                | tag suppliers with the types of food they supply                                              | easily find the right supplier for specific ingredients            |
| `* *`    | new user                | tag employees as 'full time' or 'part time'                                                   | easily find the contacts of part time employees during peak period |
| `* *`    | forgetful user          | see all commands I entered this session                                                       |                                                                    |
| `* *`    | clumsy user             | undo my last command                                                                          | so that I can rectify an erroneous command                         |
| `* *`    | user with poor eyesight | view the contact details in a larger window when I click on a contact                         | more easily see the contact details                                |
| `* *`    | user with poor eyesight | have tags with different colors                                                               | easily differentiate tags                                          |
| `* *`    | intermediate user       | sort reservations by date and time                                                            | plan the seating arrangement and kitchen workload effectively      |
| `* *`    | intermediate user       | toggle between previous commands by pressing up and down arrows                               | save time typing similar commands                                  |
| `* *`    | intermediate user       | delete multiple contacts in 1 command                                                         | remove multiple contacts more quickly                              |
| `* *`    | intermediate user       | see upcoming reservations/events in a dashboard                                               | anticipate and prepare for such events                             |
| `* *`    | intermediate user       | add special requests (e.g. dietary restrictions) to reservations                              | provide personalized service to my customers                       |
| `* *`    | expert user             | create my own aliases and shortcuts                                                           | reduce time spent typing commands                                  |
| `*`      | clumsy user             | find contacts that match the keyword partially                                                | avoid retyping the command when I make a typo                      |
| `*`      | intermediate user       | import contacts from other sources                                                            | quickly populate the app with existing information                 |
| `*`      | intermediate user       | have autocomplete when typing commands                                                        | finish typing the command faster                                   |
| `*`      | intermediate user       | automatically create a blank email addressed to a contact when I click on his/her email field | email contacts more quickly                                        |
| `*`      | expert user             | access the app from multiple devices                                                          | manage my contacts and reservations on the go                      |


### Use cases

(For all use cases below, the **System** is `CulinaryContacts` and the **Actor** is the `user`, unless specified otherwise)

**Use case: UC01 - View help**

**MSS**

1. User requests to see the help menu.
1. CulinaryContacts opens up the help window, displaying the command summary.

   Use case ends.

**Use case: UC02 - Add a person**

**MSS**

1. User requests to add a new person.
1. CulinaryContacts adds the new person to the _displayed person list_.

   Use case ends.

**Extensions**

* 1a. The provided field(s) is/are invalid.

    * 1a1. CulinaryContacts shows an error message.

      Use case resumes from step 1.

* 1b. Compulsory field(s) is/are missing.

    * 1b1. CulinaryContacts shows an error message.

      Use case resumes from step 1.

**Use case: UC03 - List all persons in contacts list**

**MSS**

1. User requests to show all persons in the contacts list.
1. CulinaryContacts shows all persons in the contacts list.

   Use case ends.

**Use case: UC04 - Edit a person**

**MSS**

1. User requests to <u>list all persons in the contacts list (UC03)</u> or <u>list all persons in the archived list (UC09)</u>.
1. User requests to edit the fields of a specific person in the _displayed person list_.
1. CulinaryContacts edits the fields of the person.

   Use case ends.

**Extensions**

* 1a. The list is empty.

  Use case ends.

* 2a. The given index is invalid.

    * 2a1. CulinaryContacts shows an error message.

      Use case resumes from step 2.

* 2b. The new field value(s) is/are invalid.

    * 2b1. CulinaryContacts shows an error message.

      Use case resumes from step 2.

* 2c. No fields to edit are provided.

    * 2c1. CulinaryContacts shows an error message.

      Use case resumes from step 2.

**Use case: UC05 - Find a person**

**MSS**

1. User requests to <u>list all persons in the contacts list (UC03)</u> or <u>list all persons in the archived list (UC09)</u>. 
2. User requests to find all persons in the _displayed person list_ with names matching the input keyword(s). 
3. CulinaryContacts shows all persons in the _displayed person list_ with matching names.

   Use case ends.

**Extensions**

* 1a. No keywords are provided.

    * 1a1. CulinaryContacts shows an error message.

      Use case resumes from step 1.

**Use case: UC06 - Filter persons by tag**

**MSS**

1. User requests to <u>list all persons in the contacts list (UC03)</u> or <u>list all persons in the archived list (UC09)</u>. 
2. User requests to find all persons in the _displayed person list_ with specific tag(s). 
3. CulinaryContacts shows all persons in the _displayed person list_ matching all tags entered.

   Use case ends.

**Extensions**

* 1a. No tags are provided.

    * 1a1. CulinaryContacts shows an error message.

      Use case resumes from step 1.

**Use case: UC07 - Delete a person**

**MSS**

1. User requests to <u>list all persons in the contacts list (UC03)</u> or <u>list all persons in the archived list (UC09)</u>.
2. User requests to delete a specific person in the _displayed person list_. 
3. CulinaryContacts deletes the person.

   Use case ends.

**Extensions**

* 1a. The _displayed person list_ is empty.

  Use case ends.

* 2a. The given index is invalid.

    * 2a1. CulinaryContacts shows an error message.

      Use case resumes from step 2.

**Use case: UC08 - Clear all entries**

**MSS**

1. User requests to clear all entries.
1. CulinaryContacts asks for confirmation to clear all entries.
1. User confirms to clear all entries.
1. CulinaryContacts clears all entries.

   Use case ends.

**Extensions**

* 2a. Confirmation is not given.

    * 2a1. CulinaryContacts cancels the clear action.

      Use case ends.

**Use case UC09: List all persons in archived list**

**MSS**

1. User requests to show all contacts in the archived list.
1. CulinaryContacts shows all persons in the archived list.

   Use case ends.

**Use case UC10: Archive a person**

**MSS**

1. User requests to <u>list all persons in the contacts list (UC03)</u>. 

2. User requests to archive a specific person in the contacts list. 

3. CulinaryContacts archives the person.

   Use case ends.

**Extensions**

* 1a. The list is empty.

   Use case ends.

* 2a. The given index is invalid.

  * 2a1. CulinaryContacts shows an error message.
  
    Use case resumes at step 2.

**Use case: UC11 - Unarchive a person**

**MSS**

1. User requests to <u>list all persons in archived list (UC09)</u>.

2. User requests to unarchive a specific person in the archived list.

3. CulinaryContacts unarchives the person.

   Use case ends.

**Extensions**

* 1a. The list is empty.

  Use case ends.

* 2a. The given index is invalid.

  * 2a1. CulinaryContacts shows an error message.
  
    Use case resumes at step 2.

**Use case UC12: Add a reservation**

**MSS**

1. User requests to add a new reservation for a person.

2. CulinaryContacts adds the new reservation to the reservations list.

   Use case ends.

**Extensions**

* 1a. The provided field(s) is/are invalid.

  * 1a1. CulinaryContacts shows an error message.
  
    Use case resumes from step 1.
  
* 1b. Compulsory field(s) is/are missing.

  * 1b1. CulinaryContacts shows an error message.

    Use case resumes from step 1. 
  
* 1c. Another reservation made by the same person, on the same date, and at the same time already exists in the reservations list.
  
  * 1c1. CulinaryContacts shows an error message.
  
    Use case resumes from step 1.

**Use case UC13: Delete a reservation**

**MSS**

1. User requests to delete a specific reservation in the reservations list.

2. CulinaryContacts deletes the reservation.

   Use case ends.

**Extensions**

* 1a. The reservations list is empty.

  Use case ends.

* 2a. The given index is invalid.

  * 2a1. CulinaryContacts shows an error message.
  
    Use case resumes from step 2.

**Use case UC14: Sort reservations**

**MSS**

1. User requests to sort all reservations.

2. CulinaryContacts shows a sorted list of all reservations.

   Use case ends.

**Use case UC15: Exit program**

**MSS**

1. User requests to exit the program.

2. CulinaryContacts exits.

   Use case ends

### Non-Functional Requirements

1. Should work on any _mainstream OS_ as long as it has Java `11` or above installed.
1. Should be able to hold up to 1000 persons while ensuring that commands can be executed within two seconds.
1. A user with above average typing speed (40 wpm) for regular English text (i.e., not code, not system admin commands) should be able to accomplish most tasks faster using commands than using the mouse.
1. New users should be able to perform basic operations (add, edit, list, delete contacts) with some guidance from the help documentation.
1. The product is not required to handle financial or inventory aspects of managing a restaurant.
1. All text must be at least font size 12 to ensure readability.
1. User guides and developer guides should be updated with each release.

### Glossary

* **Mainstream OS**: Windows, Linux, Unix, MacOS
* **API (Application Programming Interface)**: An API is a set of rules and tools that enables different software applications to communicate and interact with each other.
* **displayed person list**: This refers to the contacts or archived list of persons that you are currently viewing.

--------------------------------------------------------------------------------------------------------------------

## **Appendix: Instructions for manual testing**

Given below are instructions to test the app manually.

<box type="info" seamless>

**Note:** These instructions only provide a starting point for testers to work on;
testers are expected to do more *exploratory* testing.

</box>

### Launch and shutdown

1. Initial launch

   a. Download the jar file and copy into an empty folder.

   b. Double-click the jar file.<br>
   Expected: Shows the GUI with a set of sample contacts. The window size may not be optimal.

1. Saving window preferences

   a. Resize the window to an optimal size. Move the window to a different location. Close the window.

   b. Re-launch the app by double-clicking the jar file.<br>
   Expected: The most recent window size and location is retained.

### Listing all persons in contacts list
1. Viewing the contacts list

   a. Prerequisites: None 

   b. Test case: `list`<br>
   Expected: The contacts list is shown. The ‘contacts’ tab is underlined indicating that it is the current active tab.

### Listing all persons in archived list
1. Viewing the archived list

   a. Prerequisites: None

   b. Test case: `alist`<br>
   Expected: The archived list is shown. The ‘archived’ tab is underlined indicating that it is the current active tab.

### Clearing all entries
1. Removing all persons and reservations from CulinaryContacts.

   a. Prerequisites: None

   b. Test case: `clear`, followed by `n` or any other input.<br>
      Expected: All persons and reservations remain unchanged. A `Clear cancelled!` message will be shown in the result display.

   c. Test case: `clear`, followed by `y`.<br>
   Expected: All persons and reservations will be deleted. A `Clear successful!` message will be shown in the result display.

### Viewing help
1. Opening the help window to view the command summary

   a. Prerequisites: The help window is not open.

   b. Test case: `help`<br>
   Expected: The help window is opened.
   
   c. Test case: Press `F1`<br>
   Expected: The help window is opened.

   d. Test case: Click `Help` button at the top, then click `Help F1` button in the drop-down menu.<br>
   Expected: The help window is opened.

2. Copying the user guide website address

   a. Prerequisites: The help window is opened.

   b. Test case: Click on the `Copy URL` button, then paste it in the address bar of an external web browser.<br>
   Expected: The website address is copied to clipboard and the website is accessible.

3. Closing the help window

   a. Prerequisites: The help window is opened.

   b. Test case: Press `q`<br>
   Expected: The help window is closed.

   c. Test case: Click the `X` button on top right corner of the help window.<br>
   Expected: The help window is closed.

### Archiving a person
1. Archiving a person while viewing the contacts list

   a. Prerequisites: The user is viewing the contacts list. There is at least 1 person in the contacts list.

   b. Test case: `archive 1`, followed by `alist`<br>
   Expected: The archived person is removed from the contacts list. This archived contact can be seen by executing the `alist` command to view the archived list. Details of the archived contact are shown in the status message.

   c. Test case: `archive 0`<br>
   Expected: No person is archived. Result display shows error message: `Invalid command format!`.
   
   d. Other incorrect delete commands to try: `archive`, `archive x`, `...` (where x is larger than list size)<br>
   Expected: Similar to previous.

2. Archiving a person while viewing the archived list
   
   a. Prerequisites: The user is viewing the archived list. There is at least 1 person in the archived list.
   
   b. Test case: `archive 1`<br>
   Expected: Result display shows error message: `This command can only be used while viewing the active contacts list`. No person is archived.

### Unarchiving a person
1. Unarchiving a person while viewing the archived list

   a. Prerequisites: List all archived persons using the `alist` command. There is at least 1 person in the archived list.

   b. Test case: `unarchive 1`, followed by `list`<br>
   Expected: First contact is removed from the archived list. This unarchived contact can be seen by executing the `list` command to view the contacts list. Details of the unarchived contact are shown in the status message.
   
   c. Test case: `unarchive 0`<br>
   Expected: No person is unarchived. Result display shows error message: `Invalid command format!`.
   
   d. Other incorrect delete commands to try: `unarchive`, `unarchive x`, `...` (where x is larger than list size)<br>
   Expected: Similar to previous.

2. Unarchiving a person while viewing the contacts list
   
   a. Prerequisites: The user is viewing the contacts list. There is at least 1 person in the contacts list.

   b. Test case: `unarchive 1`<br>
   Expected: Result display shows error message: `This command can only be used while viewing the archived list`. No person is unarchived.

### Adding a new reservation
1. Adding a new reservation for the first person in the _displayed person list_.
   
   a. Prerequisites: There is at least 1 person in the _displayed person list_. There are no existing reservations made by the first person on 17/04/2024 at 6.00pm.
   
   b. Test case: `rsv 1 d/2024-04-17 t/1800 p/8`<br>
   Expected: A new reservation is added to the reservations list. Name and phone number of the person, as well as date, time and number of people will be displayed in the reservation card.

2. Adding a duplicate reservation with the same date and time

   a. Prerequisites: There is at least 1 person in the _displayed person list_. There is an existing reservation made by the first person on 17/04/2024 at 6.00pm.
   
   b. Test case: `rsv 1 d/2024-04-17 t/1800` p/5<br>
   Expected: Result display shows error message: `This person has already made a reservation at this date and timing in the address book`. No new reservation is added to the reservations list.

### Deleting a new reservation 
1. Deleting the first reservation in the reservations list
   
   a. Prerequisites: There is at least 1 reservation in the reservations list.
   
   b. Test case: `rsvdel 1`<br>
   Expected: First reservation is deleted from the reservations list. Details of the reservation shown in the result display.

   c. Test case: `rsvdel 1000`<br>
   Expected: Result display shows error message: `The reservation index provided is invalid`. No reservation is deleted from the reservations list.

### Sorting reservations
1. Sorting all reservations

   a. Prerequisites: Multiple reservations in the reservations list. There is at least 1 non-expired reservation and 1 expired reservation in the reservations list. There is at least 1 person in the _displayed person list_.
   
   b. Test case: `rsv 1 d/2024-09-25 t/1800 p/4`, followed by `rsvsort`<br>
   Expected: The new reservation is added to the bottom of the reservations list. After the `rsvsort` command is called, the reservations list is now sorted in the [correct order](UserGuide.html#sorting-reservations-rsvsort).



--------------------------------------------------------------------------------------------------------------------

## **Appendix: Planned Enhancements**

Team size: 4

1. **Use an ID field as the unique identifier**: The current unique identifier is the `NAME` of the person preventing addition of duplicate names. This is too restrictive as persons with the same name are quite common in reality. The user may also want to only record the first or last name which may cause more duplicate names. We plan to introduce a new `ID` field as a unique identifier for each contact, which will allow duplicate names to be recorded.
2. **Sync contact updates with reservation**: Currently, when a user edits a contact's `NAME` or `PHONE NUMBER` in the contacts list, these changes are not reflected in existing reservations made for that contact. As a result, the reservation records become inconsistent with the updated contact details. We plan to enhance this feature by ensuring that any updates to a contact in the contacts or archived list will automatically update the contact's details in the reservations list. For example, if the contact John Doe's phone number is updated, all existing reservations under John Doe's name will automatically reflect this new phone number.
3. **Cascading reservation deletion**: Currently, when a contact is deleted, their existing reservations remain in the address book. However, this process can be cumbersome for users, as they must manually delete each reservation individually. To enhance user-friendliness, we plan to implement cascading deletion, whereby deleting a contact will also remove all associated reservations automatically.
4. **Less compulsory fields for add command**: Currently when adding a contact, the user must input the `NAME`, `PHONE`, `EMAIL`and `ADDRESS` of the contact as all these fields are mandatory. This requirement can create difficulties if the user lacks information for all these fields. We plan to make the `PHONE`, `EMAIL`and `ADDRESS` fields optional, so that it is more convenient for the user to add new contacts.
5. **Make ‘invalid index’ error messages cover cases where `INDEX` is less than 1 or greater than 2147483647**: The current error message which shows when the `INDEX` is less than 1 and exceeds the maximum integer size is ‘Invalid command format’, which might not be clear for the user. We plan to show the error message `The person index provided is invalid` for these cases.

