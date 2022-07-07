import { DataTypes } from "sequelize";
import Conection from "../database/Conection";
import { Profissional } from "./profissional";


export class Consultorio {
  instance: any;
  modelName: string = "consultorio";

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
        horarioFuncionamento: {
          type: DataTypes.STRING,
        },
        dias_funcionamento: {
          type: DataTypes.STRING,
        },
        convenio: {
          type: DataTypes.STRING,
        },
        tiposConsultas: {
          type: DataTypes.STRING,
        },
        acessibilidade: {
          type: DataTypes.STRING,
        },
        profissionalID: {
          type: DataTypes.INTEGER,     
        },
      },
      {
        tableName: this.modelName.toLowerCase(),
      }
    );
  }
}
