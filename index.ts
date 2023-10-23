import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/users', async (req, res) => {
  const users = await prisma.appUser.findMany();
  res.json(users);
});

app.listen(3000, () => {
  console.log('Servidor en funcionamiento en el puerto 3000');
});

