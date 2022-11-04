import {Table,Model,Column,DataType, HasMany, ForeignKey, BelongsTo} from 'sequelize-typescript';

@Table({
    timestamps:false,
    tableName: "rol"
})

export class Rol extends Model {

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
    valor!:string;
}