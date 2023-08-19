/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('horario_atividade', (table) => {
    table.increments('id').primary();
    table.integer('id_entregador').unsigned();
    table.foreign('id_entregador').references('entregador.id');
    table.specificType('horario_inicio', 'TIMESTAMP[]').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('horario_atividade');
};
