NorthOne Take-Home Challenge

Instructions:

● We suggest taking no more than 2 - 3 hours to complete this challenge. Review the
requirements below and prioritize your time – focusing on clean, organized code over
pixel perfect results.
● We ask that you complete this challenge within 5 days upon receiving it.
● Submit your solution
○ Use the Greenhouse link provided to you via email to submit your challenge.
○ Clone the GitHub Repo
○ Make sure the cloned repo is private
○ Invite our team to review your repo:
■ Zoe (Engineering Manager): zoe@northone.com
■ Sin (Senior Mobile Developer)
● Our team will reach out to schedule your technical interview. Be ready to demo (on
Google Meet) what you have produced and discuss or extend your code.
We would like you to help us finish building an application that
displays a user’s bank account balance and their associated
transactions.

Here is what we’d like you to tackle:

1. Compute the account balance (in JavaScript) and display it.
2. Compute the account balance via a native module (for both iOS and Android), and
   display it. You’ll need to create a native module for both platforms, and the native
   method to compute the balance should accept an array of transactions as an argument.
3. In testing, we found that the app is unresponsive when updating account details for
   users that have a significant number of transactions. Can you fix this?
4. Change the way the transaction list item displays for certain transaction types:
   a. For wires:
   i. Add subtitle=“A fee may apply” under the title
   ii. Downsize the font by 2 points
   iii. Use the font color “slategray”
   b. For deposits:
   i. Add subtitle=“A fee may apply” under the title
   ii. Keep the font size the same as it is
   iii. Use the font color “slategray”
   Miscellanea
   ● The project is a vanilla React Native (v0.70.3) codebase, so standard React Native
   tooling should be used to run it
   ● Node and CocoaPods dependencies for the project will need to be installed
   ● The codebase provided is intentionally bad in some aspects. Imagine this is a production
   codebase that you’ll be leading development on going forward. You have the freedom to
   change things as you wish, so if you see something that should be improved, feel free to
   refactor it.
   ● Consider the API that fetchTransactions() interacts with to be poorly designed, as it
   doesn’t offer pagination. Every single transaction is returned!
   ● A new list of transactions is generated for each run of the application, and a new
   transaction is created each time the account is updated for demonstration purposes
   ● Ignore floating point errors when doing math on monetary values
   ● Commit changes like you normally would in a codebase shared with other developers.
   We want to get a glimpse into how you work!
   ● If you don’t have a macOS machine and can’t build for iOS, focus on Android instead
