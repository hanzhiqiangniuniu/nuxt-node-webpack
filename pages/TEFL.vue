<template>
  <div class="tefl">
    <v-nav @refreshList="ipadShow"></v-nav>
    <v-ipadNav v-show="this.ipad" @close="ipadHide"></v-ipadNav>
    <div class="headApply">
      <div class="apply_box auto clear">
        <img src="../assets/img/tefl/icon-tefl-cover.png" alt="TEFL Certification from the University of Toronto's Faculty of Education|Career China" class="innerImg">
        <div class="head_right">
          <h1 class="applydes">
            Take Global Recognized TEFL Certificate with Service to
              Apply to China Work Visa
          </h1>
          <div class="money">
            <span class="money_number"><b>$</b>1295</span>
            <p class="money_des">
              Enroll with coupen code “<a href="javascript:;" class="name" style="font-weight: 600">CareerChina</a>” now, and you will have a up to 60% discount!
            </p>
          </div>
          <div class="btns">
            <a href="https://teflonline.teachaway.com/checkout/" target="_blank" class="apply_btn now">
              Enroll Now
            </a>
            <a href="http://lms.teachaway.com/home" target="_blank" class="apply_btn start draw">
              Has account , Start learning
              <span class="top-border"></span>
              <span class="right-border"></span>
              <span class="bottom-border"></span>
              <span class="left-border"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="introduction">
      <div class="auto in_con clear">
        <div class="in_title">
          <h2>Introduction</h2>
          <span class="title_line"></span>
        </div>
        <p class="in_des">
          The University of Toronto TEFL Online course was designed by the Faculty of Education at the University of Toronto, the Ontario Institute of Studies in Education (OISE). The course provides teachers of all experience levels with the necessary skills to successfully teach in the foreign language classroom.
        </p>
      </div>
    </div>
    <div class="course">
      <div class="auto cour_con">
        <h2 style="text-align: center">About the Course</h2>
        <span class="title_line" style="margin: 20px auto"></span>
        <ul class="cou_tab clear">
          <li class="cou_list clear">
            <img src="../assets/img/tefl/icon-tefl-convenient-web.png" alt="" class="cou_list_img">
            <div class="list_content">
              <div class="list_title">
                <img src="../assets/img/tefl/icon-tefl-convenient-iphone@2x.png" alt="" class="m_list_img">
                <h3 class="cou_h3">Convenient</h3>
              </div>
              <p class="list_des">
                The self-paced, 100% online format enables you to easily access and complete the course on your own schedule, from anywhere in the world.
              </p>
            </div>
          </li>
          <li class="cou_list clear">
            <img src="../assets/img/tefl/icon-tefl-recognized-web.png" alt="" class="cou_list_img">
            <div class="list_content">
              <div class="list_title">
                <img src="../assets/img/tefl/icon-tefl-recognized-iphone@2x.png" alt="" class="m_list_img">
                <h3 class="cou_h3">Internationally Recognized</h3>
              </div>
              <p class="list_des">
                Designed by expert instructors from the University of Toronto’s Faculty of Education, the course reflects the standards of one of the world’s top-ranked universities, recognized as a global leader in academic excellence.
              </p>
            </div>
          </li>
          <li class="cou_list clear">
            <img src="../assets/img/tefl/icon-tefl-china-web.png" alt="" class="cou_list_img">
            <div class="list_content">
              <div class="list_title">
                <img src="../assets/img/tefl/icon-tefl-china-iphone@2x.png" alt="" class="m_list_img">
                <h3 class="cou_h3">Pass for China work Visa</h3>
              </div>

              <p class="list_des">
                As the only parter in china,we don’t only recommend our clients this global recognized program, but also offer the authentication service for this license so as to apply for China work visa.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="cou-infor">
      <div class="auto infor clear">
        <div class="in_title">
          <h2 class="infor_h2">Course Information</h2>
          <span class="title_line"></span>
        </div>
        <div class="infor_con">
          <div class="list_box clear">
            <ul class="infor_tab">
              <li class="infor_list">
                <span class="list_name">START TIME</span>
                <span class="list_tag">Anytime</span>
              </li>
              <li class="infor_list">
                <span class="list_name">CREDIT</span>
                <span class="list_tag">Not for credit</span>
              </li>
              <li class="infor_list">
                <span class="list_name">DURATION</span>
                <span class="list_tag">120 hours</span>
              </li>
              <li class="infor_list">
                <span class="list_name">TIME COMMITMENT</span>
                <span class="list_tag">10 -15 Hours/Week</span>
              </li>
            </ul>
            <ul class="infor_tab">
              <li class="infor_list">
                <span class="list_name">PREREQUISITES</span>
                <span class="list_tag">No prerequisites</span>
              </li>
              <li class="infor_list">
                <span class="list_name">LOCATION</span>
                <span class="list_tag">Anywhere</span>
              </li>
              <li class="infor_list">
                <span class="list_name">COURSE TYPE</span>
                <span class="list_tag">Non-degree professional certificate</span>
              </li>
              <li class="infor_list">
                <span class="list_name">SUBJECT AREA</span>
                <span class="list_tag">Teaching English as a Foreign Language</span>
              </li>
            </ul>
          </div>
          <div class="curriculum">
            <h3 class="cur_h3">
              120-hour TEFL course curriculum
              <i class="enlarge_icon" @click="enlarge"></i>
            </h3>
            <div class="curriculum_con">
              <span class="cur_tag">Core Modules</span>
              <ul class="con_tab">
                <li class="con_list">
                  <h4>Module 1: Introduction to English Language Teaching</h4>
                  <div class="list_des_box">
                    <p class="con_list_des">
                      This 10-hour module discusses the function of English as a global language and the structure of the language itself. Why does English function as it does? Which learning methods work best around the world?
                      <br/>
                      During this module, participants will learn about:
                    </p>
                    <ul class="desTab">
                      <li class="des_list">The role of English as a global language</li>
                      <li class="des_list">Principles of second language acquisition</li>
                      <li class="des_list">Teaching methods</li>
                    </ul>
                  </div>
                </li>
                <li class="con_list">
                  <h4>Module 2: Teaching Language Skills</h4>
                  <div class="list_des_box">
                    <p class="con_list_des">
                      This 25-hour module covers the basics of teaching language skills to English Language Learners. The unit focuses on creating student-centered lesson plans. Which elements of English, specifically, can be difficult for students to learn, and how can these difficulties be addressed in the classroom?
                      <br/>
                      During this module, participants will learn about:
                    </p>
                    <ul class="desTab">
                      <li class="des_list">The Dos and Don’ts of ESL/EFL</li>
                      <li class="des_list">Introducing activities, giving instructions and assessing student comprehension</li>
                      <li class="des_list">Providing feedback and correcting student errors</li>
                      <li class="des_list">Teaching the six major elements of language learning: reading, writing, speaking, listening, grammar and pronunciation</li>
                    </ul>
                  </div>
                </li>
                <li class="con_list">
                  <h4>Module 3: Adapting Subject-Specific Content</h4>
                  <div class="list_des_box">
                    <p class="con_list_des">
                      This 10-hour module focuses on practicing flexibility with content and identifying the situations in which lessons should be adapted. How can a teacher adjust the curriculum to bridge gaps in students’ abilities? How will this vary in different regions?
                      <br/>
                      During this module, participants will learn:
                    </p>
                    <ul class="desTab">
                      <li class="des_list">Ways to adapt curriculum content</li>
                      <li class="des_list">How to adjusting expectations</li>
                      <li class="des_list">How to use subject content to teach English language skills</li>
                    </ul>
                  </div>
                </li>
                <li class="con_list">
                  <h4>Module 4: Structuring and Delivering Lessons</h4>
                  <div class="list_des_box">
                    <p class="con_list_des">
                      This 20-hour module guides participants through the process of developing the components of a successful lesson. Participants will learn how to identify classroom themes and channel student attention into productive learning. How can educators assess their own lessons in order to improve?
                      <br/>
                      During this module, participants will learn about:
                    </p>
                    <ul class="desTab">
                      <li class="des_list">Identifying individual needs</li>
                      <li class="des_list">Defining learning objectives</li>
                      <li class="des_list">Using supplementary resources</li>
                    </ul>
                  </div>
                </li>
                <li class="con_list">
                  <h4>Module 5: Managing Your Teaching Environment</h4>
                  <div class="list_des_box">
                    <p class="con_list_des">
                      This 25-hour module covers classroom management and teaches participants how to adapt to the needs and learning different styles of students. Classroom techniques vary substantially across the world. Which techniques remain constant in all regions?
                      <br/>
                      During this module, participants will learn about:
                    </p>
                    <ul class="desTab">
                      <li class="des_list">Adapting to different learning styles</li>
                      <li class="des_list">The importance of planning</li>
                      <li class="des_list">Setting and maintaining high expectations of behavior</li>
                    </ul>
                  </div>
                </li>
                <li class="con_list">
                  <h4>Module 6: Resources and Materials</h4>
                  <div class="list_des_box">
                    <p class="con_list_des">
                      This 10-hour module introduces methods of finding, adapting and personalizing teaching materials. How can teachers adapt materials to meet the needs of English Language Learners?
                      <br/>
                      During this module, participants will learn about:
                    </p>
                    <ul class="desTab">
                      <li class="des_list">Selecting and adapting a wide variety of text-based and digital resources</li>
                      <li class="des_list">Building a varied toolbox of teaching materials</li>
                      <li class="des_list">Engaging in basic teaching reflection and research</li>
                    </ul>
                  </div>
                </li>
              </ul>
              <span class="cur_tag">Elective modules (Choose from two of the following specializations)</span>
              <ul class="con_tab">
                <li class="con_list">
                  <h4>Elective Module 1: Teaching English to Mandarin Speakers</h4>
                  <div class="list_des_box">
                    <p class="con_list_des">
                      In this 10-hour module, participants will become familiar with the common difficulties native Mandarin speakers face when they enter an English language classroom, as well as activities and techniques to help students overcome these difficulties.
                      <br/>
                      During this module, participants will learn about:
                    </p>
                    <ul class="desTab">
                      <li class="des_list">
                        Recognizing common phonological errors to help improve Mandarin speakers’ pronunciation of English vowels, diphthongs and consonants
                      </li>
                      <li class="des_list">
                        Counteracting the problems caused by differences in syntax and morphology between Mandarin and English
                      </li>
                      <li class="des_list">
                        Improving students’ use of English tenses and verbs
                      </li>
                      <li class="des_list">
                        Adapting teaching style and classroom management techniques to better suit the culture of Mandarin-speaking students
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="con_list">
                  <h4>Elective Module 2: Teaching English to Young Learners</h4>
                  <div class="list_des_box">
                    <p class="con_list_des">
                      Teaching young learners presents its own set of challenges, no matter what the language of instruction. Traditional language learning principles are often geared towards adults. Participants in this 10-hour module will learn how to apply these principles to approaches that work best in young learners’ classrooms.
                      <br/>
                      During this module, participants will learn about:
                    </p>
                    <ul class="desTab">
                      <li class="des_list">
                        Designing a balanced lesson aimed at young learners
                      </li>
                      <li class="des_list">
                        Engaging young learners through a variety of media, activities, and teaching techniques
                      </li>
                      <li class="des_list">
                        How to effectively teach the major language skills as well as grammar and vocabulary to young learners
                      </li>
                      <li class="des_list">
                        Strategies to properly incorporate technology in the classroom
                      </li>
                      <li class="des_list">
                        How to assess young learners
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="con_list">
                  <h4>Elective Module 3: Teaching Test Preparation Courses</h4>
                  <div class="list_des_box">
                    <p class="con_list_des">
                      In this 10-hour module, participants are introduced to the structure and function of English language tests worldwide. Participants are taught strategies to provide students with useful study tools for major English language tests.
                      <br/>
                      During this module, participants will learn about:
                    </p>
                    <ul class="desTab">
                      <li class="des_list">
                        Identifying and teaching key features of major proficiency tests
                      </li>
                      <li class="des_list">
                        Planning and organizing a test preparation course
                      </li>
                      <li class="des_list">
                        Preparing students for reading, writing, speaking and listening tasks
                      </li>
                      <li class="des_list">
                        Teaching vocabulary and grammar in a way that meets test requirements
                      </li>
                      <li class="des_list">
                        Teaching successful test-taking strategies
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="con_list">
                  <h4>Elective Module 4: Teaching Business English</h4>
                  <div class="list_des_box">
                    <p class="con_list_des">
                      This 10-hour module covers the foundations of Business English teaching. English is the language of international business. As the world grows increasingly smaller, the role of English in business grows even larger. Professionals around the world use English either as a first language or as a common second language.
                      <br/>
                      During this module, participants will learn about:
                    </p>
                    <ul class="desTab">
                      <li class="des_list">
                        Designing and implementing a Business English course
                      </li>
                      <li class="des_list">
                        Teaching business language and industry jargon
                      </li>
                      <li class="des_list">
                        Helping students practice communicating in a business environment
                      </li>
                      <li class="des_list">
                        Properly adapting material to be culturally appropriate
                      </li>
                      <li class="des_list">
                        Assisting students in writing business correspondence
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="con_list">
                  <h4>Elective Module 5: Digital Technology in the Classroom</h4>
                  <div class="list_des_box">
                    <p class="con_list_des">
                      In this 10-hour module, participants will explore the use of new technologies and meaningful ways in which these can be used to improve students’ learning practices.
                      <br/>
                      During this module, participants will learn about:
                    </p>
                    <ul class="desTab">
                      <li class="des_list">
                        Incorporating a wide variety of technology into the classroom to positively impact the learning process
                      </li>
                      <li class="des_list">
                        Using technology tools to teach reading, writing, speaking and listening
                      </li>
                      <li class="des_list">
                        Using social media to teach English
                      </li>
                      <li class="des_list">
                        Establishing a project-based learning strategy using digital tools
                      </li>
                      <li class="des_list">
                        The positives and negatives of incorporating digital tools, learning management systems and social media within the classroom
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="con_list">
                  <h4>Elective Module 6: Learner-Centred Lessons</h4>
                  <div class="list_des_box">
                    <p class="con_list_des">
                      In this 10-hour module, participants will learn how to give students control of content and language output. This module also covers how to teach discovery and noticing techniques to help students become more independent learners.
                      <br/>
                      During this module, participants will learn about:
                    </p>
                    <ul class="desTab">
                      <li class="des_list">
                        Creating a friendly learner-centred classroom
                      </li>
                      <li class="des_list">
                        Teaching behavior structures
                      </li>
                      <li class="des_list">
                        Using student choice activities
                      </li>
                      <li class="des_list">
                        Introduce cooperative and collaborative learning structures into the classroom
                      </li>
                      <li class="des_list">
                        Teaching noticing skills and use language exploration activities
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="con_list">
                  <h4>Elective Module 7: Teaching Abroad</h4>
                  <div class="list_des_box">
                    <p class="con_list_des">
                      This 10-hour module equips new teachers with the knowledge to research destinations, organizations and work environments overseas. International contracts and business norms may differ vastly from those in the teacher’s home country. By learning to address common difficulties and misconceptions when teaching overseas, participants are prepared for all aspects of teaching abroad.
                      <br/>
                      During this module, participants will learn about:
                    </p>
                    <ul class="desTab">
                      <li class="des_list">
                        Researching destinations and work environments for teachers abroad
                      </li>
                      <li class="des_list">
                        Resume and interview preparation
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="certification">
      <div class="auto cert_con">
        <h2 style="text-align: center">Why TEFL Certification is Important</h2>
        <span class="title_line" style="margin: 20px auto"></span>
        <p class="cert_con_des">
          A Teaching English as a Foreign Language (TEFL) certification is a commonly required qualification for new and experienced teachers who want to teach English language learners (ELLs). With a TEFL certification, teachers can:
        </p>
        <ul class="import_tab clear">
          <li class="import_list">
            <img src="../assets/img/tefl/icon-tefl-qualify.png" alt="" class="cert_img">
            <div class="import_list_con">
              <div class="title_box">
                <img src="../assets/img/tefl/icon-tefl-qualify.png" alt="" class="m_cert_img">
                <h3 class="cer_h3">Qualify to teach English in China</h3>
              </div>
              <p class="import_list_des">
                The minimum requirements to teach English in China are a Bachelor's degree, in any area, and a TEFL certification with a minimum of 120 hours of study.
              </p>
            </div>
          </li>
          <li class="import_list">
            <img src="../assets/img/tefl/icon-tefl-skills.png" alt="" class="cert_img">
            <div class="import_list_con">
              <div class="title_box">
                <img src="../assets/img/tefl/icon-tefl-skills.png" alt="" class="m_cert_img">
                <h3 class="cer_h3">Gain the skills required to teach ELLs</h3>
              </div>
              <p class="import_list_des">
                A TEFL certification prepares you to teach English language skills, plan lessons for foreign language learners, refresh your understanding of English grammar concepts and more.
              </p>
            </div>
          </li>
          <li class="import_list">
            <img src="../assets/img/tefl/icon-tefl-applications.png" alt="" class="cert_img">
            <div class="import_list_con">
              <div class="title_box">
                <img src="../assets/img/tefl/icon-tefl-applications.png" alt="" class="m_cert_img">
                <h3 class="cer_h3">Stand out in job applications</h3>
              </div>
              <p class="import_list_des">
                Even in situations where the hiring school has not explicitly listed a TEFL certification as a requirement, it is always considered a strong asset and could help set you apart from candidates who are not TEFL certified.
              </p>
            </div>
          </li>
          <li class="import_list">
            <img src="../assets/img/tefl/icon-tefl-reputable.png" alt="" class="cert_img">
            <div class="import_list_con">
              <div class="title_box">
                <img src="../assets/img/tefl/icon-tefl-reputable.png" alt="" class="m_cert_img">
                <h3 class="cer_h3">Earn a higher salary with more reputable schools</h3>
              </div>
              <p class="import_list_des">
                Teachers with a TEFL certificate qualify for teaching positions with more reputable schools, which means better benefits and higher salaries.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="quesBox" id="question">
      <h2>Frequently Asked Questions</h2>
      <i class="visa-line"></i>
      <div class="whatIs clear">
        <div class="list_Box" id="list_Box">
          <!--<p class="prompt">
            What is the most important
            factor to be admitted?
          </p>-->
          <ul class="quesTab" id="quesTab">
            <li class="quesList bg" id="Q11">
              <a href="javascript:;">
                Why do I need a TEFL certification to teach English in China?
              </a>
            </li>
            <li class="querList_title">Eligibility FAQs</li>
            <li class="quesList" id="Q22">
              <a href="javascript:;">
                What are the prerequisites to enroll?
              </a>
            </li>
            <li class="quesList" id="Q33">
              <a href="javascript:;">
                Can I apply to enroll if I’m not a licensed teacher?
              </a>
            </li>
            <li class="quesList" id="Q44">
              <a href="javascript:;">
                How do I register to enroll?
              </a>
            </li>
            <li class="quesList" id="Q55">
              <a href="javascript:;">
                What technology/software programs do I need to install when taking the course?
              </a>
            </li>
            <li class="quesList" id="Q66">
              <a href="javascript:;">
                What platforms does the course work on?
              </a>
            </li>
            <li class="quesList" id="Q77">
              <a href="javascript:;">
                Are books or materials required?
              </a>
            </li>
            <li class="querList_title">Enrollment FAQs</li>
            <li class="quesList" id="Q88">
              <a href="javascript:;">
                How long do I have to complete the course?
              </a>
            </li>
            <li class="quesList" id="Q99">
              <a href="javascript:;">
                Can I retake tests or assignments if I don’t pass the first time?
              </a>
            </li>
            <li class="quesList" id="Q1010">
              <a href="javascript:;">
                Does the certificate expire?
              </a>
            </li>
            <li class="quesList" id="Q1111">
              <a href="javascript:;">
                Are there any physical classes or seminars to attend for this course?
              </a>
            </li>
            <li class="quesList" id="Q1212">
              <a href="javascript:;">
                Is the course accredited?
              </a>
            </li>
            <li class="quesList" id="Q1313">
              <a href="javascript:;">
                Who are the course creators?
              </a>
            </li>
            <li class="querList_title">Tuition and payment FAQs</li>
            <li class="quesList" id="Q1414">
              <a href="javascript:;">
                How much does the course cost?
              </a>
            </li>
            <li class="quesList" id="Q1515">
              <a href="javascript:;">
                Can I pay in installments?
              </a>
            </li>
            <li class="quesList" id="Q1616">
              <a href="javascript:;">
                What is the refund policy?
              </a>
            </li>
          </ul>
          <div class="left-line"></div>
        </div>
        <div class="answerBox">
          <ul class="anTab" id="anTab">
            <li class="anList firstT an-active" id="A1">
              <h4>Why do I need a TEFL certification to teach English in China?</h4>
              <p class="listP">
                An authenticated TEFL certification, with a minimum of 120 hours of study is required in order to qualify for a working visa to teach English in China.
              </p>
            </li>
            <li class="anList" id="A2">
              <h4>
                What are the prerequisites to enroll?
              </h4>
              <p class="listP">
                None. Participants are not required to hold a Bachelor’s degree or teaching license in order to enroll.
              </p>
            </li>
            <li class="anList" id="A3">
              <h4>Can I apply to enroll if I’m not a licensed teacher?</h4>
              <p class="listP">
                Yes.
              </p>
            </li>
            <li class="anList" id="A4">
              <h4>How do I register to enroll?</h4>
              <p class="listP">
                Participants can enroll in the course on the
                <a href="https://teflonline.teachaway.com/checkout/" target="_blank"> University of Toronto TEFL Online website.</a>
              </p>
            </li>
            <li class="anList" id="A5">
              <h4>What technology/software programs do I need to install when taking the course?</h4>
              <p class="listP">
                A word processor, such as Microsoft Word or Google Docs, is required when taking the course as you will need to download materials and submit assignments.
              </p>
            </li>
            <li class="anList" id="A6">
              <h4>What platforms does the course work on?</h4>
              <p class="listP">
                The course is compatible with most electronic devices. While the recommended device is a laptop or desktop, the course can be accessed via a browser on most smartphones and tablets.
              </p>
            </li>
            <li class="anList" id="A7">
              <h4>Are books or materials required?</h4>
              <p class="listP">
                No. Books and physical materials are not required for the course. All materials needed to complete the course will be available online through the course platform.
              </p>
            </li>
            <li class="anList lastAnlist" id="A8">
              <h4>
                How long do I have to complete the course?
              </h4>
              <p class="listP">
                You have up to one year to complete the course. Time to completion can vary based on your schedule, but, on average, participants are able to complete the certificate in as little as 10 weeks or even shorter.
              </p>
            </li>
            <li class="anList" id="A9">
              <h4>Can I retake tests or assignments if I don’t pass the first time?</h4>
              <p class="listP">
                Yes. In the event that participants fail a test or assignment they can re-attempt as many times as needed to achieve a passing grade.
              </p>
            </li>
            <li class="anList" id="A10">
              <h4>Does the certificate expire? </h4>
              <p class="listP">
                No. A TEFL certification is a lifetime certificate and never expires.
               </p>
            </li>
            <li class="anList" id="A11">
              <h4>Are there any physical classes or seminars to attend for this course?</h4>
              <p class="listP">
                No. There are no in-class components to the course.
              </p>
            </li>
            <li class="anList lastAnlist1" id="A12">
              <h4>
                Is the course accredited?
              </h4>
              <p class="listP">
                TEFL courses are not accredited. Institutions or universities can be accredited, but there is no official external accrediting or evaluation body to govern the standards of TEFL courses. The University of Toronto TEFL Online course was designed by expert instructors from the Ontario Institute for Studies in Education (OISE), University of Toronto, ranked among the top 20 universities in the world. Upon completion of the course, participants receive a certificate issued by the University of the Toronto.
              </p>
            </li>
            <li class="anList" id="A13">
              <h4>Who are the course creators?</h4>
              <p class="listP">
                The course was created by a world-renowned and respected group of policymakers and school specialists from the University of Toronto’s Faculty of Education, a leader in educational research and teacher training programs.
              </p>
            </li>
            <li class="anList" id="A14">
              <h4>How much does the course cost?</h4>
              <p class="listP">
                The 120-hour course is $1,295. Candidates who are accepted into Career China’s job placement program may be eligible for full tuition reimbursement on the University of Toronto TEFL Online course.
              </p>
            </li>
            <li class="anList" id="A15">
              <h4>Can I pay in installments?</h4>
              <p class="listP">
                No. Payment for the course is due in full at enrollment and payment plans are not available.
              </p>
            </li>
            <li class="anList" id="A16">
              <h4>What is the refund policy?</h4>
              <p class="listP">
                This course is non-refundable.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="mask" v-show="mask"></div>
    <div class="curriculum curPopup" v-show="cur_popup">
      <h3 class="cur_h3">
        120-hour TEFL course curriculum
        <i class="narrow_icon" @click="narrow"></i>
      </h3>
      <div class="curriculum_con">
        <span class="cur_tag">Core Modules</span>
        <ul class="con_tab">
          <li class="con_list">
            <h4>Module 1: Introduction to English Language Teaching</h4>
            <div class="list_des_box">
              <p class="con_list_des">
                This 10-hour module discusses the function of English as a global language and the structure of the language itself. Why does English function as it does? Which learning methods work best around the world?
                <br/>
                During this module, participants will learn about:
              </p>
              <ul class="desTab">
                <li class="des_list">The role of English as a global language</li>
                <li class="des_list">Principles of second language acquisition</li>
                <li class="des_list">Teaching methods</li>
              </ul>
            </div>
          </li>
          <li class="con_list">
            <h4>Module 2: Teaching Language Skills</h4>
            <div class="list_des_box">
              <p class="con_list_des">
                This 25-hour module covers the basics of teaching language skills to English Language Learners. The unit focuses on creating student-centered lesson plans. Which elements of English, specifically, can be difficult for students to learn, and how can these difficulties be addressed in the classroom?
                <br/>
                During this module, participants will learn about:
              </p>
              <ul class="desTab">
                <li class="des_list">The Dos and Don’ts of ESL/EFL</li>
                <li class="des_list">Introducing activities, giving instructions and assessing student comprehension</li>
                <li class="des_list">Providing feedback and correcting student errors</li>
                <li class="des_list">Teaching the six major elements of language learning: reading, writing, speaking, listening, grammar and pronunciation</li>
              </ul>
            </div>
          </li>
          <li class="con_list">
            <h4>Module 3: Adapting Subject-Specific Content</h4>
            <div class="list_des_box">
              <p class="con_list_des">
                This 10-hour module focuses on practicing flexibility with content and identifying the situations in which lessons should be adapted. How can a teacher adjust the curriculum to bridge gaps in students’ abilities? How will this vary in different regions?
                <br/>
                During this module, participants will learn:
              </p>
              <ul class="desTab">
                <li class="des_list">Ways to adapt curriculum content</li>
                <li class="des_list">How to adjusting expectations</li>
                <li class="des_list">How to use subject content to teach English language skills</li>
              </ul>
            </div>
          </li>
          <li class="con_list">
            <h4>Module 4: Structuring and Delivering Lessons</h4>
            <div class="list_des_box">
              <p class="con_list_des">
                This 20-hour module guides participants through the process of developing the components of a successful lesson. Participants will learn how to identify classroom themes and channel student attention into productive learning. How can educators assess their own lessons in order to improve?
                <br/>
                During this module, participants will learn about:
              </p>
              <ul class="desTab">
                <li class="des_list">Identifying individual needs</li>
                <li class="des_list">Defining learning objectives</li>
                <li class="des_list">Using supplementary resources</li>
              </ul>
            </div>
          </li>
          <li class="con_list">
            <h4>Module 5: Managing Your Teaching Environment</h4>
            <div class="list_des_box">
              <p class="con_list_des">
                This 25-hour module covers classroom management and teaches participants how to adapt to the needs and learning different styles of students. Classroom techniques vary substantially across the world. Which techniques remain constant in all regions?
                <br/>
                During this module, participants will learn about:
              </p>
              <ul class="desTab">
                <li class="des_list">Adapting to different learning styles</li>
                <li class="des_list">The importance of planning</li>
                <li class="des_list">Setting and maintaining high expectations of behavior</li>
              </ul>
            </div>
          </li>
          <li class="con_list">
            <h4>Module 6: Resources and Materials</h4>
            <div class="list_des_box">
              <p class="con_list_des">
                This 10-hour module introduces methods of finding, adapting and personalizing teaching materials. How can teachers adapt materials to meet the needs of English Language Learners?
                <br/>
                During this module, participants will learn about:
              </p>
              <ul class="desTab">
                <li class="des_list">Selecting and adapting a wide variety of text-based and digital resources</li>
                <li class="des_list">Building a varied toolbox of teaching materials</li>
                <li class="des_list">Engaging in basic teaching reflection and research</li>
              </ul>
            </div>
          </li>
        </ul>
        <span class="cur_tag" title="Elective modules (Choose from two of the following specializations)">Elective modules (Choose from two of the following specializations)</span>
        <ul class="con_tab">
          <li class="con_list">
            <h4>Elective Module 1: Teaching English to Mandarin Speakers</h4>
            <div class="list_des_box">
              <p class="con_list_des">
                In this 10-hour module, participants will become familiar with the common difficulties native Mandarin speakers face when they enter an English language classroom, as well as activities and techniques to help students overcome these difficulties.
                <br/>
                During this module, participants will learn about:
              </p>
              <ul class="desTab">
                <li class="des_list">
                  Recognizing common phonological errors to help improve Mandarin speakers’ pronunciation of English vowels, diphthongs and consonants
                </li>
                <li class="des_list">
                  Counteracting the problems caused by differences in syntax and morphology between Mandarin and English
                </li>
                <li class="des_list">
                  Improving students’ use of English tenses and verbs
                </li>
                <li class="des_list">
                  Adapting teaching style and classroom management techniques to better suit the culture of Mandarin-speaking students
                </li>
              </ul>
            </div>
          </li>
          <li class="con_list">
            <h4>Elective Module 2: Teaching English to Young Learners</h4>
            <div class="list_des_box">
              <p class="con_list_des">
                Teaching young learners presents its own set of challenges, no matter what the language of instruction. Traditional language learning principles are often geared towards adults. Participants in this 10-hour module will learn how to apply these principles to approaches that work best in young learners’ classrooms.
                <br/>
                During this module, participants will learn about:
              </p>
              <ul class="desTab">
                <li class="des_list">
                  Designing a balanced lesson aimed at young learners
                </li>
                <li class="des_list">
                  Engaging young learners through a variety of media, activities, and teaching techniques
                </li>
                <li class="des_list">
                  How to effectively teach the major language skills as well as grammar and vocabulary to young learners
                </li>
                <li class="des_list">
                  Strategies to properly incorporate technology in the classroom
                </li>
                <li class="des_list">
                  How to assess young learners
                </li>
              </ul>
            </div>
          </li>
          <li class="con_list">
            <h4>Elective Module 3: Teaching Test Preparation Courses</h4>
            <div class="list_des_box">
              <p class="con_list_des">
                In this 10-hour module, participants are introduced to the structure and function of English language tests worldwide. Participants are taught strategies to provide students with useful study tools for major English language tests.
                <br/>
                During this module, participants will learn about:
              </p>
              <ul class="desTab">
                <li class="des_list">
                  Identifying and teaching key features of major proficiency tests
                </li>
                <li class="des_list">
                  Planning and organizing a test preparation course
                </li>
                <li class="des_list">
                  Preparing students for reading, writing, speaking and listening tasks
                </li>
                <li class="des_list">
                  Teaching vocabulary and grammar in a way that meets test requirements
                </li>
                <li class="des_list">
                  Teaching successful test-taking strategies
                </li>
              </ul>
            </div>
          </li>
          <li class="con_list">
            <h4>Elective Module 4: Teaching Business English</h4>
            <div class="list_des_box">
              <p class="con_list_des">
                This 10-hour module covers the foundations of Business English teaching. English is the language of international business. As the world grows increasingly smaller, the role of English in business grows even larger. Professionals around the world use English either as a first language or as a common second language.
                <br/>
                During this module, participants will learn about:
              </p>
              <ul class="desTab">
                <li class="des_list">
                  Designing and implementing a Business English course
                </li>
                <li class="des_list">
                  Teaching business language and industry jargon
                </li>
                <li class="des_list">
                  Helping students practice communicating in a business environment
                </li>
                <li class="des_list">
                  Properly adapting material to be culturally appropriate
                </li>
                <li class="des_list">
                  Assisting students in writing business correspondence
                </li>
              </ul>
            </div>
          </li>
          <li class="con_list">
            <h4>Elective Module 5: Digital Technology in the Classroom</h4>
            <div class="list_des_box">
              <p class="con_list_des">
                In this 10-hour module, participants will explore the use of new technologies and meaningful ways in which these can be used to improve students’ learning practices.
                <br/>
                During this module, participants will learn about:
              </p>
              <ul class="desTab">
                <li class="des_list">
                  Incorporating a wide variety of technology into the classroom to positively impact the learning process
                </li>
                <li class="des_list">
                  Using technology tools to teach reading, writing, speaking and listening
                </li>
                <li class="des_list">
                  Using social media to teach English
                </li>
                <li class="des_list">
                  Establishing a project-based learning strategy using digital tools
                </li>
                <li class="des_list">
                  The positives and negatives of incorporating digital tools, learning management systems and social media within the classroom
                </li>
              </ul>
            </div>
          </li>
          <li class="con_list">
            <h4>Elective Module 6: Learner-Centred Lessons</h4>
            <div class="list_des_box">
              <p class="con_list_des">
                In this 10-hour module, participants will learn how to give students control of content and language output. This module also covers how to teach discovery and noticing techniques to help students become more independent learners.
                <br/>
                During this module, participants will learn about:
              </p>
              <ul class="desTab">
                <li class="des_list">
                  Creating a friendly learner-centred classroom
                </li>
                <li class="des_list">
                  Teaching behavior structures
                </li>
                <li class="des_list">
                  Using student choice activities
                </li>
                <li class="des_list">
                  Introduce cooperative and collaborative learning structures into the classroom
                </li>
                <li class="des_list">
                  Teaching noticing skills and use language exploration activities
                </li>
              </ul>
            </div>
          </li>
          <li class="con_list">
            <h4>Elective Module 7: Teaching Abroad</h4>
            <div class="list_des_box">
              <p class="con_list_des">
                This 10-hour module equips new teachers with the knowledge to research destinations, organizations and work environments overseas. International contracts and business norms may differ vastly from those in the teacher’s home country. By learning to address common difficulties and misconceptions when teaching overseas, participants are prepared for all aspects of teaching abroad.
                <br/>
                During this module, participants will learn about:
              </p>
              <ul class="desTab">
                <li class="des_list">
                  Researching destinations and work environments for teachers abroad
                </li>
                <li class="des_list">
                  Resume and interview preparation
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="EnrollBox">
      <ul class="auto enroll_con clear">
        <li class="enroll_list">
          <img src="../assets/img/tefl/icon-tefl-oise@2x.png" alt="">
        </li>
        <li class="enroll_list">
          <p class="enroll-money-nember">
            <span class="unit">$</span>1295
          </p>
          <p class="enroll_des">
            Enroll with coupen code “<span class="name" style="color: #E54430;">CareerChina</span>” now, and you will have a up to 60% discount! <i class="money_icon"></i>
          </p>
        </li>
        <li class="enroll_list">
          <a href="https://teflonline.teachaway.com/checkout/" target="_blank" class="enroll-btn">Enroll Now</a>
          <p class="click-des">
            Already has account? <a href="http://lms.teachaway.com/home" target="_blank" style="color: #4B4DFF;">Click Here</a> to start learning.
          </p>
        </li>
      </ul>
    </div>
    <div class="m_enroll">
      <span class="m_money">
        <b>$</b>1295
      </span>
      <p class="m_enroll_des">
        Discount by  “<span class="name" style="color: #E54430;">CareerChina</span>” !
      </p>
      <a href="https://teflonline.teachaway.com/checkout/" target="_blank" class="m_link">Enroll Now</a>
    </div>
    <v-goTop></v-goTop>
    <v-footer></v-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import $ from 'jquery'
  import Vue from 'vue'
  //import VueResource from 'vue-resource'
  //import interfaceStr from '../assets/js/interface.js'
  import '../assets/css/question.css'
  import addthis from '../assets/js/addthis.js';
  import nav from '../components/public/nav/nav'
  //import submitEmail from '../components/public/submit/submitEmail'
  import footer from '../components/public/footer/footer'
  import goTop from '../components/public/goTop/goTop'
  import ipadNav from '../components/public/ipad-nav/ipadNav'
  var addthis_share = {};
  export default{
    data(){
      return{
        scrollWatch: true,
        ipad:false,
        mask:false,
        cur_popup:false,
      }

    },
    head: {
      title:" TEFL Certification from the University of Toronto's Faculty of Education|Career China ",
      meta:[
        { name: "keywords", content: "TEFL Certification|TESOL Certification"},
        { name: "description", content: "Earn your TEFL certification online from the University of Toronto’s Faculty of Education and teach abroad with industry-leading training in Teaching English as a Foreign Language."},
        { property: "og:url", content: 'www.careerchina.com/TEFL'},
        { property: "og:type", content: "article"},
        { property: "og:image", content: "http://material.careerchina.com/img/16962a62-9e13-4f84-a846-a778a0316ee4.png"},
        { name: "twitter:card", content: "http://material.careerchina.com/img/16962a62-9e13-4f84-a846-a778a0316ee4.png"},
        { name: "twitter:creator", content: "careerchina"},
        { name: "twitter:image", content: "http://material.careerchina.com/img/16962a62-9e13-4f84-a846-a778a0316ee4.png"},
        { itemprop: "image", content: "http://material.careerchina.com/img/16962a62-9e13-4f84-a846-a778a0316ee4.png"},
      ]
    },
    components:{
      'v-nav':nav,
      'v-footer':footer,
      'v-goTop':goTop,
      'v-ipadNav':ipadNav,
    },
    methods:{
      ipadShow(){
        this.ipad=true
      },
      ipadHide(){
        this.ipad=false
      },
      enlarge(){
        this.mask=true;
        this.cur_popup=true
      },
      narrow(){
        this.mask=false;
        this.cur_popup=false
      }
    },
    mounted(){
        var _this=this;
      addthis();
      var oQuesTab=document.getElementById('quesTab'),
        oAnTab=document.getElementById('anTab'),
        aAli=oAnTab.getElementsByTagName('li');
      $(window).on('scroll', () => {
        if(this.scrollWatch){
          var anListTop=$('.lastAnlist').offset().top - $(window).scrollTop();
          var anListTop1=$('.lastAnlist1').offset().top - $(window).scrollTop();
          var firstT=$('.firstT').offset().top - $(window).scrollTop();
          for(var i=0;i<aAli.length;i++){
            var wst =  $(window).scrollTop();
            for (i=1; i<17; i++){
              var anOffset=$("#A"+i).offset().top;
              if(anOffset-300 < wst){ //判断滚动条位置
                $('#quesTab li').removeClass("bg"); //清除c类
                $("#Q"+i+i).addClass("bg");	//给当前导航加c类
                $('#anTab li').removeClass('an-active')
                $("#A"+i).addClass("an-active");
              }
            }
          }
          if(firstT<=150){
            $('.list_Box').css({
              position:'fixed',
              top:'100px',
              'margin-top':'0'
            })
          }else if(firstT > 150){
            $('.list_Box').css({
              position:'static',
              top:'inherit'
            })
          }
          if(anListTop <=150){
            $('.list_Box').css({
              position:'static',
              top:'inherit',
              'margin-top':'900px'
            });
          }
          if(anListTop1 <=150){
            $('.list_Box').css({
              position:'static',
              top:'inherit',
              'margin-top':'1100px'
            });
          }
        }
        if($(window).scrollTop()>600){
          $('.EnrollBox').fadeIn(400);
          $('.m_enroll').fadeIn(600)
          //_this.enroll=true;
          //_this.m_enroll=true
        }else {
          $('.EnrollBox').fadeOut(400);
          $('.m_enroll').fadeOut(600)
          //_this.enroll=false;
          //_this.m_enroll=false
        }
      });
      $('.quesList').each(function (index, item) {
        $(item).click(function () {
          $(this).addClass('bg');
          $(this).siblings().removeClass('bg')
          $(window).scrollTop(aAli[index].offsetTop - 280);
        })
      })

      /*for(var i=0; i<aQLi.length; i++){
        aQLi[i].index=i;
        aQLi[i].onclick=function(){
          for(var i=0; i<aQLi.length; i++){
            aQLi[i].className='quesList';
          }
          this.className='quesList bg';
          $(window).scrollTop(aAli[this.index].offsetTop - 280);
        }
      }*/
    },
    destroyed () {
      this.scrollWatch = false;
    }

  }
</script>

<style scoped>
  .headApply{
    width: 100%;
    height: 480px;
    background-image: linear-gradient(135deg, #19DFE8 0%, #4889FF 54%, #4B4DFF 100%);
  }
  .auto{
    width: 1040px;
    margin: auto;
  }
  .apply_box{
    padding-top: 160px;
  }
  .apply_box .innerImg{
    float: left;
    width: 380px;
    height: 240px;
  }
  .apply_box .head_right{
    margin-left: 40px;
    float: left;
    width: 620px;
  }
  .apply_box .head_right .applydes{
    font-size: 22px;
    color: #fff;
    line-height: 30px;
    font-weight: bold;
  }
  .head_right .money{
    margin: 35px 0;
    font-size: 0;
  }
  .head_right .money .money_number{
    display: inline-block;
    font-size: 40px;
    color: #fff;
    margin-right: 12px;
    font-weight: 600;
  }
  .head_right .money .money_number b{
    font-size: 20px;
  }
  .head_right .money .money_des{
    display: inline-block;
    width: 280px;
    font-size: 12px;
    color: #fff;
    line-height: 16px;
  }
  .name{
    color: #fff;
  }
  .money_icon{
    display: inline-block;
    width: 21px;
    height: 16px;
    background: url("../assets/img/tefl/icon-tefl-preferential@2x.png")no-repeat center;
    background-size: cover;
    vertical-align: middle;
  }
  .head_right .btns{
    font-size: 0;
  }
  .head_right .btns .apply_btn{
    display: inline-block;
    width: 230px;
    height: 50px;
    border-radius: 2px;
    border: none;
    font-size: 14px;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
  }
  .head_right .btns .now{
    margin-right: 30px;
    /*background-image: linear-gradient(135deg, #19DFE8 0%, #4889FF 54%, #4B4DFF 100%);*/
    background: #fff;
    color: #333435;
    font-weight: bold;
    transition: all .5s;
  }
  .head_right .btns .now:hover{
    color: #4B4DFF;
    background: rgba(255,255,255,.94);
    /*background-image: linear-gradient(135deg, #17CFD7 0%, #4889FF 54%, #3133DF 100%)*/
  }
  .head_right .btns .start{
    color: #fff;
    border: 1px solid #fff;
    /*border-image: -webkit-linear-gradient( 135deg, #19DFE8 0% , #4B4DFF 100%) 20 20;
    border-image: -moz-linear-gradient( 135deg, #19DFE8 0% , #4B4DFF 100%) 20 20;
    border-image: linear-gradient(  135deg, #19DFE8 0% , #4B4DFF 100%) 20 20;*/
  }
  .draw{
    position: relative;
  }
  .draw .top-border{
    position: absolute;
    top:-1px;
    left: 0;
    width: 0;
    height: 0;
    /*background-image: linear-gradient(  135deg, #19DFE8 0% , #4B4DFF 100%);;*/
    background: #fff;
    border-radius: 2px;
  }
  .draw .right-border{
    position: absolute;
    top:0;
    right: -1px;
    width: 0;
    height: 0;
    /*background: #4B4DFF;*/
    background: #fff;
    border-radius: 2px;
  }
  .draw .bottom-border{
    position: absolute;
    bottom:-1px;
    right: 0;
    width: 0;
    height: 0;
    /*background-image: linear-gradient(  135deg, #19DFE8 0% , #4B4DFF 100%);*/
    background: #fff;
    border-radius: 2px;
  }
  .draw .left-border{
    position: absolute;
    bottom:0;
    left: -1px;
    width: 0;
    height: 0;
    /*background: #19DFE8;*/
    background: #fff;
    border-radius: 2px;
  }
  .draw:hover .top-border{
    width: 229px;
    height: 2px;
    -webkit-transition: width 0.25s ease-out 0s;
    transition: width 0.25s ease-out 0s;
  }
  .draw:hover .right-border{
    width: 2px;
    height: 49px;
    -webkit-transition: height 0.125s ease-out 0.25s;
    transition: height 0.125s ease-out .25s;
  }
  .draw:hover .bottom-border{
    width: 229px;
    height: 2px;
    -webkit-transition: width 0.25s ease-out 0.375s;
    transition: width 0.25s ease-out 0.375s;
  }
  .draw:hover .left-border{
    width: 2px;
    height: 49px;
    -webkit-transition: height 0.125s ease-out .625s;
    transition: height 0.125s ease-out .625s;
  }
  .introduction{
    width: 100%;
    background: #fff;
  }
  .in_con{
    padding: 90px 0;
  }
  .in_title{
    float: left;
  }
  h2{
    font-size: 26px;
    color: #333435;
    font-weight: bold;
  }
  .title_line{
    display: block;
    margin-top: 20px;
    width: 60px;
    height: 2px;
    background-image: linear-gradient(45deg, #19DFE8 0%, #4889FF 54%, #4B4DFF 100%);
  }
  .in_con .in_des{
    float: left;
    margin-left: 80px;
    width: 800px;
    font-size: 14px;
    color: #888888;
    line-height: 28px;
  }
  .course{
    width: 100%;
    background: #F9F9FB;
  }
  .cour_con{
    padding: 90px 0;
  }
  .cour_con .cou_tab{
    margin-top: 60px;
  }
  .cour_con .cou_tab .cou_list{
    float: left;
    margin-right: 70px;
  }
  .cour_con .cou_tab .cou_list:last-child{
    margin-right: 0;
  }
  .cour_con .cou_tab .cou_list .cou_list_img{
    display: block;
    margin: auto;
    width: 178px;
    height: 114px;
    margin-bottom: 30px;
  }
  .cour_con .cou_tab .cou_list .list_content{
    width: 300px;
  }
  .m_list_img{
    display: none;
    width: 34px;
    height: 34px;
  }
  h3{
    font-size: 16px;
    color: #333435;
    font-weight: bold;
    text-align: center;
  }
  .cour_con .cou_tab .cou_list .list_content .list_des{
    margin-top: 16px;
    font-size: 14px;
    color: #888888;
    line-height: 28px;
  }
  .cou-infor{
    width: 100%;
    background: #fff;
  }
  .infor{
    padding: 90px 0;
  }
  .infor_h2{
    width: 157px;
  }
  .infor .infor_con{
    width: 800px;
    float: right;
  }
  .list_box{
    padding-bottom: 20px;
  }
  .infor .infor_con .infor_tab:first-child{
    float: left;
  }
  .infor .infor_con .infor_tab:last-child{
    float: right;
  }
  .infor .infor_con .infor_tab .infor_list{
    margin-bottom: 30px;
    font-size: 0;
  }
  .infor_con .infor_tab .infor_list .list_name{
    display: inline-block;
    width: 135px;
    margin-right: 12px;
    font-size: 14px;
    color: #888888;
    text-align: -webkit-right;
  }
  .infor_con .infor_tab .infor_list .list_tag{
    display: inline-block;
    font-size: 16px;
    color: #333435;
    font-weight: 600;
  }
  .curriculum{
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #E8E8E8;
  }
  .curriculum .cur_h3{
    position: relative;
    padding: 0 20px;
    width: 100%;
    height: 50px;
    line-height: 50px;
    background: #F9F9FB;
    border-bottom: 1px solid #E8E8E8;
    text-align: inherit;
  }
  .curriculum .cur_h3 .enlarge_icon,.cur_h3 .narrow_icon{
    position: absolute;
    top:15px;
    right:15px;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  .curriculum .cur_h3 .enlarge_icon{
    background: url("../assets/img/tefl/icon-fullscreen.png")no-repeat center;
    background-size: cover;
  }
  .curriculum .cur_h3 .enlarge_icon:hover{
    background: url("../assets/img/tefl/icon-fullscreen-press.png")no-repeat center;
    background-size: cover;
  }
  .curriculum .curriculum_con{
    overflow: auto;
    height: 190px;
    padding: 0 20px;
  }
  .curriculum .curriculum_con .cur_tag{
    display: block;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    color: #333435;
    font-weight: bold;
    border-bottom: 1px solid #E9E9E9;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .curriculum .curriculum_con .con_tab{
    padding: 10px 0;
  }
  .curriculum .curriculum_con .con_tab .con_list{
    margin-bottom: 20px;
  }
  .curriculum .curriculum_con .con_tab .con_list:last-child{
    margin-bottom: 0;
  }
  h4{
    font-size: 14px;
    color: #333435;
    font-weight: 600;
  }
  .curriculum .curriculum_con .con_tab .con_list_des{
    margin-top: 12px;
    font-size: 14px;
    color: #888888;
    letter-spacing: 0;
    line-height: 24px;
  }
  .desTab .des_list{
    font-size: 14px;
    color: #888888;
    line-height: 24px;
    list-style: disc;
    margin-left: 20px;
  }
  .certification{
    width: 100%;
    background: #F9F9FB;
  }
  .cert_con{
    padding: 90px 0;
  }
  .cert_con .cert_con_des{
    margin: 60px 0;
    font-size: 14px;
    color: #888888;
    letter-spacing: 0;
    line-height: 28px;
  }
  .cert_con .import_tab .import_list{
    float: left;
    margin:0 70px 40px 0;
    font-size: 0;

  }
  .cert_con .import_tab .import_list:nth-child(2){
    margin: 0;
  }
  .cert_con .import_tab .import_list:nth-child(3){
    margin: 0 70px 0 0;
  }
  .cert_con .import_tab .import_list:nth-child(4){
    margin: 0;
  }
  .cert_con .import_tab .import_list .cert_img{
    display: inline-block;
    width: 40px;
    height: 40px;
    margin-right: 25px;
    vertical-align: top;
  }
  .import_list .import_list_con{
    display: inline-block;
    width: 420px;
  }
  .cert_con .import_tab .import_list .m_cert_img{
    display: none;
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
  .cert_con .import_tab .import_list .cer_h3{
    text-align: inherit;
  }
  .cert_con .import_tab .import_list .import_list_des{
    margin-top: 10px;
    font-size: 14px;
    color: #888888;
    letter-spacing: 0;
    line-height: 28px;
  }
  .querList_title{
    font-size: 14px;
    color: #333435;
    font-weight: bold;
    padding-left: 23px;
    margin-bottom: 15px;
  }
  #Q11{
    font-size: 14px;
    color: #333435;
    font-weight: bold;
  }
  .mask{
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.4);
    z-index: 120;
  }
  .curPopup{
    width: 1000px;
    height: 600px;
    position: fixed;
    top:50%;
    left: 50%;
    margin-top: -300px;
    margin-left: -500px;
    z-index: 130;
  }
  .curPopup .cur_h3 .narrow_icon{
    background: url("../assets/img/tefl/icon-narrow.png")no-repeat center;
    background-size: cover;
  }
  .curPopup .cur_h3 .narrow_icon:hover{
    background: url("../assets/img/tefl/icon-narrow-press.png")no-repeat center;
    background-size: cover;
  }
  .curPopup .curriculum_con{
    height: 550px;
    padding: 0 40px;
  }
  #question{
    margin-bottom: 150px;
  }
  .EnrollBox{
    position: fixed;
    bottom:0;
    left:0;
    width: 100%;
    height: 160px;
    background: #fff;
    z-index: 115;
    box-shadow: 0 -2px 4px 0 rgba(112,112,112,0.08);
    display: none;
  }
  .EnrollBox .enroll_con{
    padding: 25px 0;
  }
  .EnrollBox .enroll_con .enroll_list{
    float: left;
    width: 310px;
    height: 110px;
    border: 1px solid #E8E8E8;
  }
  .EnrollBox .enroll_con .enroll_list:first-child{
    margin-right: 40px;
  }
  .EnrollBox .enroll_con .enroll_list:nth-child(2){

    padding: 10px 20px;
  }
  .EnrollBox .enroll_con .enroll_list:last-child{
    float: right;
    width: 280px;
    border: none;
  }
  .EnrollBox .enroll_con .enroll_list img{
    display: block;
    width: 236px;
    height: 54px;
    margin: 28px auto;
  }
  .EnrollBox .enroll_con .enroll_list .enroll-money-nember{
    font-size: 36px;
    color: #333435;
    font-weight: 600;
  }
  .enroll_list .enroll-money-nember .unit{
    font-size:20px;
  }
  .enroll_list .enroll-btn{
    display: block;
    margin: 15px 0 20px 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-image: linear-gradient(45deg, #19DFE8 0%, #4889FF 54%, #4B4DFF 100%);
    box-shadow: 0 4px 12px 0 rgba(101,112,144,0.32);
    border-radius: 2px;
    font-size: 14px;
    color: #fff;
    text-align: center;
    font-weight: bold;
  }
  .enroll_list .enroll-btn:hover{
    background-image: linear-gradient(135deg, #17CFD7 0%, #4889FF 54%, #3133DF 100%)
  }
  .enroll_des{
    font-size: 12px;
    color: #888888;
  }
  .enroll_list .click-des{
    font-size: 12px;
    color: #888888;
  }
  .m_enroll{
    position: fixed;
    bottom: 32px;
    left:0;
    width: 100%;
    height: 50px;
    background: #fff;
    z-index: 114;
    font-size: 0;
    display: none;
    box-shadow: 0 -2px 4px 0 rgba(112,112,112,0.08);
    opacity: 0;
    filter:alpha(opacity=0)
  }
  .m_enroll .m_money{
    font-size: 22px;
    color: #333435;
    font-weight: 600;
    line-height: 50px;
    margin-left: 5%;
  }
  .m_enroll .m_money b{
    font-size: 14px;
  }
  .m_enroll_des{
    display: inline-block;
    font-size: 12px;
    color: #888888;
    line-height: 50px;
  }
  .m_link{
    float: right;
    width: 100px;
    height: 100%;
    font-size: 14px;
    color: #FFFFFF;
    line-height: 50px;
    text-align: center;
    font-weight: bold;
    background-image: linear-gradient(45deg, #19DFE8 0%, #4889FF 54%, #4B4DFF 100%);
  }
  .m_link:hover{
    background-image: linear-gradient(135deg, #17CFD7 0%, #4889FF 54%, #3133DF 100%)
  }
  @media (max-width: 768px) {
    .headApply{
      height: 326px;
    }
    .auto{
      width: 688px;
    }
    .apply_box{
      width: 708px;
      margin: auto;
      padding-top: 100px;
    }
    .apply_box .innerImg{
      width: 280px;
      height: 176px;
    }
    .apply_box .head_right{
      margin-left: 30px;
      width: 398px;
    }
    .apply_box .head_right .applydes{
      font-size: 17px;
      line-height: 24px;
    }
    .head_right .money{
      margin: 10px 0;
    }
    .head_right .money .money_number{
      font-size: 36px;
    }
    .head_right .btns .apply_btn{
      width: 190px;
    }
    .head_right .btns .now{
      margin-right: 16px;
    }
    .draw:hover .top-border{
      width: 189px;
    }
    .draw:hover .bottom-border{
      width: 189px;
    }
    .in_con{
      padding: 60px 0;
    }
    .in_title{
      float: inherit;
    }
    h2{
      font-size: 18px;
      text-align: center;
    }
    .title_line{
      margin: 20px auto;
    }
    .in_con .in_des{
      float: inherit;
      margin-left: inherit;
      width: 100%;
      padding-top: 20px;
    }
    .cour_con{
      padding: 60px 0;
    }
    .cour_con .cou_tab{
      margin-top: 40px;
    }
    .cour_con .cou_tab .cou_list{
      float: inherit;
      margin-right: 0;
      margin-bottom: 30px;
    }
    .cour_con .cou_tab .cou_list:last-child{
      margin-bottom: 0;
    }
    .cour_con .cou_tab .cou_list .cou_list_img{
      float: left;
      width: 125px;
      height: 80px;
      margin: inherit;
      margin-bottom: 0;
    }
    .cour_con .cou_tab .cou_list .list_content{
      float: left;
      width: 550px;
      margin-left: 10px;
    }
    .cou_h3{
      text-align: inherit;
    }
    .cour_con .cou_tab .cou_list .list_content .list_des{
      margin-top: 10px;
    }
    .infor{
      padding: 60px 0;
    }
    .infor_h2{
      width: 100%;
    }
    .infor .infor_con{
      float: inherit;
      width: 100%;
    }
    .infor .infor_con .infor_tab .infor_list{
      margin-bottom: 20px;
    }
    .infor_con .infor_tab .infor_list .list_name{
      width: 126px;
      font-size: 13px;
    }
    .infor_con .infor_tab .infor_list .list_tag{
      font-size: 14px;
    }

    .cert_con{
      padding: 60px 0;
    }
    .cert_con .cert_con_des{
      margin: 40px 0;
    }
    .cert_con .import_tab .import_list{
      float: inherit;
      margin:0 0 30px 0;
      font-size: 0;
    }
    .cert_con .import_tab .import_list:nth-child(2){
      margin:0 0 30px 0;
    }
    .cert_con .import_tab .import_list:nth-child(3){
      margin:0 0 30px 0;
    }
    .import_list .import_list_con{
      width: 623px;
    }

    .curPopup{
      width: 688px;
      height: 850px;
      margin-top: -425px;
      margin-left: -344px;
      z-index: 130;
    }
    .curPopup .curriculum_con{
      height: 800px;
      padding: 0 20px;
    }
    .EnrollBox .enroll_con .enroll_list:first-child{
      display: none;
    }
    .EnrollBox .enroll_con{
      padding: 25px 20px;
    }
    #question{
      margin-bottom: 30px;
    }
  }
  @media (max-width: 415px) {
    .headApply{
      height: 565px;
    }
    .auto{
      width: 335px;
    }
    .apply_box{
      width: 335px;
      margin: auto;
      padding-top: 70px;
    }
    .apply_box .innerImg{
      float: inherit;
      display: block;
      width: 335px;
      height: 212px;
      margin-bottom: 10px;
    }
    .apply_box .head_right{
      margin-left: inherit;
      float: inherit;
      width: 100%;
    }
    .apply_box .head_right .applydes{
      font-size: 15px;
    }
    .head_right .money .money_number{
      font-size: 28px;
    }
    .head_right .money .money_des{
      width: 100%;
      font-size: 11px;
      line-height: 14px;
    }
    .head_right .btns .apply_btn{
      display: block;
      width: 335px;
    }
    .head_right .btns .now{
      margin-right: inherit;
      margin-bottom: 10px;
    }
    .draw:hover .top-border{
      width: 334px;
    }
    .draw:hover .bottom-border{
      width: 334px;
    }
    .in_con{
      padding: 30px 0;
    }
    .title_line{
      width: 30px;
      margin: 20px auto;
    }
    .in_con .in_des{
      padding-top: 0;
    }
    .cour_con{
      padding: 30px 0;
    }
    .cour_con .cou_tab{
      margin-top: 30px;
    }
    .cour_con .cou_tab .cou_list .cou_list_img{
      display: none;
    }
    .m_list_img{
      display: inline-block;
      vertical-align: middle;
    }
    .cour_con .cou_tab .cou_list .list_content{
      float: inherit;
      width: 100%;
      margin-left: 0;
    }
    .cou_h3{
      display: inline-block;
      margin-left: 13px;
      vertical-align: text-top;
    }
    .cour_con .cou_tab .cou_list .list_content .list_des{
      margin-top: 6px;
    }
    .infor{
      padding: 30px 0;
    }
    .list_box{
      padding-bottom: 10px;
    }
    .curriculum .curriculum_con{
      display: none;
    }
    .curriculum .cur_h3{
      border-bottom: none;
    }
    .infor_con .infor_tab .infor_list .list_name{
      margin-right: 20px;
      vertical-align: top;
    }
    .infor_con .infor_tab .infor_list .list_tag{
      width: 166px;
    }
    .infor .infor_con .infor_tab:last-child{
      float: inherit;
    }

    .cert_con{
      padding: 30px 0;
    }
    .cert_con .cert_con_des{
      margin: 30px 0;
    }
    .cert_con .import_tab .import_list .cert_img{
      display: none;
    }
    .cert_con .import_tab .import_list .m_cert_img{
      display: inline-block;
      vertical-align: middle;
    }
    .cert_con .import_tab .import_list .cer_h3{
      display: inline-block;
      width: 295px;
      vertical-align: middle;
    }
    .import_list .import_list_con{
      display: block;
      width: 100%;
    }
    .curPopup{
      width: 100%;
      height: 100%;
      top:0;
      left: 0;
      margin-top:0;
      margin-left:0;
    }
    .curPopup .curriculum_con{
      display: block;
      height: 100%;
    }
    .EnrollBox{
      display: none;
      opacity: 0;
      filter:alpha(opacity=0)
    }
    .m_enroll{
      display: none;
      opacity: 1;
      filter:alpha(opacity=100)
    }
  }
</style>
