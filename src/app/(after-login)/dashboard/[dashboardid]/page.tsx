import AddColumnButton from "./_components/AddColumnButton";

export default function Page({ params }: { params: { dashboardid: string } }) {
  return (
    <div className="flex flex-col pc:flex-row">
      <div>컬럼 컴포넌트</div>
      <div className="px-3 py-4 tablet:p-5 pc:px-5 pc:py-[68px]">
        <AddColumnButton />
      </div>
    </div>
  );
}
