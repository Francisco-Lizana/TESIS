import {Table,Model,Column,DataType, HasMany, ForeignKey, BelongsToMany} from 'sequelize-typescript';
import { RolUsuario } from './RolUsuario';
import { Trabaja } from './Trabaja';
import { Trabajador } from './Trabajador';
import { Usuario } from './Usuario';

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
    id_rol!:number;

    @Column({
        type: DataType.STRING,
        allowNull:false,
    })
    valor!:string;

    @BelongsToMany(() => Usuario, () => RolUsuario)
    usuarios!: Usuario[];


}