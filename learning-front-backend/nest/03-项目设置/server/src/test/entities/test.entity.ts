import { Entity,Column,PrimaryGeneratedColumn, Generated, CreateDateColumn } from "typeorm"

@Entity()
export class Test {
    @PrimaryGeneratedColumn()
    id:number

    @Column({type:"varchar",length:255})
    name:string
    
    // select:true 只用于查询 不会放回
    @Column({select:true})
    password:string
    
    @Generated("uuid")
    uuid:string

    @CreateDateColumn({type:"timestamp"})
    createTime:Date

    @Column({
        type:"enum",
        enum:[1,2,3],
        default:1
    })
    zhangsan:number


    @Column("simple-array")
    names:string[]

    @Column('simple-json')
    json:{}

}
