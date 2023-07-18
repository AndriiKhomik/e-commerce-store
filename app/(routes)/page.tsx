import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";

export const relative = 0;

const HomePage = async () => {
  const billboard = await getBillboard("b80a6c98-56d7-48ba-a8d1-c70f75f319f6");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
};

export default HomePage;
