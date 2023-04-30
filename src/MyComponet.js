import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();

  // Use router here...

  return (
 <div>{router.asPath}</div>
  );
}

export default MyComponent;