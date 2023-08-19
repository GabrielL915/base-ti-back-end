/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('campanha_entregador', (table) => {
    table.increments('id').primary();
    table.integer('id_entregador').unsigned();
    table.foreign('id_entregador').references('entregador.id');
    table.integer('id_campanha').unsigned();
    table.foreign('id_campanha').references('campanha.id');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('campanha_entregador');
};
