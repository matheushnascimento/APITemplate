exports.up = (knex) =>
  knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.text("name").notNullable();
    table.text("email").notNullable();
    table.text("password").notNullable();
    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
  });

// eslint-disable-next-line no-unused-vars
exports.down = (knex) => knex.schema.dropTable("Users", (table) => {});
