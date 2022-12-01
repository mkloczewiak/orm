import { privateDecrypt } from "crypto"
import { setDefaultResultOrder } from "dns"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Order } from "./Order"

@Entity()
export class Vat{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    value: number

    @OneToMany(() => Order, (order) => order.vat)
    order: Order[]
}
