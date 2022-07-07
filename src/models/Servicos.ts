import { DataTypes } from "sequelize";
import Conection from "../database/Conection";

export class Servicos {
  instance: any;
  modelName: string = "conselho";

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
        prefixo: {
          type: DataTypes.STRING,
        },
        nome: {
          type: DataTypes.STRING,
        },
      },
      {
        tableName: this.modelName.toLowerCase(),
      }
    );
  }
}
