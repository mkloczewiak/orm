import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import { Client } from "./entity/Client";
import * as express from 'express';
import {Application, Request, Responce} from 'express';
import { rmSync } from "fs";
import { ClientDetiles } from "./entity/ClientDetiles";
import { Order } from "./entity/Order";
import { Vat } from "./entity/VATDic";


const app:Application = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());

    AppDataSource.initialize().then(async () => {
        
        
        app.post("/user", async (req:Request, res:Responce) => {
            console.log("Inserting a new user into the database...")
            const user = new User()
            user.firstName = req.body.name;
            user.lastName = req.body.lastName;
            user.age = req.body.age;
            user.przelozony = req.body.przelozony;
            user.podwladny = req.body.podwladny;
            await AppDataSource.manager.save(user)
            console.log(req.body.name);
            res.send('res end');
            // console.log("Saved a new user with id: " + user.id)
        })

        app.put("/user", async(req:Request, res:Responce) => {
            console.log('Updating user table');
            const user = new User();
            if (req.body.id > 0){
                user.id = req.body.id;
                user.firstName = req.body.name;
                user.lastName = req.body.lastName;
                user.age = req.body.age;
                await AppDataSource.manager.save(user)
                console.log(req.body.name);
                res.send('res end');
            }
            else
            {
                console.log('no id');
            }
        })
    
        app.get("/", async (req:Request, res:Responce) => {
            const users = await AppDataSource.manager.find(User)
            console.log('requiest for all users');
            res.send(users);
        });

        app.get("/user", async(req:Request, res:Responce) => {
            const user = await AppDataSource.manager.findOneBy(User, {firstName:"Wojciech"});
            res.send(user);
        })

        app.post("/clients", async(req:Request, res:Responce) => {
            console.log("Inserting new client to db...");
            const client = new Client();
            client.name = req.body.name;
            client.symbol = req.body.symbol;

            await AppDataSource.manager.save(client);

            const clientDetiles = new ClientDetiles();
            clientDetiles.country = req.body.country;
            clientDetiles.type = req.body.type;
            clientDetiles.client = client;
            await AppDataSource.manager.save(clientDetiles);


            res.send('res end');
        })

        app.post("/order", async(req:Request, res:Responce) => {
            console.log("adding order")
            const order = new Order();
            order.pay_way = req.body.pay_way;
            order.source = req.body.source;
            await AppDataSource.manager.save(order);
            

            const vat = new Vat();
            vat.value = req.body.vat;
            vat.order = [order];
            await AppDataSource.manager.save(vat);
            res.send('added');
        })
        
    }).catch(error => console.log(error))






app.listen(PORT, ():void => {
    console.log(`Server Running here https://localhost:${PORT}`);
});
//taka nieistotna zmiana
