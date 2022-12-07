CREATE TABLE "users"(
    "id" SERIAL NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "users" ADD PRIMARY KEY("id");
ALTER TABLE
    "users" ADD CONSTRAINT "users_email_unique" UNIQUE("email");
ALTER TABLE
    "users" ADD CONSTRAINT "users_username_unique" UNIQUE("username");
CREATE TABLE "direct_messages"(
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "author" INTEGER NOT NULL,
    "recipient" INTEGER NOT NULL
);
ALTER TABLE
    "direct_messages" ADD PRIMARY KEY("id");
CREATE TABLE "belongs_to"(
    "id" SERIAL NOT NULL,
    "participant" INTEGER NOT NULL,
    "lobby" INTEGER NOT NULL
);
ALTER TABLE
    "belongs_to" ADD PRIMARY KEY("id");
CREATE TABLE "messages"(
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "author" INTEGER NOT NULL,
    "lobby" INTEGER NOT NULL
);
ALTER TABLE
    "messages" ADD PRIMARY KEY("id");
CREATE TABLE "lobbies"(
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "admin" INTEGER NOT NULL
);
ALTER TABLE
    "lobbies" ADD PRIMARY KEY("id");
ALTER TABLE
    "direct_messages" ADD CONSTRAINT "direct_messages_author_foreign" FOREIGN KEY("author") REFERENCES "users"("id");
ALTER TABLE
    "direct_messages" ADD CONSTRAINT "direct_messages_recipient_foreign" FOREIGN KEY("recipient") REFERENCES "users"("id");
ALTER TABLE
    "messages" ADD CONSTRAINT "messages_author_foreign" FOREIGN KEY("author") REFERENCES "users"("id");
ALTER TABLE
    "belongs_to" ADD CONSTRAINT "belongs_to_participant_foreign" FOREIGN KEY("participant") REFERENCES "users"("id");
ALTER TABLE
    "belongs_to" ADD CONSTRAINT "belongs_to_lobby_foreign" FOREIGN KEY("lobby") REFERENCES "lobbies"("id");
ALTER TABLE
    "messages" ADD CONSTRAINT "messages_lobby_foreign" FOREIGN KEY("lobby") REFERENCES "lobbies"("id");