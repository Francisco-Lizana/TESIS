import {Table,Model,Column,DataType, HasMany, ForeignKey, BelongsTo} from 'sequelize-typescript';
import { Estacion } from './Estacion';
import { Rol } from './Rol';
import { Trabajador } from './Trabajador';


@Table({
    timestamps:false,
    tableName: "trabaja"
})

export class Trabaja extends Model{


    @ForeignKey(() => Estacion)
    @Column({
        allowNull: false
    })
    id_estacion!: number;

    @ForeignKey(() => Trabajador)
    @Column({
        allowNull: false
    })
    id_trabajador!: number;

    @ForeignKey(() => Rol)
    @Column({
        allowNull: false
    })
    id_rol!: number;



}