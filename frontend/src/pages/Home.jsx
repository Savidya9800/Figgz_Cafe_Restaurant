import React from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Home() {
  const menuItems = [
    {
      id: 1,
      name: "Classic Burger",
      category: "Main Course",
      price: "$12.99",
      status: "Available",
      description: "Juicy beef patty with lettuce, tomato, and cheese"
    },
    {
      id: 2,
      name: "Caesar Salad",
      category: "Appetizer",
      price: "$8.99",
      status: "Available",
      description: "Fresh romaine lettuce with parmesan and croutons"
    },
    {
      id: 3,
      name: "Cappuccino",
      category: "Beverage",
      price: "$4.50",
      status: "Available",
      description: "Rich espresso with steamed milk foam"
    },
    {
      id: 4,
      name: "Chocolate Cake",
      category: "Dessert",
      price: "$6.99",
      status: "Limited",
      description: "Decadent chocolate cake with vanilla frosting"
    },
    {
      id: 5,
      name: "Fish & Chips",
      category: "Main Course",
      price: "$15.99",
      status: "Unavailable",
      description: "Beer-battered fish with crispy fries"
    }
  ];

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Hero Section */}
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold">Welcome to Figgz Cafe</CardTitle>
          <CardDescription className="text-lg">
            Discover our delicious menu items and their availability
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <Button size="lg">View Full Menu</Button>
        </CardContent>
      </Card>

      {/* Menu Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Popular Menu Items</CardTitle>
          <CardDescription>
            Check out our most popular dishes and their current availability
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>
              A list of our popular menu items and their current availability.
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Item ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Price</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {menuItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.id}</TableCell>
                  <TableCell className="font-semibold">{item.name}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell className="max-w-xs text-sm text-muted-foreground">
                    {item.description}
                  </TableCell>
                  <TableCell className="font-medium">{item.price}</TableCell>
                  <TableCell className="text-right">
                    <Badge 
                      variant={
                        item.status === "Available" 
                          ? "default" 
                          : item.status === "Limited" 
                          ? "secondary" 
                          : "destructive"
                      }
                    >
                      {item.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

export default Home;