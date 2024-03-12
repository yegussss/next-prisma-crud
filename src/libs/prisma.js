//Con esto nos conectamos a la base de datos. Pq en las variables del entorno ya estan definidas.
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();
