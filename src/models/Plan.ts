import {
  Table,
  Model,
  Column,
  DataType,
  HasMany,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Estacion } from "./Estacion";

@Table({
  timestamps: false,
  tableName: "plan",
})
export class Plan extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  })
  id_plan!: number;

  @Column({
    type: DataType.JSON,
    allowNull: false,
  })
  configuracion!: JSON;

  /* Clavez Foraneas*/

  @ForeignKey(() => Estacion)
  id_estacion!: number;

  /*Relaciones*/

  @BelongsTo(() => Estacion)
  estacion!: Estacion;
}
