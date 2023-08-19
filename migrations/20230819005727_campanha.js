/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('campanha', (table) => {
    table.increments('id').primary();
    table.string('tipo', 30);
    table.timestamp('horario');
    table.specificType('dias', 'text[]');
    table.integer('limite_rides_ignoradas');
    table.integer('limite_rides_recusadas');
    table.timestamp('tempo_de_tolerancia');
    table.date('periodo');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('campanha');
};
