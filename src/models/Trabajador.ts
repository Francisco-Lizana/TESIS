import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
  BelongsToMany,
  HasMany,
} from "sequelize-typescript";
import { Estacion } from "./Estacion";
import { Notificacion } from "./Notificacion";
import { Rol } from "./Rol";
import { Trabaja } from "./Trabaja";
import { Usuario } from "./Usuario";

@Table({
  timestamps: false,
  tableName: "trabajador",
})
export class Trabajador extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  })
  id_trabajador!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  estado!: string;

  /*Claves Foraneas*/
  @ForeignKey(() => Usuario)
  id_usuario!: string;

  @BelongsTo( () => Usuario)
  usuario!: Usuario;

  @HasMany(()=>Notificacion)
  notificaciones!: Notificacion[];

  
  @BelongsToMany(() => Estacion, () => Trabaja)
  estaciones!: Estacion[];

  @BelongsToMany(() => Rol, () => Trabaja)
  roles!: Rol[];

}
