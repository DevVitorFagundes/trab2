import { MarcaI } from "./marcas"

export interface TenisI {
  id: number
  modelo: string
  preco: number
  destaque: boolean
  foto: string
  detalhes: string
  createdAt: Date
  updatedAt: Date
  marca: MarcaI
  marcaId: number
}