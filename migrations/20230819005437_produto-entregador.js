/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('produto_entregador', (table) => {
    table.increments('id').primary();
    table.integer('id_entregador').unsigned();
    table.foreign('id_entregador').references('entregador.id');
    table.integer('id_produto').unsigned();
    table.foreign('id_produto').references('produto.id');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('produto_entregador');
};
