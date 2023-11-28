# Tips and Tricks

There are a lot of different quality of life features available in Hexa Center. This page will go into more detail about these features and how you can use them to enhance your experience.

- SUGGEST TO TONY AND MEES: Status page of online services - low prio, kan gemaakt worden

Explain where features are used, perhaps give examples per page where relevant.

## 1. Tips and Tricks definition

This page goes into detail about the quality of life features available to users of Hexa Center. We aim to make your experience in Hexa Center the best it can possibly be.

## 2. Overview of Tips and Tricks in Hexa Center

An overview of all available Quality of Life features can be found below. We will start off by explaining general features you use very often, basically on a daily basis. Further down this page we will highlight some more advanced tips and tricks.

**General tips and tricks**

- Text filtering
- Date selector
- Time selector
- Rich text editor
- Automatic saving
- Refinement

**Advanced tips and tricks**

- Metadata
- Export
- Custom fields

## 3. General features: Text filtering

--todo: Ask if differentiate is allowed -- change differentiate to something else, maube chanhe the sentence all together

Text filtering is a feature used for finding specific items from a (long) list. This makes it extremely easy to find items based on even a small part of that items name.

Every dropdown field in Hexa Center supports text filtering. Dropdown fields have a small `up and down` arrow icon next to them, to differentiate them from regular text fields. Clicking on the field shows all relevant selectable items. When entering text only items containing that text in their name are shown.

Examples dropdown fieldw. The dropdown fields are highlighted in red.

This example is taken from the `appointment creation` screen in the `calendar addon`

![Example of dropdown fields](/images/guide/tipsandtricks-example-of-dropdown.JPG "Example of dropdown fields")

## 4. General features: Date selector

The date selector is a feature used to easily select a specific date using intuitive button layouts. Its opened by clicking on a date field. The date selector consists of 3 different screens, the:

- Day selector
- Month selector
- Year selector

**The day selector:** The initial screen when clicking on a date field. Enables you to click through individual months, allowing you to choose a specific date within the selected month.

![Example of date selector](/images/guide/tipsandtricks-example-of-date-selector-initial-screen.JPG "Example of date selector")

**The Month selector** In the day selector, click on the year and month to open the Month selector. This screen allows you to select a year via the `left and right arrow buttons`, and a specific month from that year via the abbreviated month names.

![Example of month selector](/images/guide/tipsandtricks-example-of-date-selector-month.JPG "Example of month selector")

**Year selector:** Clicking on the year from the **Month selector** opens the Year Selector. Navigate through years by using the `left and right arrow buttons`, just like you would when selecting a day in the **Day selector**. Selecting a year brings you to the **month selector**, followed by the **Day selector**, basically allowing you to work back from years, to months, to individual days again.

![Example of year selector screen](/images/guide/tipsandtricks-example-of-date-selector-year.JPG "Example of year selector screen")

## 5. General features: Time selector

The time selector feature allows you to effortlessly select a specific time of day through modern UI design. The time field allows you to type in a specific time, as well as select a specific time via the time selector.

Start by clicking on the small clock icon next to the time field, this opens a dropdown-like menu in which you can scroll through specific times. Both the hour and minutes sections are individually scrollable. Chosen hours and minutes are automatically inserted into the time field.

Close the time selector by clicking anywhere on the pop-up/screen you're currently editing on.

![Example of time selector screen](/images/guide/tipsandtricks-example-of-time-selector.jpg "Example of time selector screen")

## 6. General features: Rich text editor

The rich text editor is a feature we are especially proud of. Using the rich text editor you can use markup to customize and style text according to their preferences. This capability empowers users to apply a wide range of formatting options to achieve the desired look and feel for their text content.

A list of supported markup elements can be found below:

TODO: add underlined, strikethrough, code, text, text sizes to markdown

- **Bold text**
- _Italic text_
- Underlined text
- Strikethrough text
- Code

- H1, H2, H3 and H4 headers
- Blockqoutes
- Horizontal lines
- Bullet list
- Ordered list
- [Links](/guide/system/tipsandtricks "Links")
- Aligning text left, center, justify, right

Clear formatting by using the `Clear formatting` button on the rich text editor. The rich text editor also allows you to undo or redo your edits. Undo an edit by clicking on the `left arrow button`, redo an edit by clicking on the `right arrow button`.

Hovering over a button shows a tooltip explaining the buttons functionality.

![Example of rich text editor](/images/guide/tipsandtricks-example-of-rich-text-editor.JPG "Example of rich text editor")

## 7. General features: Automatic saving

Automatic saving is a feature that allows certain forms to automatically save as soon as no further changes are made.

Not all forms support this feature. In forms where this feature is enabled the save button is replaced by the `Save status icon`. This icon shows the current saving status of the form you're currently editing.

![Example of rich text editor](/images/guide/tipsandtricks-example-of-saved-icon.JPG "Example of rich text editor")

When making changes to the form the `Save status icon` briefly changes from `Saved` to `Saving`. The saving process is usually done within a second, though it might take longer depending on the changes made and the size of the item you are currently editing.

![Example of rich text editor](/images/guide/tipsandtricks-example-of-saving-icon.JPG "Example of rich text editor").

## 8. General features: Notification system

TODO: Fact check this, finishing this later

The notification system refers to the way you are notified by Hexa Center about the results of actions like **creating**, **deleting** and **updating** items. On forms where the **Automatic saving** feature is enabled, no notifications are generated when creating or updating items.

## 9. General features: Refinement

Use refinement to fine tune your results through the use of (advanced) conditions. Filter dossiers by filtering for a single, or group, of clients on the `Dossiers` page. Filter through users that meet your criteria, based on: age, gender, role, any value you can use to filter between individual items is available in the refinement feature.

The values from which you can create a condition obviously differ per page. Every column can be used to filter results via the refinement feature. We recommend expermimenting with the different available options to see what is truly possible via the refinement feature.

## 9.1 Filter text fields

Filtering through text based fields is very similar to using the dropdown text filtering, as explained in **section 3, Text filtering**. Instead of showing options through a dropdown, it shows the filtered results in the table itself.

Filter through dates via the: equals, later than, earlier than and between options.

- **Equals**: Filters items where the date in the field is from the specified date.
- **Later than** Filters items where the date in the field is beyond the entered date.
- **Earlier Than**: Filters items where the date in the field is not yet past the entered date.
- **Between**: Filters items where the date in the field falls within the range of the 2 inputted dates.

## 9.2 Filter dropdown fields

Dropdown fields are used when values are clearly limited and defined. For example when wanting to find users through their role, the roles are already defined beforehand, so the entire selection can

Filter through the pre defined values of a dropdown field using the **Text filtering** feature. Please (re)visit **section 3** to read more about the text filtering feature.

The filtering through the use of a dropdown field works exactly the same way as when filtering for users or clients on the calendar page, program page and other pages. Add 1 or multiple items to the dropdown field, filter for text by using the text filtering feature, and select the options you want to filter for using the dropdown menu.

For example lets say you want to find all dossiers belong to 3 different clients. You can very easily filter for multiple clients via the users page by adding the clients to the dropdown field.

## 9.3 Quick search

Use the quick search function to quickly search for part of an item's name. For example you can easily find all users named: "John" by simply entering "John" in the quick search field.

--TODO, screenshot

## 9.4 Ordering results

Order filtered results through the use of the sort buttons next to the fields. Sort by ascending values or descending values, as represented by the icons. When not selecting either of these options the system will sort by **ascending**, putting smaller values first.

--TODO, screenshot

## 10. Advanced features: Metadata

--TODO: ask what happens with the created by and updated by fields when a user is deleted.

An item's Metadata stores all kind of useful information like: the number (id), creation date, created by, updated at, updated by. An explanation about all of these fields can be found below:

- **Number (id)**: Shows the number assigned to the item. Numbers start at 1 and count up from there for each created item of that type.
- **Creation date**: Shows the creation date of the selected item.
- **Created by**: Shows what user the item was created by.
- **Updated at**: Shows the **last** date the item was updated on.
- **Created by**: Shows what user the item was **last** updated by.

## 11. Advanced features: Export

All overview pages feature an `Export` button. The export feature allows you to quickly convert all on screen items to an Excel based dataset. The export feature works together with the `Refinement` feature, explained in section 9, to allow for the creation of customizable datasets exported right to Excel.
