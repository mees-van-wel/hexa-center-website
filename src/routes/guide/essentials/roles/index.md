# Roles

The roles functionality is part of the System module. Defining roles allows you to define what users are allowed to do in Hexa Center.

## 1. Roles definition

Roles are titles assigned to users which define what actions that particulair user is allowed to perform. Higher level roles, like a System Administrator usually are assigned more permissions and are therefore allowed to perform more actions. Upon gaining access to Hexa Center the System Administrator role will already be created. This is the highest level role and it should therefore only be assigned to high level users.

A low-level user does not need to be aware of the role system, and are therefore usually not allowed to view the roles page. If a user does not have permissions to view roles, the menu option will not be visible. This is also the case for all other pages, like the user and properties pages.

## 2. Roles overview

By clicking on the roles menu option an overview of all existing roles will be generated. See screenshot below for an look of what the roles overview currently looks like.

![Roles](/images/guide/roles.jpg "Roles Overview")

## 3. Creating roles

A new role can be created by navigating to the Roles tab and clicking on the `+ New` button. After giving your role a name and clicking on the `+ Create` button, the role will now be created and you will be able to assign users to it. You still need to assign permissions to the role, otherwise users with this role won't be able to perform any actions.

Upon gaining access to Hexa Center a role will already be created. This role is called the System Administrator. The System Administrator role already has every permission assigned to it and you cannot unassign any permissions from this role.

## 4. Roles functionality and permissions

Assigning permissions to a role has been made as straightforward and easy to understand as possible. Hexa Center uses a tree branch like structure for assigning permissions. Think of permissions and roles as a tree with many branches. Just as a tree has a main trunk and many branches stemming from it, permissions have a set structure. Certain permissions are dependent on others, like how smaller branches grow from larger ones.

For example, you first need to be able to read properties before you can manage them. Likewise, you need to be able to view properties and roles before you can view users, because each user has a property and role assigned to them.

## 5. Client permissions

A seperate role should be created for clients. This role should not have any permissions assigned to it, otherwise clients will be able to login and potentially view/edit confidential data. The Hexa Center environment is only meant to be viewed and altered by approved users.

## 6. Client login details

This paragraph mentions features which are part of the healthcare module. More information about the healthcare module can be found on the following page: [Healthcare module](/guide/healthcare "Healthcare module")

An email address and phone number should always be assigned to a client, failure to do so will result in the client not being able to answer external questions from programs, because those external questions are sent to clients via email.

## 7. Custom fields functionality

The custom fields functionality is a paid module. Please contact your Hexa Center representative for more information regarding optional paid features.

Assigning a role with custom fields to a newly created user will copy over the role's custom fields to that user. A role's custom fields will only be copied over when that role is assigned to the user during the user's creation, so make sure to assign the right role to a user before clicking on the save button. Assigning a new role to an already existing user doesn't copy over that role's custom fields, and any changes made to the role's custom fields will not carry over to the users who are assigned to that role.

## 8. Creating custom fields for roles

The custom fields functionality is a paid module. Please contact your Hexa Center representative for more information regarding optional paid features.

To create custom fields for roles first navigate to the Roles tab, then select an already existing role to edit, or create a new role by clicking on the `+ Create` button. When creating a new role, the option to create custom fields will only be visible after creating the role.
