import { ReactNode, Suspense } from "react";
import Searchbar from "@/components/searchbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* <div>{new Date().toLocaleString()}</div> */}
      {/* https://nextjs.org/docs/app/building-your-application/caching#client-side-router-cache */}
      {/* 클라이언트 라우터 캐시를 사용하더라도 새로고침, 탭을 껐다 다시 접속하는 경우는 동작하지 않음  */}
      <Suspense fallback={<div>Loading</div>}>
        <Searchbar />
      </Suspense>
      {children}
    </div>
  );
}
