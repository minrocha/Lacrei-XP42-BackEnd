import { DataTypes } from "sequelize";
import Conection from "../database/Conection";

export class ProfissionalServicos {
  instance: any;
  modelName: string = "profissional_has_servicos";

  constructor(conexao: Conection) {
    const con = conexao.getInstance();

    this.instance = con.define(
      this.modelName,
      {
        Profissional_id: {
          type: DataTypes.INTEGER,
        },
        Servicos_codigo: {
          type: DataTypes.INTEGER,
        },
      },
      {
        tableName: this.modelName.toLowerCase(),
      }
    );
  }
}
