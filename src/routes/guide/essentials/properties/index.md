# Properties

The properties functionality is part of the System Block. This article will explain what a property is and how they can be used to better structure your application according to your organization's needs.

## 1. Property definition

Users must be assigned to a property. When a user creates another user, the newly created user inherits the same property assignment as the user performing the create action. This means that the default property assigned to a user is equal to the property of the user who created them. Roles are global, meaning all properties use the same role structure as defined in the [Roles Guide](/guide/essentials/roles "Roles Guide").

## 2. Property functionality

A user is always assigned to a property. Assigning users to properties does not affect the overall functionality of the users. Users can be assigned to different properties as needed, but their basic functionality remains the same regardless of the property they are assigned to. The property value does however show up on user profiles. Currently you can not filter between users using the property functionality.

## 3. Property overview

The property menu option can be found at left side of your screen under the System menu section. If you do not have the required permissions to view properties, this option will not be available. Please refer to the [Roles Guide](/guide/essentials/roles "Roles Guide") for more information about permissions.

![Property Overview](/images/guide/properties.jpg "Property Overview")

## 4. Editing properties

To edit a property's values, select the property from the property overview first. After doing so you will be greeted by the following screen:

![Property overview](/images/guide/properties-update.jpg "Update Property")

Here you can edit any value assigned to the property you have selected. You may not have the required permissions to be able to edit properties, in which case all fields will be greyed out. Please refer to the [Roles page](/system/roles "Roles Page") for more information about permissions.

## 5. Creating properties

Properties can be easily created via just the click of a button, first navigate to the properties tab on the left side of your screen. Click on `new` to create a new property. For a property to be created, a value has to be entered into the `name` field. A properties name has to be at least 2 characters long.

![Property overview](/images/guide/properties.jpg "Property Overview")

## 6. Deleting properties

To delete a property first navigate to the property editing screen by selecting a property from the list of properties, then click on the `Delete` button to permanently delete the property. A property has to have no users assigned to it for it to be eligible for deletion. Deleting a property that still has users assigned to it will result in an error message being generated, stopping you from deleting the property.

![Property deletion](/images/guide/properties-delete.jpg "Delete Property")
