import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Vat } from "./VATDic"

@Entity()
export class Order{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    pay_way: string

    @Column()
    source: string

    @ManyToOne(() => Vat, (vat) => vat.order)
    vat: Vat[]
}
