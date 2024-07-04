import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import * as schema1 from "./schema/order";
import * as schema2 from "./schema/product";
import * as schema3 from "./schema/category";
import * as schema4 from "./schema/customer";
import * as schema5 from "./schema/order_item";



const client = createClient({
    url: process.env.DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN
});

export const db = drizzle(client, { schema:{
    ...schema1,
    ...schema2,
    ...schema3,
    ...schema4,
    ...schema5}
});

