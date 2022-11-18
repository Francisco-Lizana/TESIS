import {Table,Model,Column,DataType, HasMany, ForeignKey, BelongsTo} from 'sequelize-typescript';
import { Rol } from './Rol';
import { Usuario } from './Usuario';


@Table({
    timestamps:false,
    tableName: "rol_usuario"
})

export class RolUsuario extends Model{
    @Column({
        type: DataType.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    })
    id!:number;

    @ForeignKey(() => Usuario)
    @Column({
        allowNull: false
    })
    usuario!: string;

    @ForeignKey(() => Rol)
    @Column({
        allowNull: false
    })
    tipo_rol!: number;

}