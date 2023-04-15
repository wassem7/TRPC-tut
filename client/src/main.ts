import {
  createTRPCProxyClient,
  httpBatchLink,
} from '@trpc/client';
import { AppRouter } from '../../server/api';
const client = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/trpc',
    }),
  ],
});

async function main() {
  const result = await client.users.updateUser.mutate({
    userId: '23',
    name: 'Wassem, Darkwa',
  });
  console.log(result);
}

main();
