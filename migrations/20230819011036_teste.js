/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('entregador', (table) => {
    table.increments('id').primary();
    table.string('CPF', 14).notNullable();
    table.string('CNPJ', 18).notNullable();
    table.string('nome', 20).notNullable();
    table.string('sobrenome', 30).notNullable();
    table.date('data_de_nascimento').notNullable();
    table
      .string('email', 50)
      .checkRegex('^[A-Za-z0-9]+@[A-Za-z]+([.][a-z]..)?([.][a-z]*)');
    table.string('senha', 50).notNullable();
    table.integer('entregas').notNullable();
    table.string('cidade_atual', 30).notNullable();
    table.boolean('ativo').defaultTo(true);
    table.timestamp('data_cadastro', { useTz: true });
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('entregador');
};
