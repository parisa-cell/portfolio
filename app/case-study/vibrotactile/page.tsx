import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import RevealOnScroll from "@/app/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Vibrotactile Alarm System — Parisa Alirezaee",
};

export default function VibrotactileCaseStudy() {
  return (
    <>
      <Nav />
      <article className="case-study">
        <header className="case-hero">
          <Link href="/#work" className="back-link">
            &larr; Back to work
          </Link>
          <span className="case-number">04</span>
          <h1>Vibrotactile Alarm System</h1>
          <p className="case-subtitle">
            HCI research — designing wearable alarms for critical care medical
            staff
          </p>
          <div className="case-meta">
            <div>
              <strong>Role</strong>
              <br />
              HCI Researcher
            </div>
            <div>
              <strong>Institution</strong>
              <br />
              McGill University
            </div>
            <div>
              <strong>Duration</strong>
              <br />
              2017 – 2019
            </div>
            <div>
              <strong>Type</strong>
              <br />
              Master&apos;s Research
            </div>
          </div>
        </header>

        <div className="case-body">
          <section>
            <h2>Overview</h2>
            <p>
              For my Master&apos;s thesis at McGill University, I designed and
              explored the effectiveness of a vibrotactile alarm system that
              delivers patient information to medical staff through haptic
              feedback. The goal was to reduce alarm fatigue in noisy critical
              care environments where auditory alarms are often missed or
              ignored.
            </p>
          </section>

          <section>
            <h2>The Problem</h2>
            <p>
              Critical care units are overwhelmed with auditory alarms —
              monitors, ventilators, and IV pumps all competing for attention.
              Research shows that up to 95% of alarms in ICU settings are false
              or non-actionable, leading to alarm fatigue. When everything beeps,
              nothing gets attention.
            </p>
            <ul>
              <li>
                Alarm fatigue is a leading cause of patient safety incidents
              </li>
              <li>
                Audio-only systems are inadequate in noisy environments
              </li>
              <li>
                Medical staff need eyes-free, ears-free ways to receive critical
                information
              </li>
            </ul>
          </section>

          <section>
            <h2>Research Approach</h2>
            <p>
              I designed a wearable vibrotactile system that encodes patient
              vitals and alarm urgency through patterns of vibration — using
              variables like intensity, rhythm, location on the body, and
              duration.
            </p>
            <ul>
              <li>
                Designed vibrotactile patterns mapped to different alarm types
                and urgency levels
              </li>
              <li>
                Built hardware prototypes using vibration motors and
                microcontrollers
              </li>
              <li>Conducted controlled lab studies with participants</li>
              <li>
                Collected and analyzed quantitative and qualitative data
              </li>
              <li>
                Iterated on vibration patterns based on recognition accuracy
              </li>
            </ul>
          </section>

          <section>
            <h2>Key Findings</h2>
            <p>
              Participants were able to correctly identify alarm types through
              vibrotactile patterns with high accuracy after a short training
              period. The tactile modality was especially effective when combined
              with spatial encoding — using different body locations to indicate
              different patients or severity levels.
            </p>
            <ul>
              <li>
                High recognition accuracy for alarm type identification via
                haptic feedback
              </li>
              <li>
                Spatial encoding on the body proved effective for patient-level
                distinction
              </li>
              <li>
                Results contributed to publications in the field of HCI and
                healthcare
              </li>
              <li>
                Demonstrated viability of haptics as a complementary alarm
                channel in clinical settings
              </li>
            </ul>
          </section>
        </div>

        <div className="case-nav">
          <Link href="/case-study/ar" className="case-nav-link">
            &larr; Prev: AR Collaboration
          </Link>
          <Link href="/#work" className="case-nav-link">
            All projects &rarr;
          </Link>
        </div>
      </article>

      <Footer minimal />
      <RevealOnScroll />
    </>
  );
}
