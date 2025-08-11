import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    // Extract form data
    const bookData = {
      title: formData.get("title") as string,
      author: formData.get("author") as string,
      isbn: formData.get("isbn") as string,
      category: formData.get("category") as string,
      grade: formData.get("grade") as string,
      condition: formData.get("condition") as string,
      price: Number.parseFloat(formData.get("price") as string),
      description: formData.get("description") as string,
      sellerName: formData.get("sellerName") as string,
      sellerEmail: formData.get("sellerEmail") as string,
      sellerPhone: formData.get("sellerPhone") as string,
      sellerType: formData.get("sellerType") as string,
      schoolName: formData.get("schoolName") as string,
    }

    // Handle image uploads
    const images = formData.getAll("images") as File[]
    const imageUrls: string[] = []

    for (const image of images) {
      if (image.size > 0) {
        // In a real app, you would upload to a cloud storage service
        // For now, we'll just simulate the upload
        const imageUrl = `/uploads/books/${Date.now()}-${image.name}`
        imageUrls.push(imageUrl)
      }
    }

    // In a real app, you would:
    // 1. Validate the data
    // 2. Upload images to cloud storage
    // 3. Save book listing to database with status "pending_review"
    // 4. Send confirmation email to seller
    // 5. Notify admin for review

    const bookListing = {
      id: `book_${Date.now()}`,
      ...bookData,
      images: imageUrls,
      status: "pending_review",
      createdAt: new Date().toISOString(),
    }

    console.log("New book listing:", bookListing)

    // Send confirmation email (simulated)
    const emailData = {
      to: bookData.sellerEmail,
      subject: "Book Listing Submitted - School of the Year Books Store",
      html: `
        <h2>Thank you for your book listing!</h2>
        <p>Dear ${bookData.sellerName},</p>
        <p>Your book listing for "${bookData.title}" has been successfully submitted and is now under review.</p>
        <p><strong>Listing Details:</strong></p>
        <ul>
          <li>Title: ${bookData.title}</li>
          <li>Author: ${bookData.author}</li>
          <li>Price: ₹${bookData.price}</li>
          <li>Condition: ${bookData.condition}</li>
        </ul>
        <p>We'll review your listing within 24-48 hours and notify you once it's approved and live on our platform.</p>
        <p>Best regards,<br>School of the Year Team</p>
      `,
    }

    console.log("Confirmation email sent:", emailData)

    return NextResponse.json({
      success: true,
      message: "Book listing submitted successfully",
      listingId: bookListing.id,
    })
  } catch (error) {
    console.error("Error processing book listing:", error)
    return NextResponse.json({ success: false, message: "Failed to submit book listing" }, { status: 500 })
  }
}
