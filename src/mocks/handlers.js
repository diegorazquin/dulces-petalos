// src/mocks/handlers.js
import { rest } from 'msw'
import * as products from '../fixtures/products.json'
  
export const handlers = [
  rest.get('/api/product', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(products),
    )
  }),
]