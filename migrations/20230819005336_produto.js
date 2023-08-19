/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('produto', (table) => {
    table.increments('id').primary();
    table.string('nome', 40).notNullable();
    table.string('descricao', 250).notNullable();
    table.boolean('ativo').defaultTo(true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('produto');
};
