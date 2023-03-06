// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import type { UserProps } from 'store/slices/users/types';
import { users } from './data';

export default function handler(req: NextApiRequest, res: NextApiResponse<UserProps[] | string>) {
  const { method } = req;

  switch (method) {
    case 'GET':
      return res.status(200).json(users);
    default:
      return res.status(405).end(`Method ${method} not allowed.`);
  }
}
