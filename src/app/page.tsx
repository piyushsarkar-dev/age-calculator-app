import BasicCalculator from "@/components/customui/BasicCalculator";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nextjs Starter Frontend",
  description: "Production grade Next.js starter template",
};

const page = () => {
  return (
    <section className="grid h-[90dvh] place-items-center">
      <Card className="min-w-xs">
        <CardHeader>
          <CardTitle className="grid place-items-center text-2xl">
            Basic Age Calculator
          </CardTitle>
        </CardHeader>
        <CardContent>
          <BasicCalculator />
        </CardContent>
      </Card>
    </section>
  );
};

export default page;
