CREATE DATABASE exercicioDev;

create table usuarios (
  id serial primary key,
	nome text not null,
  	email text not null unique,
  	senha text not null
);

create table links_salvos (
	id serial primary key,
    usuario_id integer references usuarios(id),
  	url text not null,
  	title text not null
);