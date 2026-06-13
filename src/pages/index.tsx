import DefaultLayout from "@/layouts/default";
import { Typography } from "@heroui/react";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <Typography.Heading>Starter App</Typography.Heading>
      <div className="mt-4">
        <Typography.Paragraph>
          This is a starter app built with NextUI and React Router. It includes a
          responsive navbar, theme switcher, and a simple layout to get you
          started quickly.
        </Typography.Paragraph>
      </div>
    </DefaultLayout>
  );
}
