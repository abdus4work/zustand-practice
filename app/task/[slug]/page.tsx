import { notFound } from "next/navigation";

const Page = async({params}:{params:Promise<{slug:string}>}) => {
  const {slug} = await params;
  if(!['a','b'].includes(slug)) return (
    notFound()
  )
  return (
    <div>Page : {slug}</div>
  );
};
export default Page;
