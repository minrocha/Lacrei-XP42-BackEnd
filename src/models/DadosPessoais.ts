import { DataTypes } from "sequelize";
import Conection from "../database/Conection";

export class DadosPessoais {
  instance: any;
  modelName: string = "dadospessoais";

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
        linkFoto: {
          type: DataTypes.STRING,
        },
        descricaoFoto: {
          type: DataTypes.STRING,
        },
        sobreMim: {
          type: DataTypes.STRING,
        },
      },
      {
        tableName: this.modelName.toLowerCase(),
      }
    );
  }
}


