import type IRepositorio from "./IRepositorio";

export default interface IUsuario {
  login: string;
  avatar: string;
  nome: string;
  bio?: string;
  perfilURL: string;
  repositoriosPublicos: number;
  seguidores: number;
  repositorios_recentes: IRepositorio[];
}
