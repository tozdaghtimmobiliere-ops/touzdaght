export const dynamic = "force-dynamic"
export const revalidate = 0

import { NextResponse } from "next/server"
import { headers } from "next/headers"
import Stripe from "stripe"
import prisma from "@/lib/prisma"

export async function POST(req: Request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
    apiVersion: "2024-11-20.acacia" as any,
  })
  const body = await req.text()
  const signature = headers().get("Stripe-Signature") as string

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (error: any) {
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 })
  }

  const session = event.data.object as Stripe.Checkout.Session

  if (event.type === "checkout.session.completed") {
    // Update Order / Project Payment Status
    await prisma.payment.update({
      where: { stripeId: session.id },
      data: { status: "COMPLETED" },
    })
  }

  return new NextResponse(null, { status: 200 })
}
