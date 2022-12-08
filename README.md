# Lokkeroom backend

Creating a platform so that team member could share message with their team, and their team only. The platform would allow coaches from a team to create a message lobby. Once their lobby is created coaches (admin) can add users to their team so they can access the lobby.

We will use [Express.js](https://expressjs.com/) and All information will be stored in a [PostgreSQL database](https://www.postgresql.org/).

## Features to be implemented

* Users can sign up using an email and a password
* Users can log in using their email and password
* User can create a message lobby (and become the admin of the said lobby)
* Users can view message from their lobby
* Users can post message on their lobby
* Users can edit their own message

* Admins can delete message in their lobby
* Admins can edit message in their lobby
* Pagination system

* Users can join multiple teams
* Direct message system (user to user)
* Anti-brutforce (ex: people cannot attempt more than 5 failed logins/hour)
* Admins can add people that have not yet registered to the plateform

## Other ressources

* [bcrypt.js](https://www.npmjs.com/package/bcrypt)
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
* [https://jwt.io/](https://jwt.io/)