import Link from "next/link"
import { ArrowLeft, Calendar, User, Clock, Home, Sparkles, Star, Leaf, TreePine, Smartphone } from "lucide-react"

export default function DigitalDilemmaPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles
          className="absolute top-16 left-8 h-5 w-5 text-blue-300 animate-pulse"
          style={{ animationDelay: "0s" }}
        />
        <Star
          className="absolute top-24 right-16 h-4 w-4 text-purple-300 animate-bounce"
          style={{ animationDelay: "1s" }}
        />
        <Smartphone
          className="absolute top-1/4 left-1/5 h-6 w-6 text-indigo-300 animate-float"
          style={{ animationDelay: "2s" }}
        />
        <TreePine
          className="absolute top-1/3 right-1/4 h-7 w-7 text-emerald-400 animate-pulse"
          style={{ animationDelay: "3s" }}
        />
        <Star
          className="absolute bottom-1/4 left-12 h-5 w-5 text-cyan-300 animate-bounce"
          style={{ animationDelay: "4s" }}
        />
        <Leaf
          className="absolute bottom-32 right-12 h-6 w-6 text-teal-300 animate-float"
          style={{ animationDelay: "5s" }}
        />
        <Sparkles
          className="absolute top-2/3 left-1/3 h-4 w-4 text-violet-300 animate-pulse"
          style={{ animationDelay: "6s" }}
        />

        {/* Floating Circles */}
        <div
          className="absolute top-12 right-1/5 w-16 h-16 bg-blue-200 rounded-full opacity-20 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-8 w-20 h-20 bg-purple-200 rounded-full opacity-25 animate-bounce"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-16 w-14 h-14 bg-indigo-200 rounded-full opacity-30 animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-3/4 right-1/3 w-18 h-18 bg-cyan-200 rounded-full opacity-20 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute bottom-16 left-1/4 w-12 h-12 bg-violet-200 rounded-full opacity-35 animate-bounce"
          style={{ animationDelay: "5s" }}
        ></div>
      </div>

      <div className="pt-20 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Home className="h-4 w-4" />
              Home
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-12 animate-fade-in">
            <div
              className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-4 animate-scale-in"
              style={{ animationDelay: "0.2s" }}
            >
              Digital Wellness
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight animate-slide-in-right">
              The Digital Dilemma: Understanding Social Media and Screen Time's Impact on Children's Development
            </h1>
            <div className="flex items-center gap-6 text-gray-600 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Future Focus Learning Centre</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>January 10, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>12 min read</span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <article
            className="prose prose-lg max-w-none bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              In our increasingly connected world, screens have become as ubiquitous as the air we breathe. From
              smartphones and tablets to laptops and gaming consoles, digital devices permeate every aspect of
              children's lives. While technology offers incredible educational opportunities and ways to connect,
              mounting research reveals concerning trends about excessive screen time and social media usage among young
              people.
            </p>

            <p className="mb-8">
              As parents and educators, understanding these impacts is crucial for helping children develop healthy
              relationships with technology. Let's explore what current research tells us about how screen exposure
              affects our children's developing minds and bodies.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Scale of the Problem</h2>
            <p className="mb-6">
              The numbers are staggering. According to the Kaiser Family Foundation, children aged 8 to 18 spend an
              average of seven and a half hours each day on screens for entertainment alone. Recent research from Pew
              Research Center found that nearly half of U.S. teens (46%) say they're online almost constantly, with
              YouTube, TikTok, Instagram, and Snapchat remaining the most popular platforms.
            </p>
            <p className="mb-8">
              This constant connectivity comes with a price. The World Health Organization's 2024 research revealed that
              more than 1 in 10 adolescents (11%) showed signs of problematic social media behavior, struggling to
              control their use and experiencing negative consequences. Particularly concerning is that girls reported
              higher levels of problematic social media use than boys, at 13% versus 9%.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Cognitive Development: The Attention Crisis</h2>
            <p className="mb-6">
              One of the most significant impacts of excessive screen time is on children's cognitive development,
              particularly their ability to focus and process information. Research published in peer-reviewed journals
              indicates that children's heavy reliance on screen media can harm their cognitive, linguistic, and
              social-emotional growth.
            </p>
            <p className="mb-6">
              The developing brain is particularly vulnerable to the rapid-fire stimulation that many digital platforms
              provide. Unlike books or traditional learning materials that encourage sustained attention, many apps and
              social media platforms are designed to capture attention in short bursts through notifications, likes, and
              endless scrolling feeds.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8 border border-blue-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">This constant stimulation can lead to:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="font-semibold text-blue-700 mr-2">•</span>
                  <div>
                    <strong>Shortened attention spans:</strong> Children may struggle to focus on tasks that don't
                    provide immediate gratification
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-blue-700 mr-2">•</span>
                  <div>
                    <strong>Difficulty with deep learning:</strong> The habit of consuming information quickly can
                    interfere with the ability to engage in complex, sustained thinking
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-blue-700 mr-2">•</span>
                  <div>
                    <strong>Impaired executive function:</strong> Skills like planning, organizing, and self-control may
                    be compromised
                  </div>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Language and Communication Development</h2>
            <p className="mb-6">
              Screen time's impact on language development varies significantly depending on the type of content and age
              of the child. While some research indicates that educational screen time could potentially enhance social
              and language skills, especially in lower-income homes with previously limited access to learning
              materials, passive screen consumption often has the opposite effect.
            </p>
            <p className="mb-6">
              The American Academy of Pediatrics recommends that screen time and media use be very limited for children
              younger than 2 years old, calling for no screen time at all until 18 to 24 months, except for video
              chatting. This is because crucial language development occurs through face-to-face interactions, not
              through screens.
            </p>

            <div className="bg-purple-50 p-6 rounded-lg mb-8 border border-purple-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                For young children, excessive screen time can delay:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="font-semibold text-purple-700 mr-2">•</span>
                  <div>
                    <strong>Speech development:</strong> Real conversations provide the back-and-forth interaction
                    essential for language learning
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-purple-700 mr-2">•</span>
                  <div>
                    <strong>Social communication skills:</strong> Understanding non-verbal cues, turn-taking in
                    conversation, and emotional expression
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-purple-700 mr-2">•</span>
                  <div>
                    <strong>Reading readiness:</strong> The skills needed for literacy often develop through hands-on
                    exploration and human interaction
                  </div>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Physical Health Consequences</h2>
            <p className="mb-6">
              The physical impacts of excessive screen time extend far beyond tired eyes. Extended periods spent looking
              at screens and sitting in sedentary positions contribute to a range of health issues:
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Sleep Disruption</h3>
            <p className="mb-6">
              The blue light emitted by screens can interfere with the body's natural circadian rhythms. Children who
              use screens close to bedtime often experience difficulty falling asleep and poorer sleep quality overall.
              The American Academy of Pediatrics emphasizes that all children and teens need adequate sleep (8-12 hours,
              depending on age) and time away from media.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Vision Problems</h3>
            <p className="mb-6">
              Prolonged screen use can lead to digital eye strain, also known as computer vision syndrome. Symptoms
              include dry eyes, blurred vision, headaches, and neck and shoulder pain.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Reduced Physical Activity</h3>
            <p className="mb-6">
              Time spent on screens often replaces time that could be spent in physical activities. The AAP recommends
              that children get at least one hour of physical activity daily, but excessive screen time can
              significantly reduce this.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Posture Issues</h3>
            <p className="mb-8">
              Poor posture while using devices can lead to back, neck, and shoulder problems that may persist into
              adulthood.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Social-Emotional Development: The Mental Health Connection
            </h2>
            <p className="mb-6">
              Perhaps the most concerning impacts of excessive screen time and social media use relate to children's
              social-emotional development. Recent studies published in JAMA Network Open have investigated how screen
              media reduction can affect mental health in children and adolescents, finding significant correlations
              between excessive use and various psychological issues.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Anxiety and Depression</h3>
            <p className="mb-6">
              Research consistently shows links between high levels of social media use and increased rates of anxiety
              and depression among young people. The constant comparison with others' curated online personas can lead
              to feelings of inadequacy and low self-worth.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Social Skills Development</h3>
            <p className="mb-6">
              While social media platforms promise connection, they often provide a poor substitute for face-to-face
              interaction. Children may struggle to develop crucial social skills like reading facial expressions,
              understanding tone of voice, and navigating complex social situations.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Emotional Regulation</h3>
            <p className="mb-8">
              The instant gratification provided by digital platforms can interfere with children's ability to manage
              frustration, delay gratification, and cope with boredom or negative emotions in healthy ways.
            </p>

            <p className="mb-8">
              Particularly telling is research from Pew showing that while most teens at least sometimes feel happy and
              peaceful when they don't have their phone, 44% say being without their device makes them anxious.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Addictive Nature of Digital Platforms</h2>
            <p className="mb-6">
              It's important to understand that many digital platforms are deliberately designed to be addictive. Tech
              companies employ teams of neuroscientists and behavioral psychologists to create features that maximize
              user engagement. These include:
            </p>

            <div className="bg-red-50 p-6 rounded-lg mb-8 border border-red-100">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="font-semibold text-red-700 mr-2">•</span>
                  <div>
                    <strong>Variable reward schedules:</strong> Like slot machines, social media platforms provide
                    unpredictable rewards (likes, comments, shares) that keep users coming back
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-red-700 mr-2">•</span>
                  <div>
                    <strong>Fear of missing out (FOMO):</strong> Constant updates and notifications create anxiety about
                    missing something important
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-red-700 mr-2">•</span>
                  <div>
                    <strong>Infinite scroll:</strong> Feeds that never end encourage continuous use
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-red-700 mr-2">•</span>
                  <div>
                    <strong>Social validation:</strong> The dopamine hit from likes and positive comments creates a
                    cycle of seeking approval
                  </div>
                </li>
              </ul>
            </div>

            <p className="mb-8">
              Understanding these mechanisms helps parents and educators recognize that children's struggles with screen
              time aren't simply about lack of willpower – they're competing against sophisticated systems designed to
              capture and hold attention.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Age-Appropriate Guidelines and Recommendations
            </h2>
            <p className="mb-6">
              The American Academy of Pediatrics has developed comprehensive guidelines for healthy media use across
              different age groups:
            </p>

            <div className="bg-green-50 p-6 rounded-lg mb-8 border border-green-100">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Under 18 months:</h4>
                  <p className="text-gray-700">
                    Avoid screen media other than video chatting. Young children learn best through hands-on exploration
                    and face-to-face interaction with caregivers.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">18-24 months:</h4>
                  <p className="text-gray-700">
                    If you introduce digital media, watch together with your child and help them understand what they're
                    seeing. Choose high-quality programming and avoid fast-paced programs with rapid scene changes.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Ages 2-5:</h4>
                  <p className="text-gray-700">
                    Limit screen time to one hour per day of high-quality programming. Continue to watch with children
                    to help them understand and apply what they learn to the world around them.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Ages 6 and older:</h4>
                  <p className="text-gray-700">
                    Place consistent limits on screen time and types of media. Ensure that media doesn't take the place
                    of adequate sleep, physical activity, and other behaviors essential to health.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Teenagers:</h4>
                  <p className="text-gray-700">
                    Rather than focusing solely on time limits, emphasize the quality and purpose of screen time use.
                    Help teens understand that spending 30 minutes on FaceTime with family might feel very different
                    from spending 30 minutes scrolling through social media, even though the time investment is the
                    same.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Creating a Balanced Digital Environment</h2>
            <p className="mb-6">
              The goal isn't to eliminate technology entirely but to help children develop a healthy, balanced
              relationship with digital media. Here are evidence-based strategies:
            </p>

            <div className="bg-indigo-50 p-6 rounded-lg mb-8 border border-indigo-100">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-indigo-800 mb-2">Establish Tech-Free Zones and Times:</h4>
                  <p className="text-gray-700">
                    Create spaces in your home where devices aren't allowed, such as bedrooms and dining areas.
                    Implement device-free times, particularly before bedtime and during family meals.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-800 mb-2">Model Healthy Behavior:</h4>
                  <p className="text-gray-700">
                    Children learn more from what they see than what they're told. Demonstrate healthy screen habits in
                    your own behavior.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-800 mb-2">Prioritize Real-World Activities:</h4>
                  <p className="text-gray-700">
                    Ensure children have plenty of opportunities for physical play, creative activities, and
                    face-to-face social interaction.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-800 mb-2">Choose Quality Content:</h4>
                  <p className="text-gray-700">
                    When children do use screens, prioritize educational, age-appropriate content that encourages
                    interaction and learning.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-800 mb-2">Maintain Open Communication:</h4>
                  <p className="text-gray-700">
                    Talk with children about their online experiences. Help them understand both the benefits and risks
                    of digital media.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Path Forward</h2>
            <p className="mb-6">
              As technology continues to evolve, so too must our understanding of its impact on child development. The
              research is clear that excessive screen time and problematic social media use can have serious
              consequences for children's cognitive, physical, and social-emotional development.
            </p>
            <p className="mb-6">
              However, technology itself isn't inherently harmful. When used mindfully and in moderation, digital tools
              can enhance learning, creativity, and connection. The key lies in helping children develop digital
              literacy skills and healthy habits that will serve them throughout their lives.
            </p>
            <p className="mb-6">
              As educators and parents, our role isn't to be technology's enemy but to be thoughtful guides who help
              children navigate the digital world safely and purposefully. By staying informed about current research,
              setting appropriate boundaries, and maintaining open dialogue about technology use, we can help children
              harness the benefits of our digital age while protecting their developing minds and bodies.
            </p>
            <p className="mb-8">
              The choices we make today about children's screen time will shape not just their immediate well-being, but
              their relationship with technology for years to come. By taking a proactive, informed approach to digital
              wellness, we can help ensure that technology serves our children rather than the other way around.
            </p>

            <div className="bg-emerald-50 p-6 rounded-lg mt-12 border border-emerald-200">
              <p className="text-emerald-800 font-medium italic">
                At Future Focus Learning Centre, we're committed to helping families navigate the challenges of raising
                children in our digital age. For more resources on child development and educational strategies, explore
                our website or contact our team of educational specialists.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mt-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Research Sources</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Kaiser Family Foundation - Children's Media Use Studies</li>
                <li>• Pew Research Center - Teen Technology and Social Media Reports</li>
                <li>• World Health Organization - 2024 Adolescent Social Media Research</li>
                <li>• American Academy of Pediatrics - Media Use Guidelines</li>
                <li>• JAMA Network Open - Screen Media and Mental Health Studies</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
