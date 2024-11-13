import React, { useState } from "react";
import PHOTOS from "../../assets/images";
import { Link } from "react-router-dom";

function Digital() {
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
        <div className="flex items-center justify-center large:w-30 large:h-300px small:w-90 small:h-200px">
          <img
            src={PHOTOS.digital}
            alt="hero image"
            className="w-100 h-100 rounded-10"
          />
        </div>

        <div className="flex flex-col items-start justify-center h-auto gap-2 small:px-1 large:w-40 small:w-100 large:px-0">
          <h3 className="text-center text-25px">
            Digital Marketing Course Overview
          </h3>

          <p className="text-15px">
            This comprehensive program is designed to provide you with the
            essential skills and knowledge needed to excel in the dynamic field
            of digital marketing. Whether you're a beginner or looking to
            enhance your existing skills, this course will guide you through
            various aspects of digital marketing, from foundational principles
            to advanced strategies.
          </p>
        </div>
      </div>

      {/* Course Content */}
      <div className="flex flex-col items-center gap-2 mt-8 border large:py-5 large:w-80 bg-vogueWhite small:w-100 small:py-2">
        <h3 className="font-bold text-center w-100">
          Digital Marketing Course Curriculum
        </h3>

        {/* SECTION A */}

        <div className="flex flex-col items-center w-100 text-15px">
          <div
            className="flex items-center justify-between h-auto px-1 border cursor-pointer border-landingBlue hover:text-vogueWhite hover:bg-landingBlue rounded-4 large:w-50 text-landingBlue bg-vogueWhite small:w-90"
            onClick={toggleWeek1}
          >
            <p>Module 1: Introduction to Digital Marketing</p>
            <span className="text-30px">{week1 ? "-" : "+"}</span>
          </div>

          {week1 && (
            <div className="flex flex-col items-center h-auto large:w-60 small:w-80">
              <div className="flex flex-col items-start h-auto gap-1 py-2 list-disc w-100">
                {/* <h5 className="h-auto font-bold text-center w-100">WEEK 1</h5> */}
                {/* <h5 className="font-bold">DAY 1</h5> */}
                <ul className="list-disc">
                  <li>Overview of Digital Marketing</li>
                  <li>Importance and Benefits</li>
                  <li>Traditional Marketing vs. Digital Marketing</li>
                  <li>Current Trends in Digital Marketing</li>
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
            <p>Module 2: Website Design and Development</p>
            <span className="text-30px">{week2 ? "-" : "+"}</span>
          </div>

          {week2 && (
            <div className="flex flex-col items-center h-auto large:w-60 small:w-80">
              <div className="flex flex-col items-start h-auto gap-1 py-2 list-disc w-100">
                {/* <h5 className="h-auto font-bold text-center w-100">WEEK 1</h5>
                <h5 className="font-bold">DAY 1</h5> */}
                <ul className="list-disc">
                  <li>Basics of Website Development</li>
                  <li>
                    Importance of User Experience (UX) and User Interface (UI)
                  </li>
                  <li>Mobile Responsiveness</li>
                  <li>Landing Pages and Their Importance</li>
                  <li>Introduction to Content Management Systems (CMS)</li>
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
            <p>Module 3: Search Engine Optimization (SEO)</p>
            <span className="text-30px">{week3 ? "-" : "+"}</span>
          </div>

          {week3 && (
            <div className="flex flex-col items-center h-auto large:w-60 small:w-80">
              <div className="flex flex-col items-start h-auto gap-1 py-2 list-disc w-100">
                {/* <h5 className="h-auto font-bold text-center w-100">WEEK 1</h5>
                <h5 className="font-bold">DAY 1</h5> */}
                <ul className="list-disc">
                  <li>Understanding Search Engines</li>
                  <li>
                    On-Page SEO Techniques
                    <ul>
                      <li>Keywords and Keyword Research</li>
                      <li>Meta Tags and Descriptions</li>
                      <li>Content Optimization</li>
                    </ul>
                  </li>

                  <li>
                    Off-Page SEO Techniques
                    <ul>
                      <li>Backlink Building</li>
                      <li>Social Bookmarking</li>
                    </ul>
                  </li>

                  <li>
                    Technical SEO
                    <ul>
                      <li>Site Speed Optimization</li>
                      <li>Mobile SEO</li>
                      <li> XML Sitemaps and Robots.txt</li>
                    </ul>
                  </li>
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
            <p>Module 4: Content Marketing</p>
            <span className="text-30px">{week4 ? "-" : "+"}</span>
          </div>

          {week4 && (
            <div className="flex flex-col items-center h-auto large:w-60 small:w-80">
              <div className="flex flex-col items-start h-auto gap-1 py-2 list-disc w-100">
                <ul className="list-disc">
                  <li>Importance of Content Marketing</li>
                  <li>
                    Types of Content
                    <ul>
                      <li>Blog Posts</li>
                      <li>Videos</li>
                      <li>Infographics</li>
                      <li>E-books and Whitepapers</li>
                    </ul>
                  </li>

                  <li>Content Creation Process</li>
                  <li>Content Distribution Channels</li>
                  <li>Content Marketing Too</li>
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
            <p>Module 5: Social Media Marketing</p>
            <span className="text-30px">{week5 ? "-" : "+"}</span>
          </div>

          {week5 && (
            <div className="flex flex-col items-center h-auto border large:w-60 small:w-80">
              <div className="flex flex-col items-start h-auto gap-1 py-2 list-disc w-100">
                <ul className="list-disc">
                  <li>
                    Overview of Social Media Platforms
                    <ul>
                      <li>Facebook</li>
                      <li>Instagram</li>
                      <li>Twitter</li>
                      <li>LinkedIn</li>
                      <li>Pinterest</li>
                    </ul>
                  </li>
                  <li>Creating a Social Media Strategy</li>
                  <li>Social Media Content Planning</li>
                  <li>Social Media Advertising</li>
                  <li>Measuring and Analyzing Social Media Performance</li>
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
            <p>Module 6: Pay-Per-Click (PPC) Advertising</p>
            <span className="text-30px">{week6 ? "-" : "+"}</span>
          </div>

          {week6 && (
            <div className="flex flex-col items-center h-auto w-60">
              <div className="flex flex-col items-start h-auto gap-1 py-2 list-disc w-100">
                <ul className="list-disc">
                  <li>Introduction to PPC Advertising</li>
                  <li>
                    Google Ads
                    <ul>
                      <li>Search Ads</li>
                      <li>Display Ads</li>
                      <li>Video Ads</li>
                    </ul>
                  </li>

                  <li>Setting Up and Managing Ad Campaigns</li>
                  <li>Bidding Strategies</li>
                  <li>Ad Copywriting</li>
                  <li>Performance Tracking and Optimization</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* SECTION G */}
        <div className="flex flex-col items-center w-100 text-15px">
          <div
            className="flex items-center justify-between h-auto px-1 border cursor-pointer border-landingBlue hover:text-vogueWhite hover:bg-landingBlue rounded-4 large:w-50 small:w-90 text-landingBlue bg-vogueWhite"
            onClick={toggleWeek6}
          >
            <p>Module 7: Email Marketing</p>
            <span className="text-30px">{week6 ? "-" : "+"}</span>
          </div>

          {week6 && (
            <div className="flex flex-col items-center h-auto w-60">
              <div className="flex flex-col items-start h-auto gap-1 py-2 list-disc w-100">
                <ul className="list-disc">
                  <li>Importance of Email Marketing</li>
                  <li>Building an Email List</li>
                  <li>Email Marketing Tools and Platforms</li>
                  <li>Crafting Effective Email Campaigns</li>
                  <li>Analyzing Email Campaign</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* SECTION H */}
        <div className="flex flex-col items-center w-100 text-15px">
          <div
            className="flex items-center justify-between h-auto px-1 border cursor-pointer border-landingBlue hover:text-vogueWhite hover:bg-landingBlue rounded-4 large:w-50 small:w-90 text-landingBlue bg-vogueWhite"
            onClick={toggleWeek6}
          >
            <p>Module 8: Analytics and Data Interpretation</p>
            <span className="text-30px">{week6 ? "-" : "+"}</span>
          </div>

          {week6 && (
            <div className="flex flex-col items-center h-auto w-60">
              <div className="flex flex-col items-start h-auto gap-1 py-2 list-disc w-100">
                <ul className="list-disc">
                  <li>Introduction to Digital Marketing Analytics</li>
                  <li>
                    Google Analytics
                    <ul>
                      <li>Setting Up Google Analytics</li>
                      <li> Understanding Key Metrics and Reports</li>
                    </ul>
                  </li>

                  <li>Conversion Tracking</li>
                  <li>A/B Testing and Multivariate Testing</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* SECTION I */}
        <div className="flex flex-col items-center w-100 text-15px">
          <div
            className="flex items-center justify-between h-auto px-1 border cursor-pointer border-landingBlue hover:text-vogueWhite hover:bg-landingBlue rounded-4 large:w-50 small:w-90 text-landingBlue bg-vogueWhite"
            onClick={toggleWeek6}
          >
            <p>Module 9: Affiliate Marketing</p>
            <span className="text-30px">{week6 ? "-" : "+"}</span>
          </div>

          {week6 && (
            <div className="flex flex-col items-center h-auto w-60">
              <div className="flex flex-col items-start h-auto gap-1 py-2 list-disc w-100">
                <ul className="list-disc">
                  <li>Overview of Affiliate Marketing</li>
                  <li>How Affiliate Marketing Works</li>
                  <li>Finding and Joining Affiliate Programs</li>
                  <li>Promoting Affiliate Products</li>
                  <li>Tracking and Measuring Affiliate Performance</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* SECTION J */}
        <div className="flex flex-col items-center w-100 text-15px">
          <div
            className="flex items-center justify-between h-auto px-1 border cursor-pointer border-landingBlue hover:text-vogueWhite hover:bg-landingBlue rounded-4 large:w-50 small:w-90 text-landingBlue bg-vogueWhite"
            onClick={toggleWeek6}
          >
            <p>Module 10: Online Reputation Management (ORM)</p>
            <span className="text-30px">{week6 ? "-" : "+"}</span>
          </div>

          {week6 && (
            <div className="flex flex-col items-center h-auto w-60">
              <div className="flex flex-col items-start h-auto gap-1 py-2 list-disc w-100">
                <ul className="list-disc">
                <li>Importance of ORM</li>
                        <li>Monitoring Online Reputation</li>
                        <li>Strategies for Building a Positive Online Reputation</li>
                        <li>Handling Negative Reviews and Feedback</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* SECTION K */}
        <div className="flex flex-col items-center w-100 text-15px">
          <div
            className="flex items-center justify-between h-auto px-1 border cursor-pointer border-landingBlue hover:text-vogueWhite hover:bg-landingBlue rounded-4 large:w-50 small:w-90 text-landingBlue bg-vogueWhite"
            onClick={toggleWeek6}
          >
            <p>Module 11: Digital Marketing Strategy and Planning</p>
            <span className="text-30px">{week6 ? "-" : "+"}</span>
          </div>

          {week6 && (
            <div className="flex flex-col items-center h-auto w-60">
              <div className="flex flex-col items-start h-auto gap-1 py-2 list-disc w-100">
                <ul className="list-disc">
                <li>Developing a Digital Marketing Strategy</li>
                        <li>Setting SMART Goals</li>
                        <li>Budgeting for Digital Marketing</li>
                        <li>Integrating Digital Marketing Channels</li>
                        <li>Measuring and Evaluating Success</li>
                </ul>
              </div>
            </div>
          )}
        </div>


        {/* SECTION L */}
        <div className="flex flex-col items-center w-100 text-15px">
          <div
            className="flex items-center justify-between h-auto px-1 border cursor-pointer border-landingBlue hover:text-vogueWhite hover:bg-landingBlue rounded-4 large:w-50 small:w-90 text-landingBlue bg-vogueWhite"
            onClick={toggleWeek6}
          >
            <p>Module 12: Case Studies and Practical Projects</p>
            <span className="text-30px">{week6 ? "-" : "+"}</span>
          </div>

          {week6 && (
            <div className="flex flex-col items-center h-auto w-60">
              <div className="flex flex-col items-start h-auto gap-1 py-2 list-disc w-100">
                <ul className="list-disc">
                <li>Analysis of Successful Digital Marketing Campaigns</li>
                        <li>Hands-on Projects</li>
                        <li>Developing a Comprehensive Digital Marketing Plan</li>
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
          Digital marketing course - Tuition fees, days & time for upcoming classes
        </h3>

        <table className="border border-black">
          <tr className="border border-black">
            <th className="border border-black colspan" colSpan={`2`}>
              Training Schedule
            </th>
          </tr>

          <tr className="border border-black">
            <td className="pl-1 border border-black">Days</td>
            <td className="pl-1 border border-black">Monday & Friday</td>
          </tr>

          <tr className="border border-black">
            <td className="pl-1 border border-black">Time</td>
            <td className="pl-1 border border-black">10am - 1pm</td>
          </tr>

          <tr className="border border-black">
            <td className="pl-1 border border-black">Location</td>
            <td className="pl-1 border border-black">
            #167 Iju Road Beside Providence Schools, Fagba, Lagos State.
            </td>
          </tr>
          <tr className="border border-black">
            <td className="pl-1 border border-black">Fee</td>
            <td className="pl-1 border border-black">&#8358;110,000</td>
          </tr>

          {/* <tr className="border border-black">
            <td className="pl-1 border border-black">Course Duration</td>
            <td className="pl-1 border border-black">3 months</td>
          </tr> */}
          
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

      <Link
        to="/pages"
        className="flex items-center justify-center w-auto px-2 mt-5 text-white rounded bg-landingBlue h-40px"
      >
        See other courses
      </Link>
    </div>
  );
}

export default Digital;
