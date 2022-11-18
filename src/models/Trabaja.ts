import {Table,Model,Column,DataType, HasMany, ForeignKey, BelongsTo} from 'sequelize-typescript';
import { Estacion } from './Estacion';
import { Trabajador } from './Trabajador';


@Table({
    timestamps:false,
    tableName: "trabaja"
})

export class Trabaja extends Model{

    @Column({
        type: DataType.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    })
    id_trabaja!:number;

    @ForeignKey(() => Estacion)
    @Column({
        allowNull: false
    })
    id_estacion!: string;

    @ForeignKey(() => Trabajador)
    @Column({
        allowNull: false
    })
    id_trabajador!: number;

    


}