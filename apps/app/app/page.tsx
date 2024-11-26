import {Card} from "@repo/ui/components/card";

export default function Page(): JSX.Element {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <Card title="web app" href="http://www.google.com">
        App web 1 heading test
      </Card>
    </main>
  );
}
             ``