import RealEstateInquiryEmail from "@/components/emails/InquiryEmail";
import { resend } from "@/lib/resend";
import { success } from "better-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const { ownerEmail, ownerName, propertyTitle, propertyPrice, senderEmail, senderName, message, senderPhone } = body;

        //send the Email
        resend.emails.send({
            from: process.env.EMAIL_FROM!,
            subject: `Property Inquiry from ${senderName}`,
            react: RealEstateInquiryEmail({
                senderEmail,
                senderName,
                senderPhone,
                ownerName,
                propertyPrice,
                propertyTitle,
                message
            }),
            to: ownerEmail
        })
        return NextResponse.json({ success: true })
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error: "Failed to send email",
            },
            {
                status: 500,
            }
        );
    }
}