# Programs

The Programs functionality is part of the Medical module. The Medical module is a paid feature, ask your Hexa Center representative for more information about paid features. The programs functionality is used in tandem with the dossier function to create a customizable journey for your clients to partake in.

## 1. Program definition

A program is a fully customizable step based solution to create simple yet powerful questionnaires for your clients to partake in. A program can, but does not have to, consist of multiple steps, each step consisting of one, or multiple sections and questions. Programs can be seen as templates which allow your team to save a lot of time by not having to create a unique seperate questionnaire for each client.

## 2. Program overview

The program overview screen can be found by clicking on Programs listed under the medical header section. Navigating to the program overview page will generate a list of all programs. You can only access the program overview if you have sufficient permissions to do so. The required permissions to view, edit or create dossiers are listed in the permissions overview section on the right side of this documentation page. For more information regarding roles and permissions please refer to the [Roles and Permissions](/system/roles "Roles and permissions") page.
![Programs overview](/images/medical/programs/ProgramsOverview.PNG "Programs overview")

## 3. Creating a program

To create a program, first, navigate to the program overview screen, then click on the `+ New` button to start creating a program. You must first name your program before it can be created. A description is not required for a program to be created. After typing out a suitable name for your program, click on the `+ Create` button to create the program.

## 4. Program modes

There are 3 different

## 5. Adding steps to programs

Adding steps to a program is made as simple and easy to understand as possible. Click on the `+ New` button to create a step. Alternatively, link an already existing step by clicking on the `Link Existing` field and selecting a step from there. Upon selecting a step from the list of available steps that step will immediately be added to the program. Linked steps have an icon next to the name indicating that the step is linked to a step originating from a different program. Changes made to a linked step are synchronised to every program where that step it linked to. So upon making changes to the original step or the linked copy of the step those changes will appear in both versions of the step. Keep this in mind when editing linked steps. When the `external checkbox` toggle is toggled on, the step is open to external clients.
See screenshots below to see what the `External` and `Linked` step icons look like.
![Linked step](/images/medical/programs/ProgramsLinkedStep.PNG "Linked step")
![External step](/images/medical/programs/ProgramsExternalStep.PNG "External step")

## 5.1 Creating steps

Selecting a program from the list of available programs and clicking on the `+ New` button found under the `steps` section will bring up the step creation screen. A name must be entered for a step to be created, typing out a description, however, is not required. Toggle the `external checkbox` checkbox if this step is meant to be sent to clients via email.
![Creating step](/images/medical/programs/ProgramsCreatingStep.png "Creating step")

## 5.2 Adding sections to steps

Adding sections to your steps is highly recommended because it generally improves the overall readability of a step. Sections can be easily collapsed allowing you to focus on another section, while avoiding making mistakes in sections you're not currently editing.
To add sections to your steps first select a dossier you would like to edit the steps off, then select an existing step from the list of steps. Alternatively, create a new step via the `+ New` button. After selecting a step to edit, click on the `+ Add section` button to add a section to the step. The `+ Add section` button is always located at the bottom of all added items, so you might have to scroll down to get this button into view.
Added sections are automatically numbered, meaning section 1 will have the number 1 next to it, section 2 number 2, etc. Sections act like an accordion menu, however unlike other accordion menus which are collapsed by default, ours are not. To open or close a section simply click anywhere next to the number, like the title.
To name your sections, click on a section to expand it. On the right side of your screen you will be able to enter a lable and a description. Sections do not need to be named for them to function properly, an unnamed section will simply not have a title and only the number of the section will be visible. Any text entered into the description text field will appear under where the lable text normally is displayed.

## 5.3 Adding items to steps

To add an item to a step first expand the section by clicking on it. If your step does not include any sections you can simply drag the items to the dotted rectangle section by holding left mouse button, dragging the item to the dotted rectangle section and letting go of the left mouse button. If you do decide you want to create sections, but items have already been added to the step, all items will be added to the newly created section.
To add items to a specific section, make sure the section is expanded first. Then, just like when you're adding items to a step without sections, drag the item to the dotted rectangle section by holding the left mouse button to grab an item from the list, drag the item over to the dotted rectangle section and let go off the left mouse button. The dotted rectangle section will light up when an item is ready to be added.

## 5.4 Rearranging items in steps

It is currently not possible to drag form items from sections to other sections. Rearranging form items within a section however is possible, simply hold the left mouse button while hovering your cursor over the `arrows` icon next to the item you want to move, drag the form item either up or down and let go off the left mouse button to move the form item.

## 6. Preview mode

The programs functionality features a Preview mode to show you what a step looks like before sending it to a client. To access this functionality simply select a program, then, select a step from the list of available steps and click on the `Preview` button. The preview mode even allows you to test the different form items by allowing you to interact with them just like the client filling in the program normally would.

## 7. Available items and descriptions

Currently we offer a multitude of different form items that can be added to a step. A list of available form items, and their descriptions can be found below.

**Text:** static text, can be used to relay information to the client like instructions on how to fill in the questionnaire, or it can simply act as an intro text used as clarification.

**Small Input:** a simple text field, allowing the client to enter some text, used for when a short answer is expected.

**Large Input:** a simple text field, allowing the client to enter text consisting of multiple lines, used for when a larger answer is expected.

**Rich Text Editor:** a more advanced text field which allows for markup to be added to text, options include bold text, italic text, underlined text, strikethrough text, etc. This input also allows the client to enter text consisting of multiple lines.

**Number Input:** an input field which only allows numbers to be entered. Normal text will automatically be cleared.

**Date Input:** a form item which opens a date-selector when clicking on the field. Click on the year to open the year-month view, allowing the client to select a month, clicking on the year again opens the year selector, where a user can select any year they want to. Upon selecting a year the input switches back to the year-month view where the client can select a month from that year. Selecting a month allows the client to choose a specific day from that month.

**Checkbox:** a form item that can be clicked to either check or uncheck it, used for simple confirmation questions, for example: "Check this box if you feel like X or Y."

**Score:** an advanced form item which allows a user to build a set of questions with options, just like a Single Choice question, only each option has a point value assigned to it. Points are tallied up based on the option that was selected under each question. So for example if you have 2 questions and you select an option that is worth 3 points on question 1, and an option that is worth 1 point on question 2, your point total would be 5. You can add as many questions as are needed.

**Single Choice:** a form item consisting of one or more options that can be checked or unchecked. Allows only one option to be chosen.

**Multiple Choice:** a form item consisting of one or more options that can be checked or unchecked. Unlike the Single Choice form item, this item allows for multiple options to be selected.

**Dropdown:** a form item which allows the user to add multiple options which are nested inside of a togglable menu. The client can click on the field to reveal all options, selecting an option will fill the field with the selected option. To allow for multiple answers to be selected by a client, simply click on the cogwheel button next to the question and check the `Multiple` checkbox. All answers chosen by the client will then appear in the field. A client can remove an answer simply by clicking on the X icon next to the answer.

## 7.1 Customizing form items & optional questions

Every form item can be customized by adding a title, description, or by making the form item optional. Adding restrictions to form items like setting a max length or value in number inputs is not yet implemented.
Optional questions can be skipped by the client and therefore do not required for the questionnaire to be completed. This checkbox can be found by clicking on cogwheel button next to any form item (except for the Text form item, because no selectable options can be added for this item). Check the `Optional` checkbox to make the question optional, answering that question will no longer be required for the survey to be completed.

## 8. Deleting programs

To delete a program simply select a program from the list of available programs via the program overview screen and click on the `Delete` button. A popup window will appear asking the user to confirm their choice, clicking on yes will **permanently** delete that program.
