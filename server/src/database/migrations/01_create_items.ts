import Knex from 'knex';

export async function up(knex: Knex) {
    //criar a tabel
    return knex.schema.createTable('items', table => { // gera tabela
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable(); 
    });
}

export async function down(knex: Knex) {
    //voltar atras (deletar a tabela)
    return knex.schema.dropTable('items');
}