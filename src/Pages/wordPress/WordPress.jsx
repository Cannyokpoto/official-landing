import React, { useState } from "react";
import PHOTOS from "../../assets/images";
import { Link } from "react-router-dom";

function WordPress() {
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
        <div className="flex items-center justify-center large:w-40 large:h-250px small:w-90 small:h-200px">
          <img
            src={PHOTOS.wordpress}
            alt="hero image"
            className="w-100 h-100 rounded-10"
          />
        </div>

        <div className="flex flex-col items-start justify-center h-auto gap-2 small:px-1 large:w-40 small:w-100 large:px-0">
          <h3 className="text-center text-25px">WordPress Course Overview</h3>

          <p className="text-15px">
            WordPress enables you to create and maintain a website, even if you
            have no programming background. Whether you want to create a new
            website or blog, or manage an existing WordPress website, this class
            is for you.
          </p>
        </div>
      </div>

      {/* Course Content */}
      <div className="flex flex-col items-center gap-2 mt-8 border large:py-5 large:w-80 bg-vogueWhite small:w-100 small:py-2">
        <h3 className="font-bold text-center w-100">
          WordPress Course Curriculum
        </h3>

        {/* SECTION A */}

        <div className="flex flex-col items-center w-100 text-15px">
          <div
            className="flex items-center justify-between h-auto px-1 border cursor-pointer border-landingBlue hover:text-vogueWhite hover:bg-landingBlue rounded-4 large:w-50 text-landingBlue bg-vogueWhite small:w-90"
            onClick={toggleWeek1}
          >
            <p>Getting Started with WordPress</p>
            <span className="text-30px">{week1 ? "-" : "+"}</span>
          </div>

          {week1 && (
            <div className="flex flex-col items-center h-auto large:w-60 small:w-80">
              <div className="flex flex-col items-start h-auto gap-1 py-2 list-disc w-100">
                {/* <h5 className="h-auto font-bold text-center w-100">WEEK 1</h5> */}
                {/* <h5 className="font-bold">DAY 1</h5> */}
                <ul className="list-disc">
                  <h4 className="font-bold">
                    Creating a WordPress Site (Installing WordPress)
                  </h4>

                  <li>
                    Installing WordPress with a Web Host’s “1-Click Install”
                  </li>
                  <li>Manually Installing WordPress</li>

                  <h4 className="mt-2 font-bold">
                    Logging Into the WordPress Admin & General Site Settings
                  </h4>

                  <li>Logging Into the WordPress Admin</li>
                  <li>General WordPress Settings</li>
                  <li>Editing Your Profile</li>
                  <li>Setting Your Profile Picture (Gravatar)</li>

                  <h4 className="mt-2 font-bold">
                    Writing Posts & Formatting Text
                  </h4>
                  <li>Posts versus Pages</li>
                  <li>Creating a New Blog Post</li>
                  <li>Using the Visual Editor</li>
                  <li>Pasting Without Formatting & Clearing Formatting</li>
                  <li>Formatting Headings</li>
                  <li>Formatting Bulleted & Numbered Lists</li>
                  <li>Formatting Quotes</li>
                  <li>Publishing a Post</li>
                  <li>Deleting a Post</li>
                  <li>
                    Restoring a Post from the Trash (or Deleting it Delete
                    Permanently)
                  </li>

                  <h4 className="mt-2 font-bold">
                    Publishing a Post (Making it Live)
                  </h4>
                  <li>Publishing a Post (Making it Live)</li>
                  <li>Status</li>
                  <li>Visibility</li>
                  <li>Publish Date & Time</li>

                  <h4>Adding a Read More Link to a Post</h4>
                  <li>Adding the Read More Tag</li>
                  <li>Changing the Text in the More Tag</li>

                  <h4 className="mt-2 font-bold">
                    Creating Links (Hyperlinks)
                  </h4>
                  <li>Linking to Another Website</li>
                  <li>Opening a Link in a New Tab</li>
                  <li>Linking to a Page Within Your Site</li>
                  <li>Editing & Removing Links</li>

                  <h4 className="mt-2 font-bold">
                    Adding Images & Managing the Media Library
                  </h4>
                  <li>Adding an Image to a Post or Page</li>
                  <li>
                    Editing Images (Manually Resizing, Cropping, & Rotating)
                  </li>
                  <li>
                    Media Settings (Customizing the Size of Thumbnail, Medium, &
                    Large)
                  </li>
                  <li>Adding a Featured Image</li>
                  <li>
                    Uploading Images & Files Directly Into the Media Library
                  </li>
                  <li>Editing & Deleting Images in the Media Library</li>
                  <li>
                    Deleting Unused Images (Cleaning Out the Media Library)
                  </li>

                  <h4 className="mt-2 font-bold">Adding an Image Gallery</h4>
                  <li>Adding an Image Gallery</li>
                  <li>Editing an Existing Image Gallery</li>

                  <h4 className="mt-2 font-bold">Adding Video</h4>
                  <li>Embedding YouTube Videos</li>
                  <li>Uploading a Video File</li>
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
            <p>Diving Deeper into WordPress</p>
            <span className="text-30px">{week2 ? "-" : "+"}</span>
          </div>

          {week2 && (
            <div className="flex flex-col items-center h-auto large:w-60 small:w-80">
              <div className="flex flex-col items-start h-auto gap-1 py-2 list-disc w-100">
                {/* <h5 className="h-auto font-bold text-center w-100">WEEK 1</h5>
                <h5 className="font-bold">DAY 1</h5> */}
                <ul className="list-disc">
                  <h4 className="font-bold">
                    Categories, Tags, & Reading Settings
                  </h4>
                  <li>Categories & Tags Explained</li>
                  <li>Creating & Editing Categories</li>
                  <li>Changing the “Uncategorized” Default Category Name</li>
                  <li>Setting the Default Category</li>
                  <li>Creating & Editing Tags</li>
                  <li>Changing Categories/Tags for Multiple Posts</li>
                  <li>Reading Settings</li>

                  <h4 className="mt-2 font-bold">Widgets </h4>
                  <li>Editing & Adding Widgets</li>

                  <h4>Making Pages</h4>
                  <li>Pages versus Posts</li>
                  <li>Creating a New Page</li>
                  <li>Publishing a Page (Making it Live)</li>
                  <li>Deleting a Page</li>
                  <li>Changing the Page Order</li>
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
            <p>Menus</p>
            <span className="text-30px">{week3 ? "-" : "+"}</span>
          </div>

          {week3 && (
            <div className="flex flex-col items-center h-auto large:w-60 small:w-80">
              <div className="flex flex-col items-start h-auto gap-1 py-2 list-disc w-100">
                {/* <h5 className="h-auto font-bold text-center w-100">WEEK 1</h5>
                <h5 className="font-bold">DAY 1</h5> */}
                <ul className="list-disc">
                  <li>About Menus & Locations</li>
                  <li>Adding & Removing Links in Menus</li>
                  <li>Creating Submenus</li>
                  <li>Opening Menu Links in a New Tab</li>
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
            <p>Wordpress themes</p>
            <span className="text-30px">{week4 ? "-" : "+"}</span>
          </div>

          {week4 && (
            <div className="flex flex-col items-center h-auto large:w-60 small:w-80">
              <div className="flex flex-col items-start h-auto gap-1 py-2 list-disc w-100">
                <ul className="list-disc">
                  <h4 className="font-bold">Installing Themes</h4>
                  <li>What Are WordPress Themes?</li>
                  <li>Where Do I Get WordPress Themes?</li>
                  <li>Installing & Activating a Theme</li>
                  <li>Manually Uploading & Activating a Theme</li>
                  <li>Deleting a Theme</li>

                  <h4 className="mt-2 font-bold">
                    Customizing Theme Appearance
                  </h4>
                  <li>Customizing Appearance</li>
                  <li>
                    Customizing the Site Identity (Logo, Title, & Tagline)
                  </li>
                  <li>Adding a Site Icon (Favicon)</li>
                  <li>Customizing the Header</li>
                  <li> Customizing Colors</li>

                  <h4 className="mt-2 font-bold">
                    Changing the Template Layout for a Page/Post
                  </h4>
                  <li>Changing a Template Layout</li>

                  <h4 className="mt-2 font-bold">
                    WordPress Plugins: About, Installing, & Updating
                  </h4>
                  <li>About WordPress Plugins</li>
                  <li>Installing a WordPress Plugin</li>
                  <li>Updating Plugins</li>
                  <li>WordPress Plugins You May Want to Install</li>
                  <li>Recommended WordPress Plugins</li>
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
            <p>SEO (Search Engine Optimization)</p>
            <span className="text-30px">{week5 ? "-" : "+"}</span>
          </div>

          {week5 && (
            <div className="flex flex-col items-center h-auto border large:w-60 small:w-80">
              <div className="flex flex-col items-start h-auto gap-1 py-2 list-disc w-100">
                <ul className="list-disc">
                  <li>Creating SEO-Friendly Permalinks (URLs) for the Site</li>
                  <li>Customizing the URL of an Individual Page/Post</li>
                  <li>Setting Titles & Meta Descriptions with an SEO Plugin</li>
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
            <p>Customizing WordPress</p>
            <span className="text-30px">{week6 ? "-" : "+"}</span>
          </div>

          {week6 && (
            <div className="flex flex-col items-center h-auto w-60">
              <div className="flex flex-col items-start h-auto gap-1 py-2 list-disc w-100">
                <ul className="list-disc">
                  <li>Page Builders: Customizable Page Layouts</li>
                  <li>Theme Builders: Control the Website’s Look</li>
                  <li>Child Themes</li>
                  <li>Custom Post Types</li>
                  <li>Advanced Custom Fields</li>
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
            <p>WordPress Best Practices</p>
            <span className="text-30px">{week6 ? "-" : "+"}</span>
          </div>

          {week6 && (
            <div className="flex flex-col items-center h-auto w-60">
              <div className="flex flex-col items-start h-auto gap-1 py-2 list-disc w-100">
                <ul className="list-disc">
                  <li>Automated Backups</li>
                  <li>WordPress Security</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* SECTION H */}
        {/* <div className="flex flex-col items-center w-100 text-15px">
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
        </div> */}

        {/* SECTION I */}
        {/* <div className="flex flex-col items-center w-100 text-15px">
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
        </div> */}

        {/* SECTION J */}
        {/* <div className="flex flex-col items-center w-100 text-15px">
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
        </div> */}

        {/* SECTION K */}
        {/* <div className="flex flex-col items-center w-100 text-15px">
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
        </div> */}

        {/* SECTION L */}
        {/* <div className="flex flex-col items-center w-100 text-15px">
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
        </div> */}

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
          WordPress course - Tuition fees, days & time for upcoming classes
        </h3>

        <table className="border border-black">
          <tr className="border border-black">
            <th className="border border-black colspan" colSpan={`2`}>
              Training Schedule
            </th>
          </tr>

          <tr className="border border-black">
            <td className="pl-1 border border-black">Days</td>
            <td className="pl-1 border border-black">Monday & Wednesday</td>
          </tr>

          <tr className="border border-black">
            <td className="pl-1 border border-black">Time</td>
            <td className="pl-1 border border-black">1pm - 4pm</td>
          </tr>

          <tr className="border border-black">
            <td className="pl-1 border border-black">Location</td>
            <td className="pl-1 border border-black">
              #167 Iju Road Beside Providence Schools, Fagba, Lagos State.
            </td>
          </tr>
          <tr className="border border-black">
            <td className="pl-1 border border-black">Fee</td>
            <td className="pl-1 border border-black">&#8358;100,000</td>
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

export default WordPress;
