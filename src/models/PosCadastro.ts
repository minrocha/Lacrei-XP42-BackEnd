import { DataTypes } from "sequelize";
import Conection from "../database/Conection";

export class PosCadastro {
  instance: any;
  modelName: string = "posCadastro";

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
        publicoAlvo: {
          type: DataTypes.STRING,
        },
        rqe: {
          type: DataTypes.STRING,
        },
        tratamentoDoencas: {
          type: DataTypes.STRING,
        },
        especialidades: {
          type: DataTypes.STRING,
        },
        formacaoAcademica: {
          type: DataTypes.STRING,
        },
        identidadeCodigo: {
          type: DataTypes.INTEGER
        },
      },
      {
        tableName: this.modelName.toLowerCase(),
      }
    );
  }
}
