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
import { Checkbox } from "./ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export default function VendorList() {
  const { dispatch, vendors } = useAppContext();

  const selectVendor = (index: number) => {
    dispatch({
      type: AppActionType.SET_STATE,
      state: {
        vendors: vendors.map((vendor, i) => {
          if (i === index) {
            return { ...vendor, selected: !vendor.selected };
          }
          return vendor;
        }),
      },
    });
  };

  const initiateAgents = () => {
    const selectedVendors = vendors.filter((vendor) => vendor.selected);

    console.log("Selected Vendors", selectedVendors);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Vendors</CardTitle>
        <CardDescription>
          Here are vendors that we found who might carry the item which you are
          searching for
        </CardDescription>
      </CardHeader>
      <CardContent>
        {vendors.length > 0 && (
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Link</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Rating</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vendors.map((vendor, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Checkbox
                      id="selected"
                      checked={vendor.selected}
                      onCheckedChange={() => selectVendor(index)}
                    />
                  </TableCell>
                  <TableCell>{vendor.name}</TableCell>
                  <TableCell>{vendor.link}</TableCell>
                  <TableCell>{vendor.price}</TableCell>
                  <TableCell>{vendor.googleRating}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
      <CardFooter className="flex justify-end">
        {/* <Button variant="outline">Start</Button> */}
        <Button onClick={initiateAgents}>I Know A Guy</Button>
      </CardFooter>
    </Card>
  );
}
