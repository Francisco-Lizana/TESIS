import {Table,Model,Column,DataType, HasMany, ForeignKey, BelongsTo} from 'sequelize-typescript';


@Table({
    timestamps:false,
    tableName: "usuario"
})

export class Usuario extends Model {

    @Column({
        type: DataType.STRING,
        primaryKey:true,
        allowNull:false
    })
    rut!:string;

    @Column({
        type: DataType.STRING,
        allowNull:false,
    })
    nombre!:string;

    @Column({
        type: DataType.STRING,
        allowNull:false,
    })
    apellido_paterno!:string;
    
    @Column({
        type: DataType.STRING,
        allowNull:false,
    })
    apellido_materno!:string;

    @Column({
        type: DataType.STRING,
        allowNull:false,
    })
    correo!:string;



}