import { DataTypes } from "sequelize";
import Conection from "../database/Conection";

export class Endereco {
  instance: any;
  modelName: string = "endereco";

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
        rua: {
          type: DataTypes.STRING,
        },
        numero: {
          type: DataTypes.STRING,
        },
        bairro: {
          type: DataTypes.STRING,
        },
        cidade: {
          type: DataTypes.STRING,
        },
        codigo_cnsultorio: {
          type: DataTypes.INTEGER,
        },
      },
      {
        tableName: this.modelName.toLowerCase(),
      }
    );
  }
}
