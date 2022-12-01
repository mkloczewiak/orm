import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm"

@Entity()
export class Client {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    symbol: string

    @Column()
    name: string

    @CreateDateColumn()
    insertDate: string
}
