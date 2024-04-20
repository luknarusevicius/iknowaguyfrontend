import { AppActionType, useAppContext } from "../context/context";
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

export default function SkuSearch() {
  const { dispatch } = useAppContext();

  const find = () => {
    dispatch({
      type: AppActionType.SET_STATE,
      state: {
        vendors: [
          {
            name: "Vendor 1",
            link: "https://vendor1.com",
            price: 100,
            sku: "123",
            phoneNumber: "123-456-7890",
            shipByDate: "2022-12-31",
            googleRating: 4.5,
          },
          {
            name: "Vendor 2",
            link: "https://vendor2.com",
            price: 120,
            sku: "123",
            phoneNumber: "123-456-7890",
            shipByDate: "2022-12-31",
            googleRating: 3,
          },
          {
            name: "Vendor 3",
            link: "https://vendor3.com",
            price: 90,
            sku: "123",
            phoneNumber: "123-456-7890",
            shipByDate: "2022-12-31",
            googleRating: 4,
          },
        ],
      },
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Add items to your search</CardTitle>
        <CardDescription>
          Add items that you want the agent to help you find
        </CardDescription>
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
              <Label htmlFor="price">Previous price you paid</Label>
              <Input id="price" placeholder="Previous price you paid" />
            </div>
          </div>

          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="date">Date needed by</Label>
              <Input id="date" placeholder="Date needed by" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={find}>Find vendors for these items</Button>
      </CardFooter>
    </Card>
  );
}
