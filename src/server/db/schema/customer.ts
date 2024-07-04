import { index,sqliteTable, text } from "drizzle-orm/sqlite-core";


export const customer = sqliteTable("customer", {
    id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
    name: text("name", {length: 64}).notNull(),
    email: text("email", {length: 256}),
    phone_no: text("phoneNo", {length: 10} ).notNull(),
    address: text("address", {length: 2048}).notNull()
    },
    (example) => ({
        customerIndex: index("customer_idx").on(example.name)
    })
);
