import { Request, Response } from "express";

export const getLeituras = (req: Request, res: Response) => {
  res.send("Obter todas as leituras");
};

export const getLeituraById = (req: Request, res: Response) => {
  const { id } = req.params;
  res.send(`Obter leitura com ID ${id}`);
};

export const createLeitura = (req: Request, res: Response) => {
  const { tipo, valor, data } = req.body;
  res.send("Criar nova leitura");
};

export const updateLeitura = (req: Request, res: Response) => {
    const {id} = req.params;
    const {tipo, valor, data} = req.body;
    res.send(`Atualizar leitura com ID${id}`);
};

export const deletLeitura = (req: Request, res: Response) => {
    const {id} =req.params;
    res.send(`Deletar leitura com ID${id}`);
};
