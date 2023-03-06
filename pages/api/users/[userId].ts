import type { NextApiRequest, NextApiResponse } from 'next';
import type { UserProps } from 'store/slices/users/types';
import { users } from 'pages/api/users/data';

export default function handler(req: NextApiRequest, res: NextApiResponse<UserProps | string>) {
  const { method, query, body } = req;

  switch (method) {
    case 'GET':
      const userToBeReturned = users.find(({ id }) => id === Number(query.userId)) as UserProps;
      if (userToBeReturned) {
        return res.status(200).json(userToBeReturned);
      }

      return res.status(404).json('User not found');
    case 'PUT':
      const userToBeUpdated = users.find(({ id }) => id === Number(query.userId)) as UserProps;
      users.splice(
        users.findIndex(({ id }) => id === Number(query.userId)),
        1,
        Object.assign(userToBeUpdated, body)
      );
      return res.status(200).json(userToBeUpdated);
    case 'DELETE':
      const userToBeDeleted = users.find(({ id }) => id === Number(query.userId)) as UserProps;
      users.splice(
        users.findIndex(({ id }) => id === Number(query.userId)),
        1
      );
      return res.status(200).json(userToBeDeleted);
    default:
      return res.status(405).end(`Method ${method} not allowed.`);
  }
}
