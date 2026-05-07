import AdvancedCalculator from "@/components/customui/AdvancedCalculator";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advanced | Age Calculator App",
  description: "Advanced Age Calculator App",
};

const page = () => {
  return (
    <section className="grid h-[90dvh] place-items-center">
      <Card className="min-w-xs">
        <CardHeader>
          <CardTitle className="grid place-items-center text-2xl">
            Advanced Age Calculator
          </CardTitle>
        </CardHeader>
        <CardContent>
          <AdvancedCalculator />
        </CardContent>
      </Card>
    </section>
  );
};

export default page;
