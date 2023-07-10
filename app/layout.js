"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Input />
        {children}
      </body>
    </html>
  );
}

const Input = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const search = useMemo(
    () => searchParams.get("search") ?? "",
    [searchParams],
  );
  const changeSearch = useCallback(
    (e) => {
      const queryParams = new URLSearchParams();
      queryParams.set("search", e.target.value);
      router.replace(`${pathname}?${queryParams.toString()}`);
    },
    [pathname, router],
  );

  return <input value={search} onChange={changeSearch} />;
};
