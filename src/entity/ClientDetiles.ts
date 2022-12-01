import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
} from "typeorm"
import { Client } from "./Client"

@Entity()
export class ClientDetiles {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    country: string

    @Column()
    type: string

    @OneToOne(() => Client)
    @JoinColumn()
    client: Client
}
