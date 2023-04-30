import { useRouter } from "next/router";
import React from "react";
function MyComponent() {
  const router = useRouter();

  // Use router here...

  return <div>{router.asPath}</div>;
}

export default MyComponent;
