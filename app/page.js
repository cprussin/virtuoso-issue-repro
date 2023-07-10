"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";
import { Virtuoso } from "react-virtuoso";

export default ({ searchParams }) => (
  <Virtuoso
    style={{
      width: "400px",
      height: "200px",
      border: "1px solid black",
      marginTop: "2rem",
    }}
    data={searchParams.search?.split("") ?? []}
    itemContent={(index, item) => `${index}: ${item}`}
  />
);
