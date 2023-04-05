import prisma from "../../libs/prismadb";
import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();
  if (!currentUser) return NextResponse.error();

  const {
    title,
    description,
    price,
    imageSrc,
    category,
    roomCount,
    bathroomCount,
    guestCount,
    location,
  } = await request.json();

  Object.keys({
    title,
    description,
    price,
    imageSrc,
    category,
    roomCount,
    bathroomCount,
    guestCount,
    location,
  }).forEach((key: any) => {
    if (!key) return NextResponse.error();
  });

  const listing = await prisma.listing.create({
    data: {
      title,
      description,
      price: parseInt(price),
      imageSrc,
      category,
      roomCount,
      bathroomCount,
      locationValue: location.value,
      userId: currentUser.id,
      guestCount,
    },
  });

  return NextResponse.json(listing);
}
