import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function Main() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Create evaluation</CardTitle>
        <CardDescription>Define evaluation constraints</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-2">
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="sku">SKU</Label>
              <Input
                id="sku"
                placeholder="Stock keeping unit number of a product"
              />
            </div>
          </div>

          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="quantity">Quantity</Label>
              <Input id="quantity" placeholder="Quantity of products" />
            </div>
          </div>

          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="price">SKU</Label>
              <Input id="proce" placeholder="Price of a product" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        {/* <Button variant="outline">Start</Button> */}
        <Button>Start</Button>
      </CardFooter>
    </Card>
  );
}
