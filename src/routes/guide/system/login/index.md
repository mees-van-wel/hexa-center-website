# Login

This article will cover all information regarding the Login functionality implemented in Hexa Center. We will go into detail about multi-factor authentication, logging in and some general knowledge about the structure of accounts, and the flexibility thereof.

## 1. Security

Hexa Center doesn’t use passwords, as passwords are unsafe. If passwords are guessed or hacked by a malicious party, that party would have had full access to the Hexa Center environment, causing damage and data leaks.

**Never** share any login-codes to co-workers, or any party that doesn&apos;t directly own the account you are sharing login-codes for. This defeats the purpose of a multi-factor authentication system, and is generally considered a bad practice.

> If you suspect a data breach is taking place [contact](https://hexa.center/contact "Hexa Center contact page") Hexa Center immediately!

## 2. Multi-factor authentication

Hexa Center is build around the idea of creating a secure platform, with little to no risk of any malicious activity occurring. Therefore, multi-factor authentication is always enabled. Hexa Center takes security very seriously, Multi-factor authentication secures your account by asking for information from devices which should only be available to you. Hexa Center uses 4 digit confirmation codes send to you via sms and email.

## 3. Logging in

### 3.1. Process

When first navigating to Hexa Center you are greeted by a login page, here you must enter your email and phone number to log-in.

![Start login](/images/guide/start-login.jpg "Start login")

This is what the login-form in Hexa Center looks like. Both of these fields must be filled in to be able to log-in. Failure to do so will result in an error message.

In the email field you must enter your email associated with your Hexa Center account. Usually this is the same as the email provided by your organization\
(e.g. firstname.lastname@organization.com).

In the phone number field you must enter the phone number which is associated with your Hexa Center account.

![Finish login](/images/guide/finish-login.jpg "Finish login")

After entering your login details into the fields you will be greeted by another form, asking you to enter the codes send to your email address and phone. To make sure that old codes cannot be exploited by malicious parties in any way they will always expire after 10 minutes. Only after entering the correct codes will you be granted access to the Hexa Center environment ….success! You are now safely logged in to your Hexa Center environment.

### 3.2. Remember me

Most login forms have a checkbox allowing a user to "remember" their login, so they don&apos;t have to enter their login details every time they want to access the system. Hexa Center automatically remembers your login details for one year, so there&apos;s no need to go through the multi-factor authentication process every time you need to access Hexa Center.
