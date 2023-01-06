import {Model, Table,Column, DataType, BelongsTo, ForeignKey} from 'sequelize-typescript';
import { Trabajador } from './Trabajador';

@Table({
    timestamps:false,
    tableName: "notificacion"
})

export class Notificacion extends Model{
    @Column({
        type: DataType.INTEGER,
        allowNull:false,
    })
    id_notificacion!:number;

    @Column({
        type: DataType.STRING,
        allowNull:false
    })
    descripcion!:string;

    @Column({
        type: DataType.DATE,
        allowNull:false
    })
    fecha!:Date;

    @ForeignKey(()=>Trabajador)
    id_trabajador!:number;
    
    @BelongsTo(()=>Trabajador)
    trabajador!:Trabajador;



}