import React, { useState } from "react";
import PHOTOS from "../../assets/images";
import { Link } from "react-router-dom";

function Web() {
  const [html, setHtml] = useState(false);
  const toggleHtml = () => {
    setHtml(!html);
  };

  const [css, setCss] = useState(false);
  const toggleCss = () => {
    setCss(!css);
  };

  const [js, setJs] = useState(false);
  const toggleJs = () => {
    setJs(!js);
  };

  const [python, setPython] = useState(false);
  const togglePython = () => {
    setPython(!python);
  };

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
      
      {/* hero */}
      <div className="flex items-center justify-center h-auto gap-5 py-3 border large:w-80 bg-vogueWhite large:flex-row small:flex-col">
        
        <div className="flex items-center justify-center border large:w-40 large:h-300px small:w-90 small:h-200px">
          <img
            src={PHOTOS.web}
            alt="hero image"
            className="w-100 h-100 rounded-10"
          />
        </div>

        <div className="flex flex-col items-start justify-center h-auto gap-2 small:px-1 large:w-40 small:w-100 large:px-0">
          <h3 className="text-25px">Web Development Course Overview</h3>

          <p className="text-15px">
            This web development course typically covers the fundamental
            concepts, technologies, and skills required to create dynamic and
            interactive websites & web Apps. Learn the structure and syntax of
            HTML, how to apply styles, create layouts and handle responsive
            design using CSS.
          </p>
          <p className="text-15px">
            Learn how to enable interactivity and dynamic functionality on
            websites using JavaScript. Get into server-side programming using
            Python and Django. Learn about databases, server-side scripting,
            handling requests, responses, and implementing server-side logic.
          </p>
        </div>
      </div>

      {/* Front-End */}
      <div className="flex flex-col items-center gap-2 mt-8 border large:py-5 large:w-80 bg-vogueWhite small:w-100 small:py-2">
        <h3 className="font-bold text-center">
          Front-End web development Course Curriculum
        </h3>

        {/* HTML */}

        <div className="flex flex-col items-center w-100 text-15px">
          <div
            className="flex items-center justify-between h-auto px-1 border cursor-pointer border-landingBlue hover:text-vogueWhite hover:bg-landingBlue rounded-4 large:w-50 text-landingBlue bg-vogueWhite small:w-90"
            onClick={toggleHtml}
          >
            <p>HTML (Hypertext Markup Language)</p>
            <span className="text-30px">{html ? "-" : "+"}</span>
          </div>

          {html && (
            <div className="flex flex-col items-center h-auto large:w-60 small:w-80">
              <div className="flex flex-col items-start h-auto gap-1 py-2 list-disc w-100">
                <h5 className="h-auto font-bold text-center w-100">WEEK 1</h5>
                <h5 className="font-bold">DAY 1</h5>
                <ul className="list-disc">
                  <li>Anatomy of an HTML tag</li>
                  <li>Basic structure of HTML</li>
                  <li>Doctype and HTML tag</li>
                  <li>Creating a HTML file</li>
                  <li>Adding text to your web page</li>
                  <li>Paragraph</li>
                  <li>Headings</li>
                </ul>

                <h5 className="font-bold">DAY 2</h5>

                <ul className="list-disc">
                  <li>White space</li>
                  <li>Line Breaks</li>
                  <li>Horizontal Rule</li>
                  <li>Strong tag</li>
                  <li>Emphasis tag</li>
                  <li>Quotations</li>
                  <li>Abbreviation</li>
                  <li>Superscript</li>
                  <li>Subscript</li>
                  <li>HTML character entities</li>
                </ul>

                <h5 className="font-bold">DAY 3</h5>

                <ul className="list-disc">
                  <li>List</li>
                  <li>Ordered list</li>
                  <li>Unordered list</li>
                  <li>Definition list</li>
                  <li>Nested list</li>
                </ul>

                <h5 className="h-auto font-bold text-center w-100">WEEK 2</h5>
                <h5 className="font-bold">DAY 1</h5>
                <ul className="list-disc">
                  <li>Links</li>
                  <li>Linking to other site</li>
                  <li>Links that open a new tab</li>
                  <li>Linking to other pages on the same site</li>
                  <li>Directory structure</li>
                  <li>Images</li>
                  <li>Table</li>
                </ul>

                <h5 className="font-bold">DAY 2</h5>
                <ul className="list-disc">
                  <li>Table element</li>
                  <li>Table row</li>
                  <li>Table data</li>
                  <li>Table heading</li>
                  <li>Grouping sections of a table</li>
                </ul>

                <h5 className="font-bold">DAY 3</h5>
                <ul className="list-disc">
                  <li>Form structure</li>
                  <li>Text input</li>
                  <li>Textarea</li>
                  <li>Radio button</li>
                  <li>Checkbox</li>
                  <li>Dropdown list box</li>
                  <li>File input box</li>
                  <li>Fieldset element</li>
                  <li>Legend element</li>
                  <li>Iframe and Multimedia</li>
                  <li>Multiple video format</li>
                  <li>The audio element</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* CSS */}

        <div className="flex flex-col items-center w-100 text-15px">
          <div
            className="flex items-center justify-between h-auto px-1 border cursor-pointer border-landingBlue hover:text-vogueWhite hover:bg-landingBlue rounded-4 large:w-50 text-landingBlue bg-vogueWhite small:w-90"
            onClick={toggleCss}
          >
            <p>CSS (Cascading Style Sheet)</p>
            <span className="text-30px">{css ? "-" : "+"}</span>
          </div>

          {css && (
            <div className="flex flex-col items-center h-auto large:w-60 small:w-80">
              <div className="flex flex-col items-start h-auto gap-1 py-2 list-disc w-100">
                <h5 className="h-auto font-bold text-center w-100">WEEK 1</h5>
                <h5 className="font-bold">DAY 1</h5>
                <ul className="list-disc">
                  <li>Introduction to CSS</li>
                  <li>Anatomy of CSS</li>
                  <li>Internal CSS</li>
                  <li>Inline CSS</li>
                  <li>External</li>
                </ul>

                <h5 className="font-bold">DAY 2</h5>

                <ul className="list-disc">
                  <li>CSS Selectors</li>
                  <li>Type Selector</li>
                  <li>Class Selector</li>
                  <li>Id Selector</li>
                  <li>Descendant Selector</li>
                </ul>

                <h5 className="font-bold">DAY 3</h5>

                <ul className="list-disc">
                  <li>Adjacent Sibling Selector</li>
                  <li>General Sibling Selector</li>
                  <li>Attribute Selector</li>
                  <li>Attribute Value Selector</li>
                  <li>Universal Selector</li>
                  <li>How CSS Rule</li>
                </ul>

                <h5 className="h-auto font-bold text-center w-100">WEEK 2</h5>
                <h5 className="font-bold">DAY 1</h5>
                <ul className="list-disc">
                  <li>Pseudo classes</li>
                  <li>:link </li>
                  <li>:visited </li>
                  <li>:hover</li>
                  <li>:focus</li>
                  <li>:active</li>
                  <li>:first-child</li>
                  <li>:last-child</li>
                  <li>child(even)</li>
                  <li>nth-child(odd)</li>
                </ul>

                <h5 className="font-bold">DAY 2</h5>
                <ul className="list-disc">
                  <li>Pseudo elements</li>
                  <li>first-letter pseudo-element</li>
                  <li>first-line pseudo-element</li>
                  <li>before pseudo element</li>
                  <li>after pseudo element</li>
                </ul>

                <h5 className="font-bold">DAY 3</h5>
                <ul className="list-disc">
                  <li>Text transform</li>
                  <li>Text decoration</li>
                  <li>Line height</li>
                  <li>Letter spacing</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* JAVASCRIPT */}
        <div className="flex flex-col items-center w-100 text-15px">
          <div
            className="flex items-center justify-between h-auto px-1 border cursor-pointer border-landingBlue hover:text-vogueWhite hover:bg-landingBlue rounded-4 large:w-50 text-landingBlue bg-vogueWhite small:w-90"
            onClick={toggleJs}
          >
            <p>JAVASCRIPT</p>
            <span className="text-30px">{js ? "-" : "+"}</span>
          </div>

          {js && (
            <div className="flex flex-col items-center h-auto large:w-60 small:w-80">
              <div className="flex flex-col items-start h-auto gap-1 py-2 list-disc w-100">
                <h5 className="h-auto font-bold text-center w-100">WEEK 1</h5>
                <h5 className="font-bold">DAY 1</h5>
                <ul className="list-disc">
                  <li>Introduction</li>
                  <li>Requirements to Learning JavaScript</li>
                  <li>Statements</li>
                  <li>Comments</li>
                  <li>Variable</li>
                  <li>Variable naming rules </li>
                </ul>

                <h5 className="font-bold">DAY 2</h5>

                <ul className="list-disc">
                  <li>Data Types</li>
                  <li>String Data Type</li>
                  <li>Number Data Type</li>
                  <li>Boolean Data Type</li>
                  <li>Undefined and Null Data Type</li>
                  <li>Concatenation Operators (String)</li>
                </ul>

                <h5 className="font-bold">DAY 3</h5>

                <ul className="list-disc">
                  <li>Arithmetic Operators (Number)</li>
                  <li>Type Coercion</li>
                  <li>Comparison Operators (All Data Type)</li>
                  <li>Logical Operators (Boolean)</li>
                </ul>

                <h5 className="h-auto font-bold text-center w-100">WEEK 2</h5>
                <h5 className="font-bold">DAY 1</h5>
                <ul className="list-disc">
                  <li>Arrays</li>
                  <li>Array literal</li>
                  <li>Accessing values in an Array</li>
                  <li>Adding values to an Array</li>
                </ul>

                <h5 className="font-bold">DAY 2</h5>
                <ul className="list-disc">
                  <li>Destructuring Arrays</li>
                  <li>The Spread Operator</li>
                  <li>String to Array</li>
                  <li>Spread operator in function</li>
                </ul>

                <h5 className="font-bold">DAY 3</h5>
                <ul className="list-disc">
                  <li>Array Properties and Methods</li>
                  <li>Multidimensional array</li>
                </ul>

                <h5 className="h-auto font-bold text-center w-100">WEEK 3</h5>
                <h5 className="font-bold">DAY 1</h5>
                <ul className="list-disc">
                  <li>Logic</li>
                  <li>if statement</li>
                  <li>if and else statement</li>
                  <li>Ternary Operator</li>
                  <li>if…else if statement</li>
                </ul>

                <h5 className="font-bold">DAY 2</h5>
                <ul className="list-disc">
                  <li>while loop</li>
                  <li>for loop</li>
                  <li>Nested for Loops</li>
                </ul>

                <h5 className="font-bold">DAY 3</h5>
                <ul className="list-disc">
                  <li>Function declaration and expression</li>
                  <li>Invoking a Function</li>
                  <li>Parameters and Arguments</li>
                  <li>Default Parameters</li>
                </ul>

                <h5 className="h-auto font-bold text-center w-100">WEEK 4</h5>
                <h5 className="font-bold">DAY 1</h5>
                <ul className="list-disc">
                  <li>Arrow Functions</li>
                  <li>callback function</li>
                </ul>

                <h5 className="font-bold">DAY 2</h5>
                <ul className="list-disc">
                  <li>Classes</li>
                  <li>Class expressions</li>
                  <li>Constructor</li>
                  <li>Creating an Instance of a Class</li>
                </ul>

                <h5 className="font-bold">DAY 3</h5>
                <ul className="list-disc">
                  <li>Methods in Classes</li>
                  <li>Inheritance</li>
                </ul>

                <h5 className="h-auto font-bold text-center w-100">WEEK 5</h5>
                <h5 className="font-bold">DAY 1</h5>
                <ul className="list-disc">
                  <li>Objects</li>
                  <li>Object literals</li>
                  <li>Accessing properties</li>
                  <li>Adding and deleting properties</li>
                  <li>Array of objects</li>
                  <li>Object Destructuring</li>
                </ul>

                <h5 className="font-bold">DAY 2</h5>
                <ul className="list-disc">
                  <li>Nested Object Destructuring</li>
                  <li>Date object</li>
                </ul>

                <h5 className="font-bold">DAY 3</h5>
                <ul className="list-disc">
                  <li>Document Object Model (DOM)</li>
                  <li>Getting an element by its id</li>
                  <li>Getting elements by their tag names</li>
                  <li>Getting elements by their class names</li>
                  <li>Query selector</li>
                  <li>Changing the CSS of an element</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* PROJECT & EXAM */}
        <div className="flex items-center justify-between h-auto px-1 border cursor-pointer border-landingBlue hover:text-vogueWhite hover:bg-landingBlue rounded-4 large:w-50 text-landingBlue bg-vogueWhite small:w-90">
          <p>PROJECT & EXAM</p>
        </div>

        {/* MENTORSHIP */}
        <div className="flex items-center justify-between h-auto px-1 border cursor-pointer border-landingBlue hover:text-vogueWhite hover:bg-landingBlue rounded-4 large:w-50 text-landingBlue bg-vogueWhite small:w-90">
          <p>MENTORSHIP</p>
        </div>
      </div>

      {/* backend */}

      <div className="flex flex-col items-center gap-2 mt-8 border large:py-5 large:w-80 bg-vogueWhite small:w-100 small:py-2">
        <h3 className="font-bold text-center w-100">
          Back-End (PYTHON Programming) web development Course Curriculum
        </h3>

        {/* WEEK 1 */}

        <div className="flex flex-col items-center w-100 text-15px">
          <div
            className="flex items-center justify-between h-auto px-1 border cursor-pointer border-landingBlue hover:text-vogueWhite hover:bg-landingBlue rounded-4 large:w-50 text-landingBlue bg-vogueWhite small:w-90"
            onClick={toggleWeek1}
          >
            <p>WEEK 1</p>
            <span className="text-30px">{week1 ? "-" : "+"}</span>
          </div>

          {week1 && (
            <div className="flex flex-col items-center h-auto large:w-60 small:w-80">
              <div className="flex flex-col items-start h-auto gap-1 py-2 list-disc w-100">
                <h5 className="h-auto font-bold text-center w-100">WEEK 1</h5>
                <h5 className="font-bold">DAY 1</h5>
                <ul className="list-disc">
                  <li>What is Python</li>
                  <li>History of Python</li>
                  <li>Features of Python</li>
                  <li>Why use Python</li>
                  <li>Installation</li>
                </ul>

                <h5 className="font-bold">DAY 2</h5>

                <ul className="list-disc">
                  <li>Variables</li>
                  <li>Declaring Variables in Python</li>
                  <li>Rules in naming variables</li>
                  <li>Strings</li>
                  <li>String Concatenation</li>
                  <li>Command-line String Input</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* WEEK 2 */}

        <div className="flex flex-col items-center w-100 text-15px">
          <div
            className="flex items-center justify-between h-auto px-1 border cursor-pointer border-landingBlue hover:text-vogueWhite hover:bg-landingBlue rounded-4 large:w-50 text-landingBlue bg-vogueWhite small:w-90"
            onClick={toggleWeek2}
          >
            <p>WEEK 2</p>
            <span className="text-30px">{week2 ? "-" : "+"}</span>
          </div>

          {week2 && (
            <div className="flex flex-col items-center h-auto large:w-60 small:w-80">
              <div className="flex flex-col items-start h-auto gap-1 py-2 list-disc w-100">
                <h5 className="font-bold">DAY 1</h5>
                <ul className="list-disc">
                  <li>Conditional Statement</li>
                  <li>Python Conditions and If statements</li>
                  <li>Indentation</li>
                  <li>Else statements</li>
                  <li>Elif statements</li>
                </ul>

                <h5 className="font-bold">DAY 2</h5>
                <ul className="list-disc">
                  <li>Python Collections (Arrays)</li>
                  <li>List</li>
                  <li>Tuples</li>
                  <li>Sets</li>
                  <li>Dictionary</li>
                </ul>

                <h5 className="font-bold">DAY 3</h5>
                <ul className="list-disc">
                  <li>Loop</li>
                  <li>Python while loop</li>
                  <li>Python for loop</li>
                  <li>The break Statement</li>
                  <li>The continue Statement</li>
                  <li>The range() Function</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* WEEK 3 */}
        <div className="flex flex-col items-center w-100 text-15px">
          <div
            className="flex items-center justify-between h-auto px-1 border cursor-pointer border-landingBlue hover:text-vogueWhite hover:bg-landingBlue rounded-4 large:w-50 text-landingBlue bg-vogueWhite small:w-90"
            onClick={toggleWeek3}
          >
            <p>WEEK 3</p>
            <span className="text-30px">{week3 ? "-" : "+"}</span>
          </div>

          {week3 && (
            <div className="flex flex-col items-center h-auto large:w-60 small:w-80">
              <div className="flex flex-col items-start h-auto gap-1 py-2 list-disc w-100">
                <h5 className="font-bold">DAY 1</h5>
                <ul className="list-disc">
                  <li>Else in For Loop</li>
                  <li>Nested Loops</li>
                  <li>Loop Through a Dictionary</li>
                </ul>

                <h5 className="font-bold">DAY 2</h5>
                <ul className="list-disc">
                  <li>Python functions</li>
                  <li>Creating a Function</li>
                  <li>Calling a Function</li>
                  <li>Calling a Function with paramters</li>
                  <li>Function with Default Parameter Value</li>
                  <li>Return Values</li>
                </ul>

                <h5 className="font-bold">DAY 3</h5>
                <ul className="list-disc">
                  <li>Python Scope</li>
                  <li>Built-in functions</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* WEEK 4 */}
        <div className="flex flex-col items-center w-100 text-15px">
          <div
            className="flex items-center justify-between h-auto px-1 border cursor-pointer border-landingBlue hover:text-vogueWhite hover:bg-landingBlue rounded-4 large:w-50 text-landingBlue bg-vogueWhite small:w-90"
            onClick={toggleWeek4}
          >
            <p>WEEK 4</p>
            <span className="text-30px">{week4 ? "-" : "+"}</span>
          </div>

          {week4 && (
            <div className="flex flex-col items-center h-auto large:w-60 small:w-80">
              <div className="flex flex-col items-start h-auto gap-1 py-2 list-disc w-100">
                <h5 className="font-bold">DAY 1</h5>
                <ul className="list-disc">
                  <li>Python Classes</li>
                  <li>Object</li>
                  <li>Constructor</li>
                </ul>

                <h5 className="font-bold">DAY 2</h5>
                <ul className="list-disc">
                  <li>Constructor with a variable</li>
                  <li>Instance Variables</li>
                  <li>Understanding Inheritance</li>
                </ul>

                <h5 className="font-bold">DAY 3</h5>
                <ul className="list-disc">
                  <li>Modules</li>
                  <li>Packages</li>
                  <li>Python Exceptions</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* WEEK 5 */}
        <div className="flex flex-col items-center w-100 text-15px">
          <div
            className="flex items-center justify-between h-auto px-1 border cursor-pointer border-landingBlue hover:text-vogueWhite hover:bg-landingBlue rounded-4 large:w-50 text-landingBlue bg-vogueWhite small:w-90"
            onClick={toggleWeek5}
          >
            <p>WEEK 5</p>
            <span className="text-30px">{week5 ? "-" : "+"}</span>
          </div>

          {week5 && (
            <div className="flex flex-col items-center h-auto large:w-60 small:w-80">
              <div className="flex flex-col items-start h-auto gap-1 py-2 list-disc w-100">
                <ul className="list-disc">
                  <li>Django Setup</li>
                  <li>Virtual Environment</li>
                  <li>Setting up a Virtual Environment</li>
                  <li>Django Project</li>
                  <li>Steps in creating django project</li>
                  <li>Running your project</li>
                  <li>Migration</li>
                  <li>Django Application</li>
                  <li>Creating a django application</li>
                  <li>Mapping URLS</li>
                  <li>Include function</li>
                  <li>Django Templates</li>
                  <li>Creating a template</li>
                  <li>Django Static Files</li>
                  <li>Creating static files</li>
                  <li>Relative urls with templates</li>
                  <li>Creating relative urls with templates</li>
                  <li>Template inheritance and filters</li>
                  <li>Template inheritance</li>
                  <li>Template filters</li>
                  <li>Django – Models</li>
                  <li>Types of Database</li>
                  <li>Structured Query Language (SQL)</li>
                  <li>Primary Key</li>
                  <li>Rules for defining Primary key</li>
                  <li>e Foreign key</li>
                  <li>Difference Between Primary key & Foreign key</li>
                  <li>Types of Relationship</li>
                  <li>One-to-One relationship</li>
                  <li>One-to-many</li>
                  <li>Many-to-Many</li>
                  <li>Django Model Fields</li>
                  <li>BooleanField</li>
                  <li>CharField</li>
                  <li>TextField</li>
                  <li>URLField</li>
                  <li>DateField</li>
                  <li>DateTimeField</li>
                  <li>DecimalField</li>
                  <li>EmailField</li>
                  <li>FileField</li>
                  <li>FilePathField</li>
                  <li>FloatField</li>
                  <li>ImageField</li>
                  <li>Relationship Fields</li>
                  <li>ForeignKey</li>
                  <li>ManyToManyField</li>
                  <li>OneToOneField</li>
                  <li>Object-Relational Mapper</li>
                  <li>Making Database Changes Without SQL</li>
                  <li>Creating Models</li>
                  <li>The User Model</li>
                  <li>Post model</li>
                  <li>Making Migrations</li>
                  <li>Using the dbshell management command</li>
                  <li>Uploading files</li>
                  <li>Creating the admin interface</li>
                  <li>Creating a super user</li>
                  <li>Using Django shell</li>
                  <li>Django – MTV</li>
                  <li>Django - Basic Forms</li>
                  <li>Process of creating django forms</li>
                  <li>Form rendering options</li>
                  <li>Rendering fields manually</li>
                  <li>Cross-Site Request Forgery</li>
                  <li>Processing the form in the view</li>
                  <li>Model Forms</li>
                </ul>

                {/* <h5 className="font-bold">DAY 2</h5>
                <ul className="list-disc">
                  <li>Constructor with a variable</li>
                  <li>Instance Variables</li>
                  <li>Understanding Inheritance</li>
                </ul>

                <h5 className="font-bold">DAY 3</h5>
                <ul className="list-disc">
                  <li>Modules</li>
                  <li>Packages</li>
                  <li>Python Exceptions</li>
                </ul> */}
              </div>
            </div>
          )}
        </div>

        {/* PROJECT & EXAM */}
        <div className="flex items-center justify-between h-auto px-1 border cursor-pointer border-landingBlue hover:text-vogueWhite hover:bg-landingBlue rounded-4 large:w-50 text-landingBlue bg-vogueWhite small:w-90">
          <p>PROJECT & EXAM</p>
        </div>

        {/* MENTORSHIP */}
        <div className="flex items-center justify-between h-auto px-1 border cursor-pointer border-landingBlue hover:text-vogueWhite hover:bg-landingBlue rounded-4 large:w-50 text-landingBlue bg-vogueWhite small:w-90">
          <p>MENTORSHIP</p>
        </div>
      </div>

      {/* training schedule */}
      <div className="flex flex-col items-center gap-2 mt-8 border large:py-5 small:py-2 large:w-80 bg-vogueWhite text-15px small:w-100">
        <h3 className="text-center w-100 text-landingBlue">
          web development Course - Tuition fees, days & time for upcoming
          classes
        </h3>

        <table className="border border-black">
          <tr className="border border-black">
            <th className="border border-black" colSpan={'3'}>Onsite</th>
          </tr>

          <tr className="border border-black">
            <td className="pl-1 border border-black">Stack</td>
            <td className="pl-1 border border-black">Frontend</td>
            <td className="pl-1 border border-black">Backend</td>
          </tr>

          <tr className="border border-black">
            <td className="pl-1 border border-black">Days</td>
            <td className="pl-1 border border-black">Monday & Wednesday</td>
            <td className="pl-1 border border-black">Tuesday & Thursday</td>
          </tr>
          <tr className="border border-black">
            <td className="pl-1 border border-black">Time</td>
            <td className="pl-1 border border-black">10am-12pm</td>
            <td className="pl-1 border border-black">10am-12pm</td>
          </tr>
          <tr className="border border-black">
            <td className="pl-1 border border-black">location</td>
            <td className="pl-1 border border-black">
            #167 Iju Road Beside Providence Schools, Fagba, Lagos State.
            </td>
          </tr>
          <tr className="border border-black">
            <td className="pl-1 border border-black">Fee</td>
            <td className="pl-1 border border-black">&#8358;90,000</td>
            <td className="pl-1 border border-black">&#8358;100,000</td>
          </tr>
          <tr className="mt-2 border border-black">
            <th className="border border-black" colSpan={'3'}>virtual class</th>
          </tr>
          <tr className="border border-black">
            <td className="pl-1 border border-black">Days</td>
            <td className="pl-1 border border-black">saturdays and sundays</td>
          </tr>
          <tr className="border border-black">
            <td className="pl-1 border border-black">Time</td>
            <td className="pl-1 border border-black">1pm - 4pm</td>
          </tr>
          <tr className="border border-black">
            <td className="pl-1 border border-black">Location</td>
            <td className="pl-1 border border-black">online</td>
          </tr>
          <tr className="border border-black">
            <td className="pl-1 border border-black">Fee</td>
            <td className="pl-1 border border-black">&#8358;90,000</td>
            <td className="pl-1 border border-black">&#8358;100,000</td>
          </tr>
        </table>
      </div>

      {/* FAQ */}
      <div className="flex flex-col items-center mt-8 border small:py-2 large:py-5 large:gap-2 large:w-80 bg-vogueWhite text-15px small:w-100 small:gap-3 small:px-1 large:px-0">
        
        <h3 className="font-bold text-center w-70">FREQUENTLY ASKED QUESTIONS</h3>
        
        <div className="flex flex-col h-auto gap-1 large:w-50 small:w-100">
          <div
            className="flex items-center justify-between h-auto px-1 text-black border cursor-pointer rounded-4 w-100 bg-vogueWhite"
            onClick={toggleFaq1}
          >
            <p>After Completing the program,
            what next?</p>
            <span className="text-30px">{faq1 ? "-" : "+"}</span>
          </div>

          {faq1 && <p>Getting a job will be an easy one as we will add you to our community of tech experts for recommendations. Through mentorship, we will guide you untill you secure your first job.</p>}
        </div>
        
        <div className="flex flex-col h-auto gap-1 large:w-50 small:w-100">
          <div
            className="flex items-center justify-between h-auto px-1 text-black border cursor-pointer rounded-4 w-100 bg-vogueWhite"
            onClick={toggleFaq2}
          >
            <p>Will I be given a certificate at the end
            of this program?</p>
            <span className="text-30px">{faq2 ? "-" : "+"}</span>
          </div>

          {faq2 && <p>We award certificate upon completion of the program. This certificate is recognized by hiring companies worldwide. Completing your final project and displaying it in your portfolio is one of the criteria for graduation.</p>}
        </div>

        <div className="flex flex-col h-auto gap-1 large:w-50 small:w-100">
          <div
            className="flex items-center justify-between h-auto px-1 text-black border cursor-pointer rounded-4 w-100 bg-vogueWhite"
            onClick={toggleFaq3}
          >
            <p>Who are your instructors?</p>
            <span className="text-30px">{faq3 ? "-" : "+"}</span>
          </div>

          {faq3 && <p>All our instructors are chosen on the basis of their technical and educational skills. They will ensure your training is efficient and effective, by monitoring and validating your progress throughout the course.</p>}
        </div>

        <div className="flex flex-col h-auto gap-1 large:w-50 small:w-100">
          <div
            className="flex items-center justify-between h-auto px-1 text-black border cursor-pointer rounded-4 w-100 bg-vogueWhite"
            onClick={toggleFaq4}
          >
            <p>Can I join one of the programs
            remotely?</p>
            <span className="text-30px">{faq4 ? "-" : "+"}</span>
          </div>

          {faq4 && <p>Yes, we have an online platform on which you will get the same experience and benefits of the physical class from the comfort of your home: Assessments, one-on-one meetings and workshops, all with the assistance of your instructors.</p>}
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

export default Web;
