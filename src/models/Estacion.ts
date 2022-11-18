import {Table,Model,Column,DataType, HasMany, ForeignKey, BelongsTo, BelongsToMany} from 'sequelize-typescript';
import { Actuador } from './Actuador';
import { Medicion } from './Medicion';
import { Plan } from './Plan';
import { Sensor } from './Sensor';
import { Trabaja } from './Trabaja';
import { Trabajador } from './Trabajador';
@Table({
    timestamps:false,
    tableName:'estacion'
})
export class Estacion extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    })
    id_estacion!:number;

    @Column({
        type: DataType.STRING,
        allowNull:false,
    })
    ubicacion!:string;

    @Column({
        type: DataType.STRING,
        allowNull:false,
    })
    nombre!:string;

    /*Relaciones*/
    @HasMany(()=>Medicion)
    mediciones!: Medicion[];

    @HasMany(()=>Sensor)
    sensores!: Sensor[];

    @HasMany(()=>Actuador)
    actuadores!: Actuador[];
    
    @HasMany(()=>Plan)
    planes!: Plan[];

    @BelongsToMany(() => Trabajador, () => Trabaja)
    estaciones!: Trabajador[];


}