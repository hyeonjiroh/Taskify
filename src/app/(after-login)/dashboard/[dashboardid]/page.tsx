export default function Page({ params }: { params: { dashboardid: string } }) {
  return <div>/dashboard/{params.dashboardid}</div>;
}
