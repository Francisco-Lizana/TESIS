import {Table,Model,Column,DataType, HasMany, ForeignKey, BelongsTo} from 'sequelize-typescript';
import { Estacion } from './Estacion';

@Table({
    timestamps:false,
    tableName:'actuador'
})

export class Actuador extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    })
    id_actuador!:number;

    
    @Column({
        type: DataType.STRING,
        allowNull:false,
    })
    descripcion!:string;

    @Column({
        type: DataType.STRING,
        allowNull:false,
    })
    tipo!:string;
    
    @Column({
        type: DataType.STRING,
        allowNull:false,
    })
    modelo!:string;

    @Column({
        type: DataType.JSON,
        allowNull:true,
    })
    configuracion!:JSON;

    /* Clavez Foraneas*/

    @ForeignKey(()=>Estacion)
    id_estacion!:number;

    /*Relaciones*/

    @BelongsTo(()=>Estacion)
    estacion!:Estacion;


}
