import {Table,Model,Column,DataType, HasMany, ForeignKey, BelongsTo} from 'sequelize-typescript';
import { Estacion } from './Estacion';
import { Medicion } from './Medicion';


@Table({
    timestamps:false,
    tableName: "sensor"
})
export class Sensor extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    })
    id_sensor!:number;

    
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
        type: DataType.STRING,
        allowNull:false,
    })
    escala!:string;

    
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

    @HasMany(()=>Medicion)
    mediciones!: Medicion[];

}
