"use client"
import {Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useEffect } from "react";
// make a card list

interface Card {
    title: string;
    description: string;
    image: string;
}

async function getCards(): Promise<Card[]> {
    const res = await fetch("http://localhost:4500/cards");
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return res.json();
  }

const CardsList = () => {
    const [cards, setCards] = useState<Card[]>([]);

    useEffect(() => {
        getCards().then(setCards);
    }, []);

    

    return (
        <main>
            <div className="grid grid-cols-3 gap-8">
                {cards.map((card) => (
                    <Card key={card.title} className="flex flex-col justify-between">
                        <CardHeader className="flex-row gap-4 items-center">
                            <Avatar>
                                <AvatarImage src={card.image}/>
                                <AvatarFallback>{card.title.slice(0, 2)}</AvatarFallback>
                            </Avatar>
                            <div>
                            <CardTitle>{card.title}</CardTitle>
                            <CardDescription>{card.description}</CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent>
                            {card.description}
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button variant={"secondary"}>Button</Button>
                            {card.title && <Badge>Vegan!</Badge>}
                        </CardFooter>
                    </Card>
                ))}
            </div>
    </main>
    );
}

export default CardsList;
