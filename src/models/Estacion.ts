import {Table,Model,Column,DataType, HasMany, ForeignKey, BelongsTo} from 'sequelize-typescript';

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
    id!:number;

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

}