import { NextResponse } from "next/server";

export interface ContactSubmission {
  doctorName: string;
  clinicName: string;
  phone: string;
  email?: string;
  city: string;
  patientVolume?: string;
  selectedServices: string[];
  message?: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactSubmission = await request.json();

    // Field validation
    if (!body.doctorName || body.doctorName.trim().length < 2) {
      return NextResponse.json(
        { error: "Doctor name is required and must be at least 2 characters." },
        { status: 400 }
      );
    }

    if (!body.phone || body.phone.trim().length < 6) {
      return NextResponse.json(
        { error: "Valid phone or WhatsApp number is required." },
        { status: 400 }
      );
    }

    if (!body.clinicName || body.clinicName.trim().length < 2) {
      return NextResponse.json(
        { error: "Clinic or chamber name is required." },
        { status: 400 }
      );
    }

    if (!body.city || body.city.trim().length < 2) {
      return NextResponse.json(
        { error: "City or chamber location is required." },
        { status: 400 }
      );
    }

    // Log the received consultation request (in production this could dispatch to CRM, webhook, or email)
    const timestamp = new Date().toISOString();
    console.log(`[Homeo Network Lead - ${timestamp}]`, {
      doctor: body.doctorName,
      clinic: body.clinicName,
      phone: body.phone,
      city: body.city,
      patientVolume: body.patientVolume || "Not specified",
      services: body.selectedServices || [],
      message: body.message || "None",
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Consultation request received successfully. Our healthcare digital architect will contact you within 2 hours.",
        lead: {
          doctorName: body.doctorName,
          clinicName: body.clinicName,
          phone: body.phone,
          timestamp,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing consultation inquiry:", error);
    return NextResponse.json(
      { error: "Internal server error. Please connect directly via WhatsApp hotline." },
      { status: 500 }
    );
  }
}
