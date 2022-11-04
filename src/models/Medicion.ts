import {Table,Model,Column,DataType, HasMany, ForeignKey, BelongsTo} from 'sequelize-typescript';
import { Estacion } from './Estacion';
import { Sensor } from './Sensor';

@Table({
    timestamps:false,
    tableName:'medicion'
})
export class Medicion extends Model {

    @Column({
        type: DataType.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    })
    id!:number;

    @Column({
        type: DataType.INTEGER,
        allowNull:false,
    })
    valor!:number;

    @Column({
        type: DataType.DATE,
        allowNull:false,
    })
    fecha!:Date;

    /*Claves Foraneas*/

    @ForeignKey(()=> Estacion)
    id_estacion!:number;

    @ForeignKey(()=> Sensor)
    id_sensor!:number;


    /*Relaciones */

    
}