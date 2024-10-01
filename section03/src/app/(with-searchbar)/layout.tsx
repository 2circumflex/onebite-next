import SearchBar from "@/components/searchbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <SearchBar />
      {children}
    </div>
  );
}
