import { DataTypes } from "sequelize";
import Conection from "../database/Conection";

export class TelefoneContato {
  instance: any;
  modelName: string = "telefonecontato";

  constructor(conexao: Conection) {
    const con = conexao.getInstance();

    this.instance = con.define(
      this.modelName,
      {
        codigo: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        tipo: {
          type: DataTypes.STRING,
        },
        numero: {
          type: DataTypes.STRING,
        },
      },
      {
        tableName: this.modelName.toLowerCase(),
      }
    );
  }
}
