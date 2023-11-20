# Programs

The Programs functionality is part of the Healthcare module. The Healthcare module is a paid feature, ask your Hexa Center representative for more information about paid features. The programs functionality is used in tandem with the dossier function to create a customizable journey for your clients to partake in.

## 1. Program definition

A program is a fully customizable step based solution to create simple yet powerful questionnaires for your clients to partake in. A program can, but does not have to, consist of steps, each step consisting of one, or multiple sections and questions. Programs can be seen as templates which allow your team to reuse past questionnaires without having to create a new questionnaire from scratch for every new client, saving a lot of time and resources.

Due to the nature of the step functionality, we will refer to steps as `Questionnaires` when a user or client is answering steps via the `Client portal`.

## 2. Program overview

The program overview screen can be found by clicking on Programs, listed under the medical header section. Navigating to the program overview page generates a list of all programs. You can only access the program overview if you have sufficient permissions to do so. For more information regarding roles and permissions please refer to the [Roles and Permissions](../../essentials/roles/index.md "Roles and permissions") page.

![Programs overview](/images/guide/programs.jpg "Programs overview")

## 3. Creating a program

To create a program, first, navigate to the program overview screen, then click on the `+ New` button to start creating a program. Entering a name for a program is required, a description is not. After typing out a suitable name for your program, click on the `+ Create` button to finalize the creation process.

## 4. Step modes

When creating or editing a step you will find 3 slide-toggles; `Responder Mode`, `Addition Mode`, and `Answer Mode`. An explanation for each of these toggles can be found below.

**Responder mode:** this detemines whether a step is meant to be completed by an internal user or an external client. Setting this slider to `external` means the dossier's associated client(s) will have to fill in this step via the client portal. The `internal` slider setting means the step has to be completed by a user via Hexa Center's dossier system.

Setting the slider to `External` disables the `Answer mode` slider from being set to `Shared`, as each client must individually complete the questionnaire via the client portal.

For more information about the client portal and dossiers, please refer to the [Dossiers](../dossiers/index.md "Dossiers") page.

**Addition Mode** steps set to `Manually` will not be automatically added to the program when adding it to a dossier. Whereas those set to `Automatically` will be. Steps which are set to `Manually` can be later added to the dossier.

**Answer mode:** this option is only relevant when more than one client has been added to the dossier. When setting this slider to `Individual`, the step has to be filled in separately for each client in the dossier. Whereas setting the slider to `Shared` will mean that the answers will be shared among the dossier's clients, so each client will register the same answer.

## 5. Adding steps to programs

Adding steps to a program is made as simple and easy to understand as possible. Click on the `+ New` button to create a step. Alternatively, link an already existing step by clicking on the `Link Existing` field and selecting a step from there. Upon selecting a step from the list of available steps, the aforementioned step will immediately be added to the program. Linked steps have an icon next to the name indicating that the step is linked to a step originating from a different program.

Changes made to a linked step are **synchronized** across every program where that step is linked. So, any modifications made to the original step or the linked copy will appear in both versions of the step. **Please keep this in mind when editing linked steps.**

The `external checkbox toggle` determines whether a step is open to external clients. Below are screenshots that illustrate the appearance of the `External` and `Linked Step` icons.

![Linked step](/images/guide/programs-linked.jpg "Linked step")
![External step](/images/guide/programs-external.jpg "External step")

## 5.1 Creating steps

Selecting a program from the list of available programs and clicking on the `+ New` button found under the `steps` section will open up the step creation screen. To create a step, you must provide a name. Entering a description is however not required. Toggle the `external checkbox` checkbox if this step is meant to be sent to clients via email.

![Creating step](/images/guide/programs-create.jpg "Creating step")

## 5.2 Adding sections to steps

Adding sections to your steps is highly recommended because it improves the overall clarity and readability of steps.

To add sections to your steps, start by selecting a dossier you would like to edit the steps off, then select an existing step from the list of steps. Alternatively, create a new step via the `+ New` button. Click on the `+ Add section` button to add a section to the step. The `+ Add section` button is always located at the bottom of all added items, so you might have to scroll down to get this button into view.

Added sections are automatically numbered, meaning section 1 will have the number 1 next to it, section 2 number 2, etc. To open or close a section simply click anywhere next to the number, like the title.

To name your sections, click on a section to expand it, then proceed to fill in the form which appears on the right side of your screen. The section number will be displayed at the top of the form. Sections do not need to be named for them to function properly, an unnamed section will simply not have a title and only the number of the section will be visible. Text entered into the description field will appear under the label when the section is expanded.

Once a section has been added all form items must be added to sections, adding form items outside of a section is not possible.

## 5.3 Adding items to steps

To add an item to a step first expand the section by clicking on it. If your step does not include any sections you can simply add the item by holding the left mouse button, dragging the item to the dotted rectangle section and letting go of the left mouse button. If you do decide you want to create sections, but items have already been added to the step, all items will be added to the newly created section.

To add items to a specific section, make sure the section is expanded first. Then, just like when you're adding items to a step without sections, hold the **left mouse button** to grab an item from the list and drag it to the **dotted rectangle section**, then let go off the **left mouse button.** The dotted rectangle section will light up when an item is ready to be added.

![Adding step to section](/images/guide/programs-add-formitem-to-section.jpg "Adding step to section")

## 5.4 Rearranging items in steps

Dragging form items from one section to another is currently not supported. Rearranging form items within a section however is supported. Simply hold the left mouse button while hovering your cursor over the `arrows` icon next to the item you want to move, drag the form item to your desired location, and let go off the **left mouse button** to move the form item.

![Dragging formitems in section](/images/guide/programs-drag-formitem-in-section.jpg "Dragging formitems in section")

## 6. Preview mode

The programs functionality features a Preview mode to show you what a step looks like before finalizing the creation proces. To access this functionality simply select a program, proceed to select a step from the list of available steps and click on the `Preview` button. The preview mode even enables you to test the different form items by allowing you to interact with them just like a client filling in the program would.

![Preview mode](/images/guide/programs-previewmode.jpg "Preview mode")

## 7. Available items and descriptions

We offer a multitude of different form items that can be added to a step. A list of available form items, and their descriptions can be found below.

**Text:** static text, can be used to relay information to the client like instructions on how to fill in the questionnaire, or it can simply act as an intro text used as clarification.

**Link:** link to a webpage, can be used for a multitude of different reasons, like asking the user to review symptoms on a specific webpage. Edit the URL by clicking on the cogwheel icon next to the form item. There you will find the URL field. The webpage always opens in a new tab on the user's browser. The link will take the form of a button. When leaving the `Label` field empty the button will simple say: **Link**.

**Small Input:** a simple text field, allowing the client to enter some text. Use this when a short answer is expected.

**Large Input:** a simple text field, allowing the client to enter text consisting of multiple lines. Use this when a larger answer is expected.

**Rich Text Editor:** a more advanced text field which allows for markup to be added to text, options include bold text, italic text, underlined text, strikethrough text, etc. This input also allows the client to enter text consisting of multiple lines.

**Number Input:** an input field which only allows numbers to be entered. Normal text will automatically be cleared.

**Date Input:** a form item which opens a date-selector when clicking on the field. Click on the year to open the year-month view, allowing the client to select a month, clicking on the year again opens the year selector. Upon selecting a year the input switches back to the year-month view where the client can select a month from that year. Selecting a month allows the client to choose a specific day from that month.

**Checkbox:** a form item that can be clicked to either check or uncheck it, used for simple confirmation questions, for example: "Check this box if you feel like X or Y."

**Score:** an advanced form item which allows a user to build a set of questions with options, just like a Single Choice question, only each option has a point value assigned to it. Points are tallied up based on the option that was selected under each question. So for example if you have 2 questions and you select an option that is worth 3 points on question 1, and an option that is worth 1 point on question 2, your point total would be 5. You can add as many questions as are needed.

**Single Choice:** a form item consisting of one or more options that can be checked or unchecked. Allows only one option to be chosen. Use this when only a single answer is expected.

**Multiple Choice:** a form item consisting of one or more options that can be checked or unchecked. Unlike the Single Choice form item, this item allows for multiple options to be selected. Use this when multiple answers are expected.

**Dropdown:** a form item that allows the user to add multiple options which are nested inside of a togglable menu. The client can click on the field to reveal all options, selecting an option will fill the field with the selected option. To allow for multiple answers to be selected by a client, simply click on the cogwheel button next to the question and check the `Multiple` checkbox. All answers chosen by the client will then appear in the field. A client can remove an answer simply by clicking on the X icon next to the answer.

Almost all form items can be made **optional**. Use the **optional** checkbox to allow the client or user to skip the question. The **optional** checkbox can be found by clicking on an individual added form item.

## 7.1 Customizing form items & optional questions

Every form item can be customized by adding a title, description, or by making the form item optional. Adding restrictions to form items like setting a max length or value in number inputs is not yet supported.

Optional questions can be skipped by the client and therefore do not required for the questionnaire to be completed. This feature can be found by clicking on the `cogwheel button` next to any form item (except for the Text form item, because no selectable options can be added to this item). Check the `Optional` checkbox to make the question optional, answering that question will no longer be required for the survey to be completed.

## 8. Editing programs

To edit the details of a program, like the name, description or underlying steps, head over to the `Programs` page found under the `Medical` section on the left side of your screen. To start editing the name of a program, first click on the `Name` field, then proceed to type in your changes. Don't worry about accidentally forgetting to save your changes, Hexa Center automatically saves your changes as soon as you stop typing. The status icon; `Saved` next to the delete button briefly transforms to `Saving`, indicating that the system is saving your changes. It will change back to `Saved` when this proces is completed. The same proces can be repeated for the description field. How to edit the underlying steps is found down below, in section **8.1. Editing steps**

### 8.1. Editing steps

The process of editing a step is fairly similar to creating one. Just like when editing the details of a program, you can edit the name and description by clicking on name or description field and typing in your changes. As soon as you stop typing your changes will automatically be saved.

Edit a individual form item by first selecting the item from the list of **added** form items, then proceed to click on the cogwheel icon next to the added form item, proceed to edit the label or description by selecting the corresponding field on the right side of your screen. Just like when editing the step or program itself, your changes will automatically be saved as soon as you stop typing.

Rearrange form items by holding the left mouse button down while hovering over the arrows icon next to the added item, moving your mouse to where you want the form item to go and letting go of the left mouse button. If the list of form items you're editing is large and your form item needs to beyond what is currently shown on the screen, you can grab the item like usual and hold it at the top or bottom of edit area to scroll in that direction.

## 9. Deleting programs

To delete a program simply select a program from the list of available programs via the program overview screen and click on the `Delete` button. A popup window will appear asking the user to confirm their choice, clicking on yes will **permanently** delete that program.

![Deleting program](/images/guide/programs-delete.jpg "Deleting progrsm")
