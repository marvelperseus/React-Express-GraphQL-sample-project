I have added the user authentication to this project using Okta.
Okta is a cloud service that allows developers to create, edit, and securely store user accounts and user account data, and connect them with one or multiple applications. If you don’t already have one, sign up for a forever-free developer account. Log in to your developer console, navigate to Applications, then click Add Application. Select Single-Page App, then click Next.
Since Create React App runs on port 3000 by default, you should add that as a Base URI and Login Redirect URI.

Before start this project, you have to add some Okta's infomations into .env file.
- your Client ID 
- your organization URL (without the -admin suffix)
- API token

#Get Started
- yarn install
- yarnt start

Run http://localhost:3000/ and http://localhost:4001/graphql
