import { useAppContext } from "../context/context";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function VendorList() {
  const { vendors } = useAppContext();

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
          <table className="w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Link</th>
                <th>Price</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {vendors.map((vendor, index) => (
                <tr key={index}>
                  <td>{vendor.name}</td>
                  <td>{vendor.link}</td>
                  <td>{vendor.price}</td>
                  <td>{vendor.googleRating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </CardContent>
      <CardFooter className="flex justify-end">
        {/* <Button variant="outline">Start</Button> */}
        <Button>I Know A Guy</Button>
      </CardFooter>
    </Card>
  );
}
