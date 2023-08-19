/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('cnh', (table) => {
    table.increments('id').primary();
    table.integer('id_entregador').unsigned();
    table.foreign('id_entregador').references('entregador.id');
    table.specificType('categoria', 'string[]').notNullable();
    table.integer('registro').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('cnh');
};
