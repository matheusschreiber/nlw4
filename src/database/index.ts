import { DataSource } from "typeorm"

export const MyConnection = new DataSource ({
  "type": "sqlite",
  "database":"./src/database/db.sqlite",
  // "cli":{
  //   "migrationsDir":"./src/database/migrations"
  // }
})