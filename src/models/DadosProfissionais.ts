import { DataTypes } from "sequelize";
import Conection from "../database/Conection";

export class DadosProfissionais {
  instance: any;
  modelName: string = "dadosprofissionais";

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
        profissao: {
          type: DataTypes.STRING,
        },
        linkRegistro: {
          type: DataTypes.STRING,
        },
        especialidadeClinica: {
          type: DataTypes.STRING,
        },
        linkFotoDocumento: {
          type: DataTypes.STRING,
        },
      },
      {
        tableName: this.modelName.toLowerCase(),
      }
    );
  }
}


