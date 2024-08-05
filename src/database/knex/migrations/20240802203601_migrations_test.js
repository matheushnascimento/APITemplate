exports.up = (knex) =>
  knex.schema.createTable("sampleTable", (table) => {
    table.increments("id");
    table.string("title");
  });

exports.down = (knex) => knex.schema.createTable("sampleTable", {});
