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
    id!:number;

    
    @Column({
        type: DataType.STRING,
        allowNull:false,
    })
    descripcion!:string;

    @Column({
        type: DataType.STRING,
        allowNull:false,
    })
    escala!:string;

    
    @Column({
        type: DataType.JSON,
        allowNull:false,
    })
    configuracion!:JSON;

    /* Clavez Foraneas*/

    @ForeignKey(()=>Estacion)
    id_estacion!:number;

    @ForeignKey(()=>Medicion)
    id_medicion!:number[];

    /*Relaciones*/

    @BelongsTo(()=>Estacion)
    estacion!:Estacion;

    @HasMany(()=>Medicion)
    mediciones!: Medicion[];

}
