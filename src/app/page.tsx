'use client';

import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();

  return (
    <main>
      <div>
        {!session && (
          <div>
            test
            <button onClick={() => signIn()}>signIn</button>
          </div>
        )}
        {session && (
          <div>
            test
            <button onClick={() => signOut()}>signOut</button>
          </div>
        )}
      </div>
    </main>
  );
}
