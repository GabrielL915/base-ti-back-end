/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('conquista_entregador', (table) => {
    table.increments('id').primary();
    table.integer('id_entregador').unsigned();
    table.foreign('id_entregador').references('entregador.id');
    table.integer('id_conquista').unsigned();
    table.foreign('id_conquista').references('conquista.id');
    table.float('progresso').defaultTo(0.0);
    table
      .string('nivel', 20)
      .checkBetween(['bronze', 'prata', 'ouro'])
      .defaultTo('vazio');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('conquista_entregador');
};
