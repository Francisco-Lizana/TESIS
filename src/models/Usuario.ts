import {Table,Model,Column,DataType, BelongsToMany,ForeignKey, HasOne} from 'sequelize-typescript';
import { Rol } from './Rol';
import { RolUsuario } from './RolUsuario';
import * as bcrypt from "bcrypt";
import { Trabajador } from './Trabajador';


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
    @Column({
        type: DataType.STRING,
        allowNull:false,
        unique:true,
        set(value: any) {
            const hash = bcrypt.hashSync(value, 8);
            this.setDataValue('clave', hash);
        }
    })
    clave!:string;
    
    @HasOne(()=>Trabajador)
    trabajador!: Trabajador

    @BelongsToMany(() => Rol, () => RolUsuario)
    roles!: Rol[];


}