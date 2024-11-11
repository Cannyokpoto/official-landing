import React, { useState } from "react";
import PHOTOS from "../../assets/images";
import { Link } from "react-router-dom";

function Cyber() {
 
  

  const [week1, setWeek1] = useState(false);
  const toggleWeek1 = () => {
    setWeek1(!week1);
  };

  const [week2, setWeek2] = useState(false);
  const toggleWeek2 = () => {
    setWeek2(!week2);
  };

  const [week3, setWeek3] = useState(false);
  const toggleWeek3 = () => {
    setWeek3(!week3);
  };

  const [week4, setWeek4] = useState(false);
  const toggleWeek4 = () => {
    setWeek4(!week4);
  };

  const [week5, setWeek5] = useState(false);
  const toggleWeek5 = () => {
    setWeek5(!week5);
  };

  const [week6, setWeek6] = useState(false);
  const toggleWeek6 = () => {
    setWeek6(!week6);
  };



  // FAQ
  const [faq1, setFaq1] = useState(false);
  const toggleFaq1 = () => {
    setFaq1(!faq1);
  };

  const [faq2, setFaq2] = useState(false);
  const toggleFaq2 = () => {
    setFaq2(!faq2);
  };

  const [faq3, setFaq3] = useState(false);
  const toggleFaq3 = () => {
    setFaq3(!faq3);
  };

  const [faq4, setFaq4] = useState(false);
  const toggleFaq4 = () => {
    setFaq4(!faq4);
  };

  const [faq5, setFaq5] = useState(false);
  const toggleFaq5 = () => {
    setFaq5(!faq5);
  };

  return (
    <div className="flex flex-col items-center h-auto pb-5 mt-5 large:w-100vw small:w-90vw text-15px">

      {/* Hero section */}
      <div className="flex items-center justify-center h-auto gap-5 py-3 border large:w-80 bg-vogueWhite large:flex-row small:flex-col">
        
        <div className="flex items-center justify-center border large:w-40 large:h-300px small:w-90 small:h-200px">
          <img
            src={PHOTOS.cyber}
            alt="hero image"
            className="w-100 h-100 rounded-10"
          />
        </div>

        <div className="flex flex-col items-start justify-center h-auto gap-2 small:px-1 large:w-40 small:w-100 large:px-0">
          <h3 className="text-center text-25px">Cyber security Course Overview</h3>

          <p className="text-15px">
            This Cybersecurity training program covers Security Operations,
            Ethical Hacking and Penetration testing providing the skills
            required for a candidate to become a security professional. The
            Skills acquired through this course can make one to understand the
            essential concepts to perform penetration testing, uncover the
            vulnerabilities and solutions to mitigate the risk of attack.
          </p>
          <p className="text-15px">
            In this course we will also discuss the scenarios wit few advanced
            tools to identify, detect and exploit any vulnerability uncovered in
            the target network environment. The interesting part of this course
            is that we will have more practical demos to understand the
            theoretical concepts.
          </p>
        </div>
      </div>


      {/* Course Content */}
      <div className="flex flex-col items-center gap-2 mt-8 border large:py-5 large:w-80 bg-vogueWhite small:w-100 small:py-2">
        <h3 className="font-bold text-center w-100">Cyber security Course Curriculum</h3>

        {/* SECTION A */}

        <div className="flex flex-col items-center w-100 text-15px">
          <div
            className="flex items-center justify-between h-auto px-1 border cursor-pointer border-landingBlue hover:text-vogueWhite hover:bg-landingBlue rounded-4 large:w-50 text-landingBlue bg-vogueWhite small:w-90"
            onClick={toggleWeek1}
          >
            <p>SECTION A</p>
            <span className="text-30px">{week1 ? "-" : "+"}</span>
          </div>

          {week1 && (
            <div className="flex flex-col items-center h-auto w-60">
              <div className="flex flex-col items-start h-auto gap-1 py-2 list-disc w-100">
                {/* <h5 className="h-auto font-bold text-center w-100">WEEK 1</h5> */}
                {/* <h5 className="font-bold">DAY 1</h5> */}
                <ul className="list-disc">
                  <li>Overview of information and Cyber security</li>
                  <li>Prospects in the security industry</li>
                  <li>Earnings</li>
                  <li>Areas of specialization</li>
                  <li>Certifications</li>

                  <li>Security as Technology, Processes and Actions</li>
                  <li>Confidentiality</li>
                  <li>Integrity</li>
                  <li>Availability</li>
                  <li>Privacy</li>
                  <li>Safety</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* SECTION B */}

        <div className="flex flex-col items-center w-100 text-15px">
          <div
            className="flex items-center justify-between h-auto px-1 border cursor-pointer border-landingBlue hover:text-vogueWhite hover:bg-landingBlue rounded-4 large:w-50 small:w-90 text-landingBlue bg-vogueWhite"
            onClick={toggleWeek2}
          >
            <p>SECTION B</p>
            <span className="text-30px">{week2 ? "-" : "+"}</span>
          </div>

          {week2 && (
            <div className="flex flex-col items-center h-auto w-60">
              <div className="flex flex-col items-start h-auto gap-1 py-2 list-disc w-100">
                <h5 className="h-auto font-bold text-center w-100">WEEK 1</h5>
                <h5 className="font-bold">DAY 1</h5>
                <ul className="list-disc">
                  <li>
                    KNOW YOURSELF - The Threat and Vulnerability Landscape
                  </li>
                  <li>Protect What You Value</li>
                  <li>What is Privacy, Anonymity and Pseudonymity</li>
                  <li>Security, Vulnerabilities, Threats and Adversaries</li>
                  <li>Threat Modeling and Risk Assessments</li>
                  <li>Security vs Privacy vs Anonymity - Can we have it all</li>
                  <li>Defense In Depth</li>
                  <li>The Zero Trust Model</li>

                  <li>
                    KNOW YOUR ENEMY - The Current Threat and Vulnerability
                    Landscape
                  </li>
                  <li>Goals and Learning Objectives</li>
                  <li>Why You Need Security – The Value Of A Hack</li>
                  <li>The Top 3 Things You Need To Stay Safe Online</li>
                  <li>
                    Security Bugs and Vulnerabilities - The Vulnerability
                    Landscape
                  </li>
                  <li>Hackers, crackers and cyber criminals</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* SECTION C */}
        <div className="flex flex-col items-center w-100 text-15px">
          <div
            className="flex items-center justify-between h-auto px-1 border cursor-pointer border-landingBlue hover:text-vogueWhite hover:bg-landingBlue rounded-4 large:w-50 small:w-90 text-landingBlue bg-vogueWhite"
            onClick={toggleWeek3}
          >
            <p>SECTION C</p>
            <span className="text-30px">{week3 ? "-" : "+"}</span>
          </div>

          {week3 && (
            <div className="flex flex-col items-center h-auto w-60">
              <div className="flex flex-col items-start h-auto gap-1 py-2 list-disc w-100">
                <h5 className="h-auto font-bold text-center w-100">WEEK 1</h5>
                <h5 className="font-bold">DAY 1</h5>
                <ul className="list-disc">
                  <li>Malware, viruses, rootkits and RATs</li>
                  <li>Spyware, Adware, Scareware, PUPs & Browser hijacking</li>
                  <li>What is Phishing, Vishing and SMShing</li>
                  <li>Spamming & Doxing</li>
                  <li>Social engineering - Scams, cons, tricks and fraud</li>
                  <li>Darknets, Dark Markets and Exploit kits</li>
                  <li>Governments, spies and secret stuff</li>
                  <li>Trust & Backdoors</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* SECTION D */}
        <div className="flex flex-col items-center w-100 text-15px">
          <div
            className="flex items-center justify-between h-auto px-1 border cursor-pointer border-landingBlue hover:text-vogueWhite hover:bg-landingBlue rounded-4 large:w-50 small:w-90 text-landingBlue bg-vogueWhite"
            onClick={toggleWeek4}
          >
            <p>SECTION D</p>
            <span className="text-30px">{week4 ? "-" : "+"}</span>
          </div>

          {week4 && (
            <div className="flex flex-col items-center h-auto w-60">
              <div className="flex flex-col items-start h-auto gap-1 py-2 list-disc w-100">
                <ul className="list-disc">
                  <li>Encryption</li>
                  <li>Overview</li>
                  <li>Symmetric Encryption</li>
                  <li>Asymmetric Encryption</li>
                  <li>Hash Functions</li>
                  <li>Digital Signitures</li>
                  <li>
                    Secure Sockets Layer (SSL) and Transport layer security
                    (TLS)
                  </li>
                  <li>SSL Stripping</li>
                  <li>HTTPS (HTTP Secure)</li>
                  <li>Digital Certificates</li>
                  <li>Certificate Authorities and HTTPS</li>
                  <li>End-to-End Encryption (E2EE)</li>
                  <li>Steganography</li>
                  <li>How Security and Encryption is Really Attacked.</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* SECTION E */}
        <div className="flex flex-col items-center w-100 text-15px">
          <div
            className="flex items-center justify-between h-auto px-1 border cursor-pointer border-landingBlue hover:text-vogueWhite hover:bg-landingBlue rounded-4 large:w-50 small:w-90 text-landingBlue bg-vogueWhite"
            onClick={toggleWeek5}
          >
            <p>SECTION E</p>
            <span className="text-30px">{week5 ? "-" : "+"}</span>
          </div>

          {week5 && (
            <div className="flex flex-col items-center h-auto w-60">
              <div className="flex flex-col items-start h-auto gap-1 py-2 list-disc w-100">
                <ul className="list-disc">
                  <li>Risk Management & Security Operations</li>
                  <li>Incident Response</li>
                  <li>Business Continuity</li>
                  <li>Disaster Recovery</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* SECTION F */}
        <div className="flex flex-col items-center w-100 text-15px">
          <div
            className="flex items-center justify-between h-auto px-1 border cursor-pointer border-landingBlue hover:text-vogueWhite hover:bg-landingBlue rounded-4 large:w-50 small:w-90 text-landingBlue bg-vogueWhite"
            onClick={toggleWeek6}
          >
            <p>SECTION F</p>
            <span className="text-30px">{week6 ? "-" : "+"}</span>
          </div>

          {week6 && (
            <div className="flex flex-col items-center h-auto w-60">
              <div className="flex flex-col items-start h-auto gap-1 py-2 list-disc w-100">
                <ul className="list-disc">
                  <h5 className="font-bold">(i) PENETRATION TESTING</h5>

                  <li>
                    Introduction to Setting up a Testing Environment using
                    Virtual Machines
                  </li>
                  <li>
                    How To Setup a Virtual Penetration Testing Environment
                  </li>
                  <li>Downloading and installing Metasploitable2</li>
                  <li>Setting up Virtual Box</li>
                  <li>Installing VMware</li>
                  <li>How To Install Kali Linux on VMware</li>
                  <li>
                    The best Linux Distros for Ethical Hacking & Penetration
                    Testing
                  </li>

                  <h5 className="mt-2 font-bold">(ii) END TO END PENETRATION TESTING WITH KALI LINUX</h5>
                  <li>Understanding Linux</li>
                  <li>Terminal Commands</li>
                  <li>Information Gathering</li>
                  <li>Vulnerability Analysis</li>
                  <li>Database and Web Server Hacking</li>
                  <li>Password Cracking</li>
                  <li>Man-in-the-Middle Attack Sniffing.</li>
                  <li>Social Engineering Attack</li>
                  <li>Wireless Hacking</li>
                  <li>Exploitation Techniques.</li>
                  <li>Post-Exploitation Techniques.</li>
                  <li>Reporting</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* PROJECT & EXAM */}
        <div className="flex items-center justify-between h-auto px-1 py-1 border cursor-pointer border-landingBlue hover:text-vogueWhite hover:bg-landingBlue rounded-4 large:w-50 small:w-90 text-landingBlue bg-vogueWhite text-15px">
          <p>PROJECT & EXAM</p>
        </div>

        {/* MENTORSHIP */}
        <div className="flex items-center justify-between h-auto px-1 py-1 border cursor-pointer border-landingBlue hover:text-vogueWhite hover:bg-landingBlue rounded-4 large:w-50 small:w-90 text-landingBlue bg-vogueWhite text-15px">
          <p>MENTORSHIP</p>
        </div>
      </div>

      {/* training schedule */}
      <div className="flex flex-col items-center gap-2 mt-8 border large:py-5 small:py-2 large:w-80 bg-vogueWhite text-15px small:w-100">
        <h3 className="font-bold text-center w-100">
          Cyber security course - Tuition fees, days & time for upcoming
          classes
        </h3>

        <table className="border border-black">
          <tr className="border border-black">
            <th className="border border-black colspan" colSpan={`2`}>Training Schedule</th>
          </tr>

          <tr className="border border-black">
            <td className="border border-black">days</td>
            <td className="border border-black">Monday & Friday</td>
          </tr>

          <tr className="border border-black">
            <td className="border border-black">Time</td>
            <td className="border border-black">10am - 1pm</td>
          </tr>
          <tr className="border border-black">
            <td className="border border-black">location</td>
            <td className="border border-black">10am-12pm</td>
          </tr>
          
          <tr className="border border-black">
            <td className="border border-black">location</td>
            <td className="border border-black">
              #167 Iju Road By Providence Schools, Fagba, Lagos State.
            </td>
          </tr>
          <tr className="border border-black">
            <td className="border border-black">fee</td>
            <td className="border border-black">&#8358;190,000</td>
          </tr>

          <tr className="border border-black">
            <td className="border border-black">Course Duration</td>
            <td className="border border-black">3 months</td>
          </tr>
          {/* <tr className="mt-2 border border-black">
            <th className="border border-black">virtual class</th>
          </tr>
          <tr className="border border-black">
            <td className="border border-black">days</td>
            <td className="border border-black">saturdays and sundays</td>
          </tr>
          <tr className="border border-black">
            <td className="border border-black">Time</td>
            <td className="border border-black">1pm - 4pm</td>
          </tr>
          <tr className="border border-black">
            <td className="border border-black">location</td>
            <td className="border border-black">online</td>
          </tr>
          <tr className="border border-black">
            <td className="border border-black">fee</td>
            <td className="border border-black">&#8358;90,000</td>
            <td className="border border-black">&#8358;100,000</td>
          </tr> */}
        </table>
      </div>

      {/* FAQ */}
      <div className="flex flex-col items-center py-5 mt-8 border large:gap-2 large:w-80 bg-vogueWhite text-15px small:w-100 small:gap-3 small:px-1 large:px-0">
        <h3 className="font-bold text-center w-100">
          FREQUENTLY ASKED QUESTIONS
        </h3>
        <div className="flex flex-col h-auto gap-1 large:w-50 small:w-100">
          <div
            className="flex items-center justify-between h-auto px-1 text-black border cursor-pointer rounded-4 w-100 bg-vogueWhite"
            onClick={toggleFaq1}
          >
            <p>After Completing the program, what next?</p>
            <span className="text-30px">{faq1 ? "-" : "+"}</span>
          </div>

          {faq1 && (
            <p>
              Getting a job will be an easy one as we will add you to our
              community of tech experts for recommendations. Through mentorship,
              we will guide you untill you secure your first job.
            </p>
          )}
        </div>

        <div className="flex flex-col h-auto gap-1 large:w-50 small:w-100">
          <div
            className="flex items-center justify-between h-auto px-1 text-black border cursor-pointer rounded-4 w-100 bg-vogueWhite"
            onClick={toggleFaq2}
          >
            <p>Will I be given a certificate at the end of this program?</p>
            <span className="text-30px">{faq2 ? "-" : "+"}</span>
          </div>

          {faq2 && (
            <p>
              We award certificate upon completion of the program. This
              certificate is recognized by hiring companies worldwide.
              Completing your final project and displaying it in your portfolio
              is one of the criteria for graduation.
            </p>
          )}
        </div>

        <div className="flex flex-col h-auto gap-1 large:w-50 small:w-100">
          <div
            className="flex items-center justify-between h-auto px-1 text-black border cursor-pointer rounded-4 w-100 bg-vogueWhite"
            onClick={toggleFaq3}
          >
            <p>Who are your instructors?</p>
            <span className="text-30px">{faq3 ? "-" : "+"}</span>
          </div>

          {faq3 && (
            <p>
              All our instructors are chosen on the basis of their technical and
              educational skills. They will ensure your training is efficient
              and effective, by monitoring and validating your progress
              throughout the course.
            </p>
          )}
        </div>

        <div className="flex flex-col h-auto gap-1 large:w-50 small:w-100">
          <div
            className="flex items-center justify-between h-auto px-1 text-black border cursor-pointer rounded-4 w-100 bg-vogueWhite"
            onClick={toggleFaq4}
          >
            <p>Can I join one of the programs remotely?</p>
            <span className="text-30px">{faq4 ? "-" : "+"}</span>
          </div>

          {faq4 && (
            <p>
              Yes, we have an online platform on which you will get the same
              experience and benefits of the physical class from the comfort of
              your home: Assessments, one-on-one meetings and workshops, all
              with the assistance of your instructors.
            </p>
          )}
        </div>

        <div className="flex flex-col h-auto gap-1 large:w-50 small:w-100">
          <div
            className="flex items-center justify-between h-auto px-1 text-black border cursor-pointer rounded-4 w-100 bg-vogueWhite"
            onClick={toggleFaq5}
          >
            <p>When do the sessions start?</p>
            <span className="text-30px">{faq5 ? "-" : "+"}</span>
          </div>

          {faq5 && <p>We have a new session every month.</p>}
        </div>
      </div>

      <Link to='/pages' className="flex items-center justify-center w-auto px-2 mt-5 text-white rounded bg-landingBlue h-40px">See other courses</Link>
    </div>
  );
}

export default Cyber;
