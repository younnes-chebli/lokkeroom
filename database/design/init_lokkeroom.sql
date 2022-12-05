create table users (
    user_id serial not null primary key,
    email varchar not null,
    password varchar not null
);

insert into users (email, password) values ('younnesc@gmail.com', '1234');
insert into users (email, password) values ('toto@gmail.com', '1234');
insert into users (email, password) values ('gest@gmail.com', '1234');

create table profiles (
    profile_id serial not null primary key,
    username varchar not null,
    user_id int references users(user_id),
    unique(user_id)
);

insert into profiles (username, user_id) values ('Younnes', 1);
insert into profiles (username, user_id) values ('Toto', 2);
insert into profiles (username, user_id) values ('Gest', 3);

create table direct_messages (
    id serial not null primary key,
    content varchar not null,
    author_id int references profiles(profile_id),
    unique(author_id),
    recipient_id int references profiles(profile_id),
    unique(recipient_id)
);

insert into direct_messages (content, author_id, recipient_id) values ('Hello', 1, 2);

create table lobbies (
    lobby_id serial not null primary key,
    lobby_name varchar not null,
    admin_id int references profiles(profile_id),
    unique(admin_id)
);

insert into lobbies (lobby_name, admin_id) values ('Bad Boys', 1);

create table belongs_to (
    id serial not null primary key,
    participant_id int references profiles(profile_id),
    lobby_id int references lobbies(lobby_id)
);

insert into belongs_to (participant_id, lobby_id) values (1, 1);
insert into belongs_to (participant_id, lobby_id) values (2, 1);
insert into belongs_to (participant_id, lobby_id) values (3, 1);

create table messages (
    id serial not null primary key,
    content varchar not null,
    author_id int references profiles(profile_id),
    lobby_id int references lobbies(lobby_id)
);

insert into messages (content, author_id, lobby_id) values ('One', 1, 1);
insert into messages (content, author_id, lobby_id) values ('Two', 2, 1);
insert into messages (content, author_id, lobby_id) values ('Three', 3, 1);