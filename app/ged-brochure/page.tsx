"use client"

import Link from "next/link"
import { ArrowLeft, Printer, GraduationCap, CheckCircle, Users, BookOpen, Globe } from "lucide-react"

export default function GEDBrochurePage() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation Buttons - Hidden when printing */}
          <div className="flex items-center justify-between mb-8 print:hidden">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 bg-white border border-emerald-200 px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 bg-white border border-blue-200 px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Printer className="h-4 w-4" />
              Print Brochure
            </button>
          </div>

          {/* Brochure Content */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 shadow-lg print:shadow-none print:bg-white">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <GraduationCap className="h-16 w-16 text-blue-600 mr-4" />
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">YOUR PATHWAY TO</h1>
                  <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">A LIMITLESS FUTURE</h2>
                  <div className="text-2xl font-bold text-purple-600">GED®</div>
                </div>
              </div>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>

            {/* Introduction */}
            <div className="mb-12 text-center">
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Are you considering getting your GED®, or do you know someone who might benefit from it?
              </p>
            </div>

            {/* GED Benefits */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">GED® BENEFITS</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Earning a GED® can offer several benefits, especially if you're looking to advance your education or
                career. Here are some key advantages:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Educational Opportunities</h4>
                      <p className="text-gray-700 text-sm">
                        A GED® is equivalent to a high school diploma, allowing you to apply for college or vocational
                        training programs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Employment Prospects</h4>
                      <p className="text-gray-700 text-sm">
                        Many employers require a high school diploma or equivalent. A GED® can open doors to better job
                        opportunities and higher wages.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Personal Achievement</h4>
                      <p className="text-gray-700 text-sm">
                        Completing your GED® can be a significant personal milestone, boosting your confidence and sense
                        of accomplishment.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Flexibility</h4>
                      <p className="text-gray-700 text-sm">
                        The GED® program is designed to be flexible, allowing you to study and take the test at your own
                        pace, which is ideal for those with busy schedules.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Further Education</h4>
                      <p className="text-gray-700 text-sm">
                        With a GED®, you can pursue higher education, which can lead to more specialized and
                        higher-paying careers.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Setting an Example</h4>
                      <p className="text-gray-700 text-sm">
                        For those with families, earning a GED® can set a positive example for children and other family
                        members about the importance of education.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Who is GED for */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">WHO is GED® for?</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The GED® (General Educational Development) program is designed for individuals who did not complete
                their high school education and want to earn an equivalent credential. Here are some groups of people
                who might study for the GED®:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/80 p-4 rounded-lg border border-blue-100">
                  <div className="flex items-center mb-2">
                    <Users className="h-5 w-5 text-blue-600 mr-2" />
                    <h4 className="font-semibold text-gray-900">High School Leavers</h4>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Individuals over 16 who left high school before matriculating can use the GED® to demonstrate they
                    have high school-level academic skills.
                  </p>
                </div>

                <div className="bg-white/80 p-4 rounded-lg border border-blue-100">
                  <div className="flex items-center mb-2">
                    <BookOpen className="h-5 w-5 text-blue-600 mr-2" />
                    <h4 className="font-semibold text-gray-900">Homeschoolers</h4>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Students who were homeschooled and want a formal credential to pursue higher education or
                    employment.
                  </p>
                </div>

                <div className="bg-white/80 p-4 rounded-lg border border-blue-100">
                  <div className="flex items-center mb-2">
                    <GraduationCap className="h-5 w-5 text-blue-600 mr-2" />
                    <h4 className="font-semibold text-gray-900">Adults Returning to Education</h4>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Adults who want to improve their job prospects or pursue further education later in life.
                  </p>
                </div>

                <div className="bg-white/80 p-4 rounded-lg border border-blue-100">
                  <div className="flex items-center mb-2">
                    <Globe className="h-5 w-5 text-blue-600 mr-2" />
                    <h4 className="font-semibold text-gray-900">Immigrants</h4>
                  </div>
                  <p className="text-gray-700 text-sm">
                    People who moved to a new country and need a recognized high school equivalency to continue their
                    education or find employment.
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                <p className="text-emerald-800 font-medium">
                  In South Africa, the GED® is recognized as equivalent to the National Senior Certificate (Grade 12),
                  allowing graduates to apply for further studies at colleges and universities, both locally and
                  internationally.
                </p>
              </div>
            </div>

            {/* GED Subjects */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">GED® SUBJECTS</h3>
              <p className="text-gray-700 mb-6 text-center">The GED test covers four main subjects:</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/80 p-6 rounded-lg border border-purple-100">
                  <h4 className="font-bold text-purple-700 mb-3">Mathematical Reasoning</h4>
                  <p className="text-gray-700 text-sm">
                    This includes topics like basic math, geometry, basic algebra, and interpreting graphs and
                    functions.
                  </p>
                </div>

                <div className="bg-white/80 p-6 rounded-lg border border-blue-100">
                  <h4 className="font-bold text-blue-700 mb-3">Reasoning Through Language Arts</h4>
                  <p className="text-gray-700 text-sm">
                    This section tests reading comprehension, writing skills, grammar, and the ability to create and
                    analyze arguments.
                  </p>
                </div>

                <div className="bg-white/80 p-6 rounded-lg border border-green-100">
                  <h4 className="font-bold text-green-700 mb-3">Social Studies</h4>
                  <p className="text-gray-700 text-sm">
                    This covers history, geography, civics, and economics, focusing on reading for meaning, analyzing
                    historical events, and using numbers and graphs.
                  </p>
                </div>

                <div className="bg-white/80 p-6 rounded-lg border border-amber-100">
                  <h4 className="font-bold text-amber-700 mb-3">Science</h4>
                  <p className="text-gray-700 text-sm">
                    This includes life science, physical science, and earth and space science, with an emphasis on
                    reading for meaning, designing and interpreting experiments, and using numbers and graphics.
                  </p>
                </div>
              </div>
            </div>

            {/* GED vs High School */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">GED® vs HIGH SCHOOL</h3>
              <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                <p>
                  <strong>Content and Scope:</strong> The GED® tests cover four main subjects: Mathematical Reasoning,
                  Reasoning Through Language Arts, Science, and Social Studies. These subjects are similar to what is
                  taught in high school, but the GED® focuses on assessing knowledge and skills at a high school level.
                </p>

                <p>
                  <strong>Test Format:</strong> The GED® is a series of standardized tests, whereas earning a high
                  school diploma typically involves completing coursework over several years, including assignments,
                  projects, and exams. Some people find the GED's test format more challenging because it requires
                  demonstrating knowledge in a timed, high-stakes environment.
                </p>

                <p>
                  <strong>Preparation Time:</strong> Preparing for the GED® can be quicker than completing high school,
                  especially for those who already have a good grasp of the subjects. However, the condensed preparation
                  period can be intense and requires focused study.
                </p>

                <p>
                  <strong>Flexibility:</strong> The GED® offers flexibility in terms of when and how you study, which
                  can be advantageous for those with other commitments. High school, on the other hand, follows a more
                  structured schedule.
                </p>

                <p>
                  <strong>Personal Learning Style:</strong> Some people thrive in a traditional classroom setting with
                  ongoing support from teachers and peers, making high school a better fit. Others prefer self-paced,
                  independent study, which aligns well with GED® preparation.
                </p>

                <p className="font-medium">
                  Ultimately, the difficulty of the GED® compared to a high school diploma depends on your learning
                  style, prior knowledge, and personal circumstances.
                </p>
              </div>
            </div>

            {/* GED in South Africa */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">GED® in South Africa</h3>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>
                      GED® graduates can apply to SAQA for a certificate of valuation as an NQF Level 4 in South Africa.
                    </strong>
                  </p>

                  <p>
                    SAQA (the South African Qualifications Authority) has evaluated the GED® and found the National
                    Senior Certificate as its closest comparable qualification. This is useful for job applications or
                    applying at a local tech or college.
                  </p>

                  <p>
                    <strong>To apply to do a Higher Certificate (NQF Level 5):</strong> Only a SAQA certificate will be
                    necessary for this.
                  </p>

                  <p>
                    <strong>A Higher Certificate (NQF5) may then enable you to apply for degree studies</strong>{" "}
                    provided you meet the entrance requirements of the faculty or university offering the degree.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="text-center bg-emerald-50 p-6 rounded-lg border border-emerald-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to Start Your GED® Journey?</h3>
              <p className="text-gray-700 mb-4">
                Contact Future Focus Learning Centre today to learn more about our GED® program.
              </p>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>📍</strong> Links Avenue, Fancourt, George, South Africa
                </p>
                <p>
                  <strong>📞</strong> 071 381 9885
                </p>
                <p>
                  <strong>✉️</strong> info@futurefocuslearningcentre.co.za
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
