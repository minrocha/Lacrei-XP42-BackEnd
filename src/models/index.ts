import { mySqlConection } from "../database";
import { Conselho } from "./conselho";
import { Consultorio } from "./consultorio";
import { DadosPessoais } from "./DadosPessoais";
import { DadosProfissionais } from "./DadosProfissionais";
import { Endereco } from "./Endereco";
import { Identidade } from "./Identidade";
import { PosCadastro } from "./PosCadastro";
import { Profissional } from "./Profissional";
import { ProfissionalServicos } from "./Profissional_Has_Servicos";
import { Servicos } from "./Servicos";
import { TelefoneContato } from "./TelefoneContato";


const conselho = new Conselho(mySqlConection);
const consultorio = new Consultorio(mySqlConection);
const dadosPessoais = new DadosPessoais(mySqlConection);
const dadosProfissionais = new DadosProfissionais(mySqlConection);
const endereco = new Endereco(mySqlConection);
const identidade = new Identidade(mySqlConection);
const poscadastro = new PosCadastro(mySqlConection);
const profissionalServicos = new ProfissionalServicos(mySqlConection);
const profissional = new Profissional(mySqlConection);
const servicos = new Servicos(mySqlConection);
const telefoneContato = new TelefoneContato(mySqlConection);

module.exports  
