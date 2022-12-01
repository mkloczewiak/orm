import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    ManyToOne,
    OneToMany, 
} from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    @ManyToOne((type) => User, (user) => user.podwladny)
    przelozony: User

    @OneToMany((type) => User, (user) => user.przelozony)
    podwladny: User

}
