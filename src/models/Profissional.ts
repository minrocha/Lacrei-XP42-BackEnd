import { DataTypes } from "sequelize";
import Conection from "../database/Conection";

export class Profissional {
  instance: any;
  modelName: string = "profissional";

  constructor(conexao: Conection) {
    const con = conexao.getInstance();

    this.instance = con.define(
      this.modelName,
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        estado: {
          type: DataTypes.INTEGER,
        },
        nome: {
          type: DataTypes.STRING,
        },
        sobrenome: {
          type: DataTypes.STRING,
        },
        numeroRegistro: {
          type: DataTypes.INTEGER,
        },
        senha: {
          type: DataTypes.STRING(300),
        },
        email: {
          type: DataTypes.STRING(300),
        },
      },
      {
        tableName: this.modelName.toLowerCase(),
      }
    );
  }
}


