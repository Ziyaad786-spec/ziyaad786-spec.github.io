"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitApplication(formData: FormData) {
  try {
    // Extract all form data
    const data = {
      // Learner Details
      learnerSurname: formData.get("learnerSurname"),
      learnerName: formData.get("learnerName"),
      learnerNickname: formData.get("learnerNickname"),
      learnerIdNo: formData.get("learnerIdNo"),
      learnerDob: formData.get("learnerDob"),
      learnerGender: formData.get("learnerGender"),
      learnerCurrentGrade: formData.get("learnerCurrentGrade"),
      learnerCellNo: formData.get("learnerCellNo"),
      learnerHomeLanguage: formData.get("learnerHomeLanguage"),
      learnerRecentSchool: formData.get("learnerRecentSchool"),
      learnerDateOfEntry: formData.get("learnerDateOfEntry"),

      // Father's Details
      fatherSurname: formData.get("fatherSurname"),
      fatherName: formData.get("fatherName"),
      fatherIdNo: formData.get("fatherIdNo"),
      fatherEmployer: formData.get("fatherEmployer"),
      fatherOccupation: formData.get("fatherOccupation"),
      fatherPhoneH: formData.get("fatherPhoneH"),
      fatherPhoneW: formData.get("fatherPhoneW"),
      fatherCell: formData.get("fatherCell"),
      fatherEmail: formData.get("fatherEmail"),
      fatherAddress: formData.get("fatherAddress"),

      // Mother's Details
      motherSurname: formData.get("motherSurname"),
      motherName: formData.get("motherName"),
      motherIdNo: formData.get("motherIdNo"),
      motherEmployer: formData.get("motherEmployer"),
      motherOccupation: formData.get("motherOccupation"),
      motherPhoneH: formData.get("motherPhoneH"),
      motherPhoneW: formData.get("motherPhoneW"),
      motherCell: formData.get("motherCell"),
      motherEmail: formData.get("motherEmail"),
      motherAddress: formData.get("motherAddress"),

      // Other Guardian (if applicable)
      otherTitle: formData.get("otherTitle"),
      otherSurname: formData.get("otherSurname"),
      otherPhoneH: formData.get("otherPhoneH"),
      otherPhoneW: formData.get("otherPhoneW"),
      otherCell: formData.get("otherCell"),
      otherEmail: formData.get("otherEmail"),
      otherAddress: formData.get("otherAddress"),
      otherRelationship: formData.get("otherRelationship"),

      // Person Responsible for Account
      accountTitle: formData.get("accountTitle"),
      accountSurname: formData.get("accountSurname"),
      accountPhoneW: formData.get("accountPhoneW"),
      accountCell: formData.get("accountCell"),
      accountEmail: formData.get("accountEmail"),
      accountAddress: formData.get("accountAddress"),

      // Medical Information
      familyDoctor: formData.get("familyDoctor"),
      doctorTel: formData.get("doctorTel"),
      medicalAid: formData.get("medicalAid"),
      membershipNo: formData.get("membershipNo"),
      longTermMedication: formData.get("longTermMedication"),
      medicalCondition: formData.get("medicalCondition"),

      // Alternative Guardian
      altGuardianTitle: formData.get("altGuardianTitle"),
      altGuardianSurname: formData.get("altGuardianSurname"),
      altGuardianPhoneW: formData.get("altGuardianPhoneW"),
      altGuardianCell: formData.get("altGuardianCell"),
      altGuardianEmail: formData.get("altGuardianEmail"),
      altGuardianAddress: formData.get("altGuardianAddress"),
    }

    // Create email HTML
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 800px; margin: 0 auto; padding: 20px; }
            .header { background: #1e40af; color: white; padding: 20px; text-align: center; }
            .section { margin: 30px 0; padding: 20px; background: #f9fafb; border-left: 4px solid #1e40af; }
            .section-title { color: #1e40af; font-size: 18px; font-weight: bold; margin-bottom: 15px; }
            .field { margin: 10px 0; }
            .label { font-weight: bold; color: #4b5563; }
            .value { color: #1f2937; }
            .footer { margin-top: 30px; padding: 20px; background: #f3f4f6; border-top: 2px solid #1e40af; }
            .reminder { background: #fef3c7; padding: 15px; border-left: 4px solid #f59e0b; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Application for Admission</h1>
              <p>Future Focus Learning Centre</p>
            </div>

            <div class="reminder">
              <strong>⚠️ Required Documents:</strong>
              <ol>
                <li>Applicant's most recent school report (copy)</li>
                <li>Applicant's medical report (copy)</li>
                <li>Applicant's birth certificate or identity document (copy)</li>
                <li>Both parent's identity documents (copy)</li>
                <li>Non-refundable Enrolment Registration Fee (Proof of Payment)</li>
              </ol>
            </div>

            <div class="section">
              <div class="section-title">LEARNER DETAILS</div>
              <div class="field"><span class="label">Surname:</span> <span class="value">${data.learnerSurname}</span></div>
              <div class="field"><span class="label">Name:</span> <span class="value">${data.learnerName}</span></div>
              <div class="field"><span class="label">Nickname:</span> <span class="value">${data.learnerNickname}</span></div>
              <div class="field"><span class="label">ID Number:</span> <span class="value">${data.learnerIdNo}</span></div>
              <div class="field"><span class="label">Date of Birth:</span> <span class="value">${data.learnerDob}</span></div>
              <div class="field"><span class="label">Gender:</span> <span class="value">${data.learnerGender}</span></div>
              <div class="field"><span class="label">Current Grade:</span> <span class="value">${data.learnerCurrentGrade}</span></div>
              <div class="field"><span class="label">Cell Number:</span> <span class="value">${data.learnerCellNo}</span></div>
              <div class="field"><span class="label">Home Language:</span> <span class="value">${data.learnerHomeLanguage}</span></div>
              <div class="field"><span class="label">Most Recent School:</span> <span class="value">${data.learnerRecentSchool}</span></div>
              <div class="field"><span class="label">Date of Entry:</span> <span class="value">${data.learnerDateOfEntry}</span></div>
            </div>

            <div class="section">
              <div class="section-title">FATHER'S DETAILS</div>
              <div class="field"><span class="label">Surname:</span> <span class="value">${data.fatherSurname}</span></div>
              <div class="field"><span class="label">Name:</span> <span class="value">${data.fatherName}</span></div>
              <div class="field"><span class="label">ID Number:</span> <span class="value">${data.fatherIdNo}</span></div>
              <div class="field"><span class="label">Employer:</span> <span class="value">${data.fatherEmployer}</span></div>
              <div class="field"><span class="label">Occupation:</span> <span class="value">${data.fatherOccupation}</span></div>
              <div class="field"><span class="label">Phone (H):</span> <span class="value">${data.fatherPhoneH}</span></div>
              <div class="field"><span class="label">Phone (W):</span> <span class="value">${data.fatherPhoneW}</span></div>
              <div class="field"><span class="label">Cell:</span> <span class="value">${data.fatherCell}</span></div>
              <div class="field"><span class="label">Email:</span> <span class="value">${data.fatherEmail}</span></div>
              <div class="field"><span class="label">Address:</span> <span class="value">${data.fatherAddress}</span></div>
            </div>

            <div class="section">
              <div class="section-title">MOTHER'S DETAILS</div>
              <div class="field"><span class="label">Surname:</span> <span class="value">${data.motherSurname}</span></div>
              <div class="field"><span class="label">Name:</span> <span class="value">${data.motherName}</span></div>
              <div class="field"><span class="label">ID Number:</span> <span class="value">${data.motherIdNo}</span></div>
              <div class="field"><span class="label">Employer:</span> <span class="value">${data.motherEmployer}</span></div>
              <div class="field"><span class="label">Occupation:</span> <span class="value">${data.motherOccupation}</span></div>
              <div class="field"><span class="label">Phone (H):</span> <span class="value">${data.motherPhoneH}</span></div>
              <div class="field"><span class="label">Phone (W):</span> <span class="value">${data.motherPhoneW}</span></div>
              <div class="field"><span class="label">Cell:</span> <span class="value">${data.motherCell}</span></div>
              <div class="field"><span class="label">Email:</span> <span class="value">${data.motherEmail}</span></div>
              <div class="field"><span class="label">Address:</span> <span class="value">${data.motherAddress}</span></div>
            </div>

            ${
              data.otherTitle
                ? `
            <div class="section">
              <div class="section-title">OTHER GUARDIAN DETAILS</div>
              <div class="field"><span class="label">Title & Name:</span> <span class="value">${data.otherTitle}</span></div>
              <div class="field"><span class="label">Surname:</span> <span class="value">${data.otherSurname}</span></div>
              <div class="field"><span class="label">Phone (H):</span> <span class="value">${data.otherPhoneH}</span></div>
              <div class="field"><span class="label">Phone (W):</span> <span class="value">${data.otherPhoneW}</span></div>
              <div class="field"><span class="label">Cell:</span> <span class="value">${data.otherCell}</span></div>
              <div class="field"><span class="label">Email:</span> <span class="value">${data.otherEmail}</span></div>
              <div class="field"><span class="label">Address:</span> <span class="value">${data.otherAddress}</span></div>
              <div class="field"><span class="label">Relationship:</span> <span class="value">${data.otherRelationship}</span></div>
            </div>
            `
                : ""
            }

            <div class="section">
              <div class="section-title">PERSON RESPONSIBLE FOR ACCOUNT</div>
              <div class="field"><span class="label">Title & Name:</span> <span class="value">${data.accountTitle}</span></div>
              <div class="field"><span class="label">Surname:</span> <span class="value">${data.accountSurname}</span></div>
              <div class="field"><span class="label">Phone (W):</span> <span class="value">${data.accountPhoneW}</span></div>
              <div class="field"><span class="label">Cell:</span> <span class="value">${data.accountCell}</span></div>
              <div class="field"><span class="label">Email:</span> <span class="value">${data.accountEmail}</span></div>
              <div class="field"><span class="label">Address:</span> <span class="value">${data.accountAddress}</span></div>
            </div>

            <div class="section">
              <div class="section-title">MEDICAL INFORMATION</div>
              <div class="field"><span class="label">Family Doctor:</span> <span class="value">${data.familyDoctor}</span></div>
              <div class="field"><span class="label">Doctor Tel/Cell:</span> <span class="value">${data.doctorTel}</span></div>
              <div class="field"><span class="label">Medical Aid:</span> <span class="value">${data.medicalAid}</span></div>
              <div class="field"><span class="label">Membership Number:</span> <span class="value">${data.membershipNo}</span></div>
              <div class="field"><span class="label">Long Term Medication:</span> <span class="value">${data.longTermMedication || "None"}</span></div>
              <div class="field"><span class="label">Medical Condition:</span> <span class="value">${data.medicalCondition || "None"}</span></div>
            </div>

            <div class="section">
              <div class="section-title">ALTERNATIVE GUARDIAN (Emergency Contact)</div>
              <div class="field"><span class="label">Title & Name:</span> <span class="value">${data.altGuardianTitle}</span></div>
              <div class="field"><span class="label">Surname:</span> <span class="value">${data.altGuardianSurname}</span></div>
              <div class="field"><span class="label">Phone (W):</span> <span class="value">${data.altGuardianPhoneW}</span></div>
              <div class="field"><span class="label">Cell:</span> <span class="value">${data.altGuardianCell}</span></div>
              <div class="field"><span class="label">Email:</span> <span class="value">${data.altGuardianEmail}</span></div>
              <div class="field"><span class="label">Address:</span> <span class="value">${data.altGuardianAddress}</span></div>
            </div>

            <div class="footer">
              <p><strong>Submitted:</strong> ${new Date().toLocaleString("en-ZA", { timeZone: "Africa/Johannesburg" })}</p>
              <p><strong>Registration Number:</strong> 2018/206549/07</p>
              <p><strong>Contact:</strong> 071 381 9885 | info@futurefocuslearningcentre.co.za</p>
              <p><strong>Address:</strong> 1 Links Ave, Fancourt, George 6529</p>
            </div>
          </div>
        </body>
      </html>
    `

    // Send email to school
    const { data: emailData, error } = await resend.emails.send({
      from: "Future Focus Applications <onboarding@resend.dev>",
      to: ["info@futurefocuslearningcentre.co.za"],
      replyTo: (data.accountEmail as string) || (data.motherEmail as string) || (data.fatherEmail as string),
      subject: `New Application: ${data.learnerName} ${data.learnerSurname}`,
      html: emailHtml,
    })

    if (error) {
      console.error("[v0] Email send error:", error)
      return { success: false, error: error.message }
    }

    // Send confirmation email to parent
    const parentEmail = data.accountEmail || data.motherEmail || data.fatherEmail
    if (parentEmail) {
      await resend.emails.send({
        from: "Future Focus Learning Centre <onboarding@resend.dev>",
        to: [parentEmail as string],
        subject: "Application Received - Future Focus Learning Centre",
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: #1e40af; color: white; padding: 20px; text-align: center; }
                .content { padding: 20px; background: #f9fafb; }
                .reminder { background: #fef3c7; padding: 15px; border-left: 4px solid #f59e0b; margin: 20px 0; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>Application Received</h1>
                </div>
                <div class="content">
                  <p>Dear Parent/Guardian,</p>
                  <p>Thank you for submitting an application for <strong>${data.learnerName} ${data.learnerSurname}</strong> to Future Focus Learning Centre.</p>
                  <p>We have received your application and will review it shortly.</p>
                  
                  <div class="reminder">
                    <strong>⚠️ Important Reminder:</strong>
                    <p>Please ensure you submit the following required documents:</p>
                    <ol>
                      <li>Applicant's most recent school report (copy)</li>
                      <li>Applicant's medical report (copy)</li>
                      <li>Applicant's birth certificate or identity document (copy)</li>
                      <li>Both parent's identity documents (copy)</li>
                      <li>Non-refundable Enrolment Registration Fee (Proof of Payment)</li>
                    </ol>
                    <p>You can email these documents to: <strong>info@futurefocuslearningcentre.co.za</strong></p>
                  </div>

                  <p>We will contact you within 2-3 business days regarding the next steps.</p>
                  <p>If you have any questions, please don't hesitate to contact us:</p>
                  <ul>
                    <li>Phone: 071 381 9885</li>
                    <li>Email: info@futurefocuslearningcentre.co.za</li>
                    <li>Address: 1 Links Ave, Fancourt, George 6529</li>
                  </ul>
                  <p>Best regards,<br><strong>Future Focus Learning Centre Team</strong></p>
                </div>
              </div>
            </body>
          </html>
        `,
      })
    }

    return { success: true, emailId: emailData?.id }
  } catch (error) {
    console.error("[v0] Application submission error:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to submit application",
    }
  }
}
