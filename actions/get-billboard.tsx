import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
  console.log(`${URL}/${id}`);

  const res = await fetch(`${URL}/${id}`, { mode: "no-cors" });

  return res.json();
};

export default getBillboard;
