import {Table,Model,Column,DataType, HasMany, ForeignKey, BelongsTo} from 'sequelize-typescript';

@Table({
    timestamps:false,
    tableName: "usuario_estacion"
})

export class UsuarioEstacion extends Model {

    @Column({
        type: DataType.INTEGER,
        allowNull:false,
    })
    id_estacion!:number;

    @Column({
        type: DataType.STRING,
        allowNull:false
    })
    rut_trabajador!:string;
}