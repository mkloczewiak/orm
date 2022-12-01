import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Client } from "./entity/Client"
import { ClientDetiles } from "./entity/ClientDetiles"
import { Vat } from "./entity/VATDic"
import { Order } from "./entity/Order"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Alochabaza4",
    database: "main",
    synchronize: true,
    logging: false,
    entities: [User,Client, ClientDetiles, Vat, Order],
    migrations: [],
    subscribers: [],
})
