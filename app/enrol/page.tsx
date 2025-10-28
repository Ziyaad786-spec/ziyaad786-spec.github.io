"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, CheckCircle2, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { jsPDF } from "jspdf"

export default function EnrolPage() {
  const [formData, setFormData] = useState({
    // Learner Details
    learnerSurname: "",
    learnerName: "",
    learnerNickname: "",
    learnerIdNo: "",
    learnerDateOfBirth: "",
    learnerGender: "",
    learnerCurrentGrade: "",
    learnerCellNo: "",
    learnerHomeLanguage: "",
    learnerRecentSchool: "",
    learnerMedication: "",
    learnerMedicalCondition: "",

    // Father's Details
    fatherSurname: "",
    fatherName: "",
    fatherIdNo: "",
    fatherEmployer: "",
    fatherOccupation: "",
    fatherPhoneHome: "",
    fatherPhoneWork: "",
    fatherPhoneCell: "",
    fatherEmail: "",
    fatherAddress: "",

    // Mother's Details
    motherSurname: "",
    motherName: "",
    motherIdNo: "",
    motherEmployer: "",
    motherOccupation: "",
    motherPhoneHome: "",
    motherPhoneWork: "",
    motherPhoneCell: "",
    motherEmail: "",
    motherAddress: "",

    // Other Guardian (if applicable)
    otherTitle: "",
    otherSurname: "",
    otherPhoneHome: "",
    otherPhoneWork: "",
    otherPhoneCell: "",
    otherEmail: "",
    otherAddress: "",

    // Person Responsible for Account
    accountTitle: "",
    accountSurname: "",
    accountRelationship: "",
    accountPhoneWork: "",
    accountPhoneCell: "",
    accountEmail: "",
    accountAddress: "",

    // Family Information
    familyDoctor: "",
    familyDoctorPhone: "",
    medicalAid: "",
    medicalAidMembership: "",

    // Alternative Guardian (Emergency Contact)
    altGuardianTitle: "",
    altGuardianSurname: "",
    altGuardianPhoneWork: "",
    altGuardianPhoneCell: "",
    altGuardianEmail: "",
    altGuardianAddress: "",

    // Date of Entry
    dateOfEntry: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const generatePDF = () => {
    setIsGenerating(true)

    try {
      const doc = new jsPDF()
      let yPosition = 20

      // Helper function to add text with word wrap
      const addText = (text: string, x: number, fontSize = 10, isBold = false) => {
        doc.setFontSize(fontSize)
        doc.setFont("helvetica", isBold ? "bold" : "normal")

        if (yPosition > 270) {
          doc.addPage()
          yPosition = 20
        }

        const lines = doc.splitTextToSize(text, 180)
        doc.text(lines, x, yPosition)
        yPosition += lines.length * (fontSize * 0.5) + 2
      }

      // Header
      doc.setFillColor(16, 185, 129)
      doc.rect(0, 0, 210, 30, "F")
      doc.setTextColor(255, 255, 255)
      doc.setFontSize(20)
      doc.setFont("helvetica", "bold")
      doc.text("APPLICATION FOR ADMISSION", 105, 15, { align: "center" })
      doc.setFontSize(12)
      doc.text("Future Focus Learning Centre", 105, 22, { align: "center" })
      doc.setTextColor(0, 0, 0)

      yPosition = 40

      // Registration number
      addText("Reg no.: 2018/206549/07", 15, 9)
      yPosition += 5

      // Learner Details
      addText("LEARNER DETAILS", 15, 14, true)
      yPosition += 2
      addText(`Surname: ${formData.learnerSurname}`, 15)
      addText(`First Name: ${formData.learnerName}`, 15)
      if (formData.learnerNickname) addText(`Nickname: ${formData.learnerNickname}`, 15)
      addText(`ID Number: ${formData.learnerIdNo}`, 15)
      addText(`Date of Birth: ${formData.learnerDateOfBirth}`, 15)
      addText(`Gender: ${formData.learnerGender}`, 15)
      addText(`Current Grade: ${formData.learnerCurrentGrade}`, 15)
      if (formData.learnerCellNo) addText(`Cell Number: ${formData.learnerCellNo}`, 15)
      addText(`Home Language: ${formData.learnerHomeLanguage}`, 15)
      addText(`Most Recent School: ${formData.learnerRecentSchool}`, 15)
      addText(`Date of Entry: ${formData.dateOfEntry}`, 15)
      if (formData.learnerMedication) addText(`Long-term Medication: ${formData.learnerMedication}`, 15)
      if (formData.learnerMedicalCondition) addText(`Medical Condition: ${formData.learnerMedicalCondition}`, 15)
      yPosition += 5

      // Father's Details
      addText("FATHER'S DETAILS", 15, 14, true)
      yPosition += 2
      addText(`Name: ${formData.fatherName} ${formData.fatherSurname}`, 15)
      addText(`ID Number: ${formData.fatherIdNo}`, 15)
      if (formData.fatherEmployer) addText(`Employer: ${formData.fatherEmployer}`, 15)
      if (formData.fatherOccupation) addText(`Occupation: ${formData.fatherOccupation}`, 15)
      if (formData.fatherPhoneHome) addText(`Phone (Home): ${formData.fatherPhoneHome}`, 15)
      if (formData.fatherPhoneWork) addText(`Phone (Work): ${formData.fatherPhoneWork}`, 15)
      addText(`Phone (Cell): ${formData.fatherPhoneCell}`, 15)
      addText(`Email: ${formData.fatherEmail}`, 15)
      addText(`Address: ${formData.fatherAddress}`, 15)
      yPosition += 5

      // Mother's Details
      addText("MOTHER'S DETAILS", 15, 14, true)
      yPosition += 2
      addText(`Name: ${formData.motherName} ${formData.motherSurname}`, 15)
      addText(`ID Number: ${formData.motherIdNo}`, 15)
      if (formData.motherEmployer) addText(`Employer: ${formData.motherEmployer}`, 15)
      if (formData.motherOccupation) addText(`Occupation: ${formData.motherOccupation}`, 15)
      if (formData.motherPhoneHome) addText(`Phone (Home): ${formData.motherPhoneHome}`, 15)
      if (formData.motherPhoneWork) addText(`Phone (Work): ${formData.motherPhoneWork}`, 15)
      addText(`Phone (Cell): ${formData.motherPhoneCell}`, 15)
      addText(`Email: ${formData.motherEmail}`, 15)
      addText(`Address: ${formData.motherAddress}`, 15)
      yPosition += 5

      // Other Guardian (if filled)
      if (formData.otherTitle || formData.otherSurname) {
        addText("OTHER GUARDIAN", 15, 14, true)
        yPosition += 2
        if (formData.otherTitle) addText(`Name: ${formData.otherTitle} ${formData.otherSurname}`, 15)
        if (formData.otherPhoneHome) addText(`Phone (Home): ${formData.otherPhoneHome}`, 15)
        if (formData.otherPhoneWork) addText(`Phone (Work): ${formData.otherPhoneWork}`, 15)
        if (formData.otherPhoneCell) addText(`Phone (Cell): ${formData.otherPhoneCell}`, 15)
        if (formData.otherEmail) addText(`Email: ${formData.otherEmail}`, 15)
        if (formData.otherAddress) addText(`Address: ${formData.otherAddress}`, 15)
        yPosition += 5
      }

      // Person Responsible for Account
      addText("PERSON RESPONSIBLE FOR ACCOUNT", 15, 14, true)
      yPosition += 2
      addText(`Name: ${formData.accountTitle} ${formData.accountSurname}`, 15)
      addText(`Relationship: ${formData.accountRelationship}`, 15)
      if (formData.accountPhoneWork) addText(`Phone (Work): ${formData.accountPhoneWork}`, 15)
      addText(`Phone (Cell): ${formData.accountPhoneCell}`, 15)
      addText(`Email: ${formData.accountEmail}`, 15)
      addText(`Address: ${formData.accountAddress}`, 15)
      yPosition += 5

      // Family Information
      addText("FAMILY INFORMATION", 15, 14, true)
      yPosition += 2
      addText(`Family Doctor: ${formData.familyDoctor}`, 15)
      addText(`Doctor's Phone: ${formData.familyDoctorPhone}`, 15)
      addText(`Medical Aid: ${formData.medicalAid}`, 15)
      addText(`Membership Number: ${formData.medicalAidMembership}`, 15)
      yPosition += 5

      // Alternative Guardian
      addText("ALTERNATIVE GUARDIAN (Emergency Contact)", 15, 14, true)
      yPosition += 2
      addText(`Name: ${formData.altGuardianTitle} ${formData.altGuardianSurname}`, 15)
      if (formData.altGuardianPhoneWork) addText(`Phone (Work): ${formData.altGuardianPhoneWork}`, 15)
      addText(`Phone (Cell): ${formData.altGuardianPhoneCell}`, 15)
      addText(`Email: ${formData.altGuardianEmail}`, 15)
      addText(`Address: ${formData.altGuardianAddress}`, 15)
      yPosition += 10

      // Declaration
      if (yPosition > 200) {
        doc.addPage()
        yPosition = 20
      }

      addText("DECLARATION", 15, 14, true)
      yPosition += 2
      doc.setFontSize(9)
      addText(
        "1. I/We declare that all the particulars furnished by me/us on this form are true and correct. I undertake to comply with the conditions, rules, regulations and decisions of the Future Focus Learning Centre and any amendments thereto.",
        15,
        9,
      )
      addText(
        "2. I/We confirm the above address is correct and acknowledge to be my current address - 'domicilium citandi et executandi'.",
        15,
        9,
      )
      addText(
        "3. I/We agree that the monthly fees are to be paid in advance, whether upon receipt of invoice or by the 1st of every month and that registration fee are non-refundable.",
        15,
        9,
      )
      addText("4. I/We will give 3 Months notice in writing (e-mail), in advance.", 15, 9)
      addText(
        "5. I/We understand that my child has never participated in the use or distribution of any illegal substance or undergone any serious disciplinary action.",
        15,
        9,
      )
      addText(
        "6. I/We agree that Future Focus Learning Centre may check and confirm any information on the application form and may make any enquiries it deems necessary, including credit worthiness with any credit bureau and previous schools/centres.",
        15,
        9,
      )
      yPosition += 5
      addText("Non-payment of fees will result in automatic suspension of the learner.", 15, 9, true)
      yPosition += 10

      // Signature section
      addText("Signed on this _____ day of _________________, at _________________", 15, 10)
      yPosition += 10
      addText("Name & Surname (Mother): ________________________  Signature: ________________", 15, 10)
      yPosition += 8
      addText("Name & Surname (Father): ________________________  Signature: ________________", 15, 10)
      yPosition += 8
      addText("Name & Surname (Witness): _______________________  Signature: ________________", 15, 10)

      // Footer
      doc.setFontSize(8)
      doc.setTextColor(100, 100, 100)
      const pageCount = doc.getNumberOfPages()
      for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i)
        doc.text(
          "1 Links Ave, Fancourt * GEORGE 6529 * 071 381 9885 * info@futurefocuslearningcentre.co.za",
          105,
          290,
          { align: "center" },
        )
      }

      // Save the PDF
      const fileName = `FFLC_Application_${formData.learnerSurname}_${formData.learnerName}.pdf`
      doc.save(fileName)

      setSubmitted(true)
    } catch (error) {
      console.error("[v0] PDF generation error:", error)
      alert("Failed to generate PDF. Please try again.")
    } finally {
      setIsGenerating(false)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    generatePDF()
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-amber-50 flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle2 className="h-16 w-16 text-emerald-600" />
            </div>
            <CardTitle className="text-3xl text-emerald-600">Application Downloaded!</CardTitle>
            <CardDescription className="text-lg mt-4">
              Your enrollment application has been successfully generated and downloaded as a PDF.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-4">
              <p className="text-emerald-900 text-center font-semibold mb-2">Next Steps:</p>
              <ol className="list-decimal list-inside space-y-1 text-sm text-emerald-800">
                <li>Print and sign the downloaded PDF application</li>
                <li>Gather the required documents (listed below)</li>
                <li>
                  Email everything to: <strong>info@futurefocuslearningcentre.co.za</strong>
                </li>
              </ol>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h3 className="font-semibold text-amber-900 mb-2">Required Documents:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-amber-800">
                <li>Applicant's most recent school report (copy)</li>
                <li>Applicant's medical report (copy)</li>
                <li>Applicant's birth certificate or identity document (copy)</li>
                <li>Both parent's identity documents (copy)</li>
                <li>Non-refundable Enrolment Registration Fee (Proof of Payment)</li>
              </ul>
            </div>
            <div className="flex gap-4">
              <Button onClick={() => setSubmitted(false)} variant="outline" className="flex-1">
                Create Another Application
              </Button>
              <Button
                onClick={() => (window.location.href = "/")}
                className="flex-1 bg-emerald-600 hover:bg-emerald-700"
              >
                Return Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-amber-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" onClick={() => (window.location.href = "/")} className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Application for Admission</h1>
            <p className="text-lg text-gray-600">Future Focus Learning Centre</p>
            <p className="text-sm text-gray-500 mt-2">Reg no.: 2018/206549/07</p>
          </div>
        </div>

        {/* Important Notice */}
        <Card className="mb-8 border-emerald-200 bg-emerald-50">
          <CardHeader>
            <CardTitle className="text-emerald-900">Required Documents</CardTitle>
            <CardDescription className="text-emerald-800">
              The following documents must accompany this application:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-decimal list-inside space-y-2 text-sm text-emerald-900">
              <li>Applicant's most recent school report (copy)</li>
              <li>
                Applicant's medical report (copy) - any known allergies, previous illnesses, physical or learning
                difficulties, including any relevant information on past medical treatment/s, therapy, occupational
                should be disclosed
              </li>
              <li>Applicant's birth certificate or identity document (copy)</li>
              <li>Both parent's identity documents (copy)</li>
              <li>Non-refundable Enrolment Registration Fee to be paid in full (Proof of Payment)</li>
            </ul>
          </CardContent>
        </Card>

        {/* Error Message Display */}
        {error && (
          <Card className="mb-8 border-red-200 bg-red-50">
            <CardContent className="pt-6">
              <p className="text-red-900 text-center">{error}</p>
            </CardContent>
          </Card>
        )}

        {/* Application Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Learner Details */}
          <Card>
            <CardHeader>
              <CardTitle>Learner Details</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="learnerSurname">Surname *</Label>
                <Input
                  id="learnerSurname"
                  name="learnerSurname"
                  value={formData.learnerSurname}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="learnerName">First Name *</Label>
                <Input
                  id="learnerName"
                  name="learnerName"
                  value={formData.learnerName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="learnerNickname">Nickname</Label>
                <Input
                  id="learnerNickname"
                  name="learnerNickname"
                  value={formData.learnerNickname}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="learnerIdNo">ID Number *</Label>
                <Input
                  id="learnerIdNo"
                  name="learnerIdNo"
                  value={formData.learnerIdNo}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="learnerDob">Date of Birth *</Label>
                <Input
                  id="learnerDob"
                  name="learnerDateOfBirth"
                  type="date"
                  value={formData.learnerDateOfBirth}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="learnerGender">Gender *</Label>
                <Input
                  id="learnerGender"
                  name="learnerGender"
                  value={formData.learnerGender}
                  onChange={handleInputChange}
                  placeholder="Male/Female"
                  required
                />
              </div>
              <div>
                <Label htmlFor="learnerCurrentGrade">Current Grade *</Label>
                <Input
                  id="learnerCurrentGrade"
                  name="learnerCurrentGrade"
                  value={formData.learnerCurrentGrade}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="learnerCellNo">Cell Number</Label>
                <Input
                  id="learnerCellNo"
                  name="learnerCellNo"
                  value={formData.learnerCellNo}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="learnerHomeLanguage">Home Language *</Label>
                <Input
                  id="learnerHomeLanguage"
                  name="learnerHomeLanguage"
                  value={formData.learnerHomeLanguage}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="learnerRecentSchool">Most Recent School Attended *</Label>
                <Input
                  id="learnerRecentSchool"
                  name="learnerRecentSchool"
                  value={formData.learnerRecentSchool}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="learnerDateOfEntry">Date of Entry *</Label>
                <Input
                  id="learnerDateOfEntry"
                  name="dateOfEntry"
                  type="date"
                  value={formData.dateOfEntry}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="longTermMedication">Details of Long-term Medication</Label>
                <Textarea
                  id="longTermMedication"
                  name="longTermMedication"
                  value={formData.learnerMedication}
                  onChange={handleInputChange}
                  rows={2}
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="medicalCondition">Details of Any Medical Condition</Label>
                <Textarea
                  id="medicalCondition"
                  name="medicalCondition"
                  value={formData.learnerMedicalCondition}
                  onChange={handleInputChange}
                  rows={2}
                />
              </div>
            </CardContent>
          </Card>

          {/* Father's Details */}
          <Card>
            <CardHeader>
              <CardTitle>Father's Details</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fatherSurname">Surname *</Label>
                <Input
                  id="fatherSurname"
                  name="fatherSurname"
                  value={formData.fatherSurname}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="fatherName">First Name *</Label>
                <Input
                  id="fatherName"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="fatherIdNo">ID Number *</Label>
                <Input
                  id="fatherIdNo"
                  name="fatherIdNo"
                  value={formData.fatherIdNo}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="fatherEmployer">Employer</Label>
                <Input
                  id="fatherEmployer"
                  name="fatherEmployer"
                  value={formData.fatherEmployer}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="fatherOccupation">Occupation</Label>
                <Input
                  id="fatherOccupation"
                  name="fatherOccupation"
                  value={formData.fatherOccupation}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="fatherPhoneHome">Phone (Home)</Label>
                <Input
                  id="fatherPhoneHome"
                  name="fatherPhoneHome"
                  value={formData.fatherPhoneHome}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="fatherPhoneWork">Phone (Work)</Label>
                <Input
                  id="fatherPhoneWork"
                  name="fatherPhoneWork"
                  value={formData.fatherPhoneWork}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="fatherPhoneCell">Phone (Cell) *</Label>
                <Input
                  id="fatherPhoneCell"
                  name="fatherPhoneCell"
                  value={formData.fatherPhoneCell}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="fatherEmail">Email Address *</Label>
                <Input
                  id="fatherEmail"
                  name="fatherEmail"
                  type="email"
                  value={formData.fatherEmail}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="fatherAddress">Home Address (in full) *</Label>
                <Textarea
                  id="fatherAddress"
                  name="fatherAddress"
                  value={formData.fatherAddress}
                  onChange={handleInputChange}
                  rows={2}
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Mother's Details */}
          <Card>
            <CardHeader>
              <CardTitle>Mother's Details</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="motherSurname">Surname *</Label>
                <Input
                  id="motherSurname"
                  name="motherSurname"
                  value={formData.motherSurname}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="motherName">First Name *</Label>
                <Input
                  id="motherName"
                  name="motherName"
                  value={formData.motherName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="motherIdNo">ID Number *</Label>
                <Input
                  id="motherIdNo"
                  name="motherIdNo"
                  value={formData.motherIdNo}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="motherEmployer">Employer</Label>
                <Input
                  id="motherEmployer"
                  name="motherEmployer"
                  value={formData.motherEmployer}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="motherOccupation">Occupation</Label>
                <Input
                  id="motherOccupation"
                  name="motherOccupation"
                  value={formData.motherOccupation}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="motherPhoneHome">Phone (Home)</Label>
                <Input
                  id="motherPhoneHome"
                  name="motherPhoneHome"
                  value={formData.motherPhoneHome}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="motherPhoneWork">Phone (Work)</Label>
                <Input
                  id="motherPhoneWork"
                  name="motherPhoneWork"
                  value={formData.motherPhoneWork}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="motherPhoneCell">Phone (Cell) *</Label>
                <Input
                  id="motherPhoneCell"
                  name="motherPhoneCell"
                  value={formData.motherPhoneCell}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="motherEmail">Email Address *</Label>
                <Input
                  id="motherEmail"
                  name="motherEmail"
                  type="email"
                  value={formData.motherEmail}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="motherAddress">Home Address (in full) *</Label>
                <Textarea
                  id="motherAddress"
                  name="motherAddress"
                  value={formData.motherAddress}
                  onChange={handleInputChange}
                  rows={2}
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Other Guardian (Optional) */}
          <Card>
            <CardHeader>
              <CardTitle>Other Guardian (if applicable)</CardTitle>
              <CardDescription>Complete only if someone other than parents is the guardian</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="otherTitle">Title & Name</Label>
                <Input
                  id="otherTitle"
                  name="otherTitle"
                  value={formData.otherTitle}
                  onChange={handleInputChange}
                  placeholder="e.g., Mr. John Smith"
                />
              </div>
              <div>
                <Label htmlFor="otherSurname">Surname</Label>
                <Input
                  id="otherSurname"
                  name="otherSurname"
                  value={formData.otherSurname}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="otherPhoneHome">Phone (Home)</Label>
                <Input
                  id="otherPhoneHome"
                  name="otherPhoneHome"
                  value={formData.otherPhoneHome}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="otherPhoneWork">Phone (Work)</Label>
                <Input
                  id="otherPhoneWork"
                  name="otherPhoneWork"
                  value={formData.otherPhoneWork}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="otherPhoneCell">Phone (Cell)</Label>
                <Input
                  id="otherPhoneCell"
                  name="otherPhoneCell"
                  value={formData.otherPhoneCell}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="otherEmail">Email Address</Label>
                <Input
                  id="otherEmail"
                  name="otherEmail"
                  type="email"
                  value={formData.otherEmail}
                  onChange={handleInputChange}
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="otherAddress">Address (in full)</Label>
                <Textarea
                  id="otherAddress"
                  name="otherAddress"
                  value={formData.otherAddress}
                  onChange={handleInputChange}
                  rows={2}
                />
              </div>
            </CardContent>
          </Card>

          {/* Person Responsible for Account */}
          <Card>
            <CardHeader>
              <CardTitle>Person Responsible for Account</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="accountTitle">Title & Name *</Label>
                <Input
                  id="accountTitle"
                  name="accountTitle"
                  value={formData.accountTitle}
                  onChange={handleInputChange}
                  placeholder="e.g., Mr. John Smith"
                  required
                />
              </div>
              <div>
                <Label htmlFor="accountSurname">Surname *</Label>
                <Input
                  id="accountSurname"
                  name="accountSurname"
                  value={formData.accountSurname}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="accountRelationship">Relationship *</Label>
                <Input
                  id="accountRelationship"
                  name="accountRelationship"
                  value={formData.accountRelationship}
                  onChange={handleInputChange}
                  placeholder="e.g., Father, Mother, Guardian"
                  required
                />
              </div>
              <div>
                <Label htmlFor="accountPhoneWork">Phone (Work)</Label>
                <Input
                  id="accountPhoneWork"
                  name="accountPhoneWork"
                  value={formData.accountPhoneWork}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="accountPhoneCell">Phone (Cell) *</Label>
                <Input
                  id="accountPhoneCell"
                  name="accountPhoneCell"
                  value={formData.accountPhoneCell}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="accountEmail">Email Address *</Label>
                <Input
                  id="accountEmail"
                  name="accountEmail"
                  type="email"
                  value={formData.accountEmail}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="accountAddress">Address (in full) *</Label>
                <Textarea
                  id="accountAddress"
                  name="accountAddress"
                  value={formData.accountAddress}
                  onChange={handleInputChange}
                  rows={2}
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Family Information */}
          <Card>
            <CardHeader>
              <CardTitle>Family Information</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="familyDoctor">Family Doctor *</Label>
                <Input
                  id="familyDoctor"
                  name="familyDoctor"
                  value={formData.familyDoctor}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="familyDoctorPhone">Doctor's Tel/Cell Number *</Label>
                <Input
                  id="familyDoctorPhone"
                  name="familyDoctorPhone"
                  value={formData.familyDoctorPhone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="medicalAid">Medical Aid *</Label>
                <Input
                  id="medicalAid"
                  name="medicalAid"
                  value={formData.medicalAid}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="medicalAidMembership">Membership Number *</Label>
                <Input
                  id="medicalAidMembership"
                  name="medicalAidMembership"
                  value={formData.medicalAidMembership}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Alternative Guardian (Emergency Contact) */}
          <Card>
            <CardHeader>
              <CardTitle>Alternative Guardian (Emergency Contact)</CardTitle>
              <CardDescription>In case of an emergency</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="altGuardianTitle">Title & Name *</Label>
                <Input
                  id="altGuardianTitle"
                  name="altGuardianTitle"
                  value={formData.altGuardianTitle}
                  onChange={handleInputChange}
                  placeholder="e.g., Mrs. Jane Doe"
                  required
                />
              </div>
              <div>
                <Label htmlFor="altGuardianSurname">Surname *</Label>
                <Input
                  id="altGuardianSurname"
                  name="altGuardianSurname"
                  value={formData.altGuardianSurname}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="altGuardianPhoneWork">Phone (Work)</Label>
                <Input
                  id="altGuardianPhoneWork"
                  name="altGuardianPhoneWork"
                  value={formData.altGuardianPhoneWork}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="altGuardianPhoneCell">Phone (Cell) *</Label>
                <Input
                  id="altGuardianPhoneCell"
                  name="altGuardianPhoneCell"
                  value={formData.altGuardianPhoneCell}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="altGuardianEmail">Email Address *</Label>
                <Input
                  id="altGuardianEmail"
                  name="altGuardianEmail"
                  type="email"
                  value={formData.altGuardianEmail}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="altGuardianAddress">Address (in full) *</Label>
                <Textarea
                  id="altGuardianAddress"
                  name="altGuardianAddress"
                  value={formData.altGuardianAddress}
                  onChange={handleInputChange}
                  rows={2}
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Declaration */}
          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-900">Declaration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-amber-900">
              <p>
                <strong>1.</strong> I/We declare that all the particulars furnished by me/us on this form are true and
                correct. I undertake to comply with the conditions, rules, regulations and decisions of the Future Focus
                Learning Centre and any amendments thereto, which may be applicable to learners in general and in the
                field which I am/we are registered.
              </p>
              <p>
                <strong>2.</strong> I/We confirm the above address is correct and acknowledge to be my current address -
                "domicilium citandi et executandi".
              </p>
              <p>
                <strong>3.</strong> I/We agree that the monthly fees are to be paid in advance, whether upon receipt of
                invoice or by the 1st of every month and that registration fee are non-refundable.
              </p>
              <p>
                <strong>4.</strong> I/We will give 3 Months notice in writing (e-mail), in advance.
              </p>
              <p>
                <strong>5.</strong> I/We understand that my child has never participated in the use or distribution of
                any illegal substance or undergone any serious disciplinary action.
              </p>
              <p>
                <strong>6.</strong> I/We agree that Future Focus Learning Centre may check and confirm any information
                on the application form and may make any enquiries it deems necessary, including credit worthiness with
                any credit bureau and previous schools/centres.
              </p>
              <p className="mt-4 font-semibold">
                Non-payment of fees will result in automatic suspension of the learner.
              </p>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button
              type="submit"
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-6 text-lg font-semibold"
              disabled={isGenerating}
            >
              {isGenerating ? (
                <>
                  <Download className="h-5 w-5 mr-2 animate-pulse" />
                  Generating PDF...
                </>
              ) : (
                <>
                  <Download className="h-5 w-5 mr-2" />
                  Download Application as PDF
                </>
              )}
            </Button>
          </div>

          <p className="text-center text-sm text-gray-600">** ALL INFORMATION IS STRICTLY CONFIDENTIAL **</p>
        </form>
      </div>
    </div>
  )
}
