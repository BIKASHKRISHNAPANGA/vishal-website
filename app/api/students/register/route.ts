import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const studentData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      age: formData.get("age") as string,
      class: formData.get("class") as string,
      schoolName: formData.get("schoolName") as string,
      academicEvents: JSON.parse((formData.get("academicEvents") as string) || "[]"),
      sportsEvents: JSON.parse((formData.get("sportsEvents") as string) || "[]"),
      totalFee: Number.parseInt((formData.get("totalFee") as string) || "0"),
      category: formData.get("category") as string,
      agreeTerms: formData.get("agreeTerms") === "true",
      profilePhoto: formData.get("profilePhoto") as File | null,
    }

    // Validate required fields
    if (
      !studentData.name ||
      !studentData.email ||
      !studentData.age ||
      !studentData.class ||
      !studentData.schoolName ||
      !studentData.agreeTerms ||
      (studentData.academicEvents.length === 0 && studentData.sportsEvents.length === 0)
    ) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Generate unique student ID and QR code data
    const studentId = `STU${Date.now()}${Math.random().toString(36).substr(2, 4).toUpperCase()}`
    const qrCodeData = `STUDENT_ID:${studentId}|NAME:${studentData.name}|SCHOOL:${studentData.schoolName}|EVENTS:${[...studentData.academicEvents, ...studentData.sportsEvents].join(",")}`

    // In a real application, you would:
    // 1. Process payment with Razorpay/Stripe
    // 2. Save student data to database
    // 3. Upload profile photo to cloud storage
    // 4. Generate QR code
    // 5. Send confirmation email with ticket

    // Simulate database save
    console.log("Student registration data:", {
      ...studentData,
      studentId,
      qrCodeData,
      registrationDate: new Date().toISOString(),
      paymentStatus: "completed",
    })

    // Simulate email sending with QR code
    const emailContent = {
      to: studentData.email,
      subject: "Registration Confirmation - School of the Year Championship",
      html: `
        <h2>Welcome to School of the Year Championship!</h2>
        <p>Dear ${studentData.name},</p>
        <p>Your registration has been successfully completed and payment processed.</p>
        
        <h3>Registration Details:</h3>
        <ul>
          <li><strong>Student ID:</strong> ${studentId}</li>
          <li><strong>Category:</strong> ${studentData.category}</li>
          <li><strong>School:</strong> ${studentData.schoolName}</li>
          <li><strong>Registration Fee:</strong> ₹${studentData.totalFee}</li>
          <li><strong>Registration Date:</strong> ${new Date().toLocaleDateString()}</li>
        </ul>
        
        <h3>Selected Events:</h3>
        ${
          studentData.academicEvents.length > 0
            ? `
        <h4>Academic Events:</h4>
        <ul>
          ${studentData.academicEvents.map((event: string) => `<li>${event}</li>`).join("")}
        </ul>
        `
            : ""
        }
        
        ${
          studentData.sportsEvents.length > 0
            ? `
        <h4>Sports Events:</h4>
        <ul>
          ${studentData.sportsEvents.map((event: string) => `<li>${event}</li>`).join("")}
        </ul>
        `
            : ""
        }
        
        <h3>Important Information:</h3>
        <ul>
          <li>Keep your Student ID (${studentId}) safe for all communications</li>
          <li>Your QR code ticket is attached to this email</li>
          <li>Bring a printed copy of this email and QR code on event day</li>
          <li>Event details and venue information will be sent separately</li>
        </ul>
        
        <p><strong>QR Code Data:</strong> ${qrCodeData}</p>
        
        <p>If you have any questions, please contact us at students@schooloftheyear.com</p>
        
        <p>Best of luck with your preparations!<br>School of the Year Team</p>
      `,
    }

    console.log("Email would be sent:", emailContent)

    return NextResponse.json({
      success: true,
      message: "Student registered successfully",
      studentId,
      data: {
        name: studentData.name,
        email: studentData.email,
        category: studentData.category,
        totalFee: studentData.totalFee,
        events: [...studentData.academicEvents, ...studentData.sportsEvents],
        registrationDate: new Date().toISOString(),
        qrCodeData,
      },
    })
  } catch (error) {
    console.error("Student registration error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
