import { DataTypes } from "sequelize";
import Conection from "../database/Conection";

export class Identidade {
  instance: any;
  modelName: string = "identidade";

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
        pronomeArtigo: {
          type: DataTypes.STRING,
        },
        etnia: {
          type: DataTypes.STRING,
        },
        sexualidade: {
          type: DataTypes.STRING,
        },
        pcd: {
          type: DataTypes.STRING,
        },
        tipoPcd: {
          type: DataTypes.STRING,
        },
        identidadegenero: {
          type: DataTypes.STRING,
        },
      },
      {
        tableName: this.modelName.toLowerCase(),
      }
    );
  }
}
