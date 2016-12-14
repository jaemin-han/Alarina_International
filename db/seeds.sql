INSERT INTO users (id, f_name, l_name, email, college, degree, username, password) VALUES
  (1, 'jaemin', 'han', 'jaemin@gmail.com', 'UGA', 'bachelors of computer science', 'jaemin', 'han'),
  (2, 'grace', 'moon', 'grace@gmail.com', 'SVA', 'bachelors of arts', 'grace', 'moon'),
  (3, 'dawa', 'sherpa', 'dawa@gmail.com', 'University of Washington', 'bachelors of business', 'dawa', 'sherpa'),
  (4, 'alex', 'tong', 'alex@gmail.com', 'Rutgers University', 'bachelors of computer science', 'alex', 'tong');

INSERT INTO company (id, company_name, company_description, industry, city, website, username, password) VALUES
  (1, 'Strategic Development', 'Strategic development is about change. How management handles the new realities in technology, information flow, global competition and political accountability is key to success.', 'Dinance', 'Seattle, Washington', 'www.strategicdevelopment.com', 'strategic', '123'),
  (2, 'Hospitality Group', 'As a leading global F&B and hospitality recruitment consultancy company, we hire best of the best.', 'hospitality', 'new york', 'www.hospitalitygroup.com', 'hospitality', '123'),
  (3, 'Design Academy', 'Specializing in web, print, identity and modern contemporary design. Offers in-house conceptual consulting, search engine optimization, web development.', 'Design', 'New York, New York', 'www.designacademy.com', 'design', '123'),
  (4, 'Data Collector', 'Digital Agency that specializes in website design, custom design development, mobile apps.Top rated web design company.', 'Web Development', 'San Francisco, California', 'www.datacoder.com', 'data', '123'),
  (5, 'AirDaN', 'Hospitality company specializes in space sharing all over the world', 'Hospitality', 'Los Angeles, California', 'www.airdan.com', 'AirDaN', '123'),
  (6, 'Phazer Firm', 'Phazer Firm specialize in search and trend identification and implementation of opportunities to maximize the overall external legal spend and social service experiences.', 'Law Firm', 'Bellevue, Washington', 'www.lawfirming.com', 'law', '123'),
  (7, 'Morning Glory', 'Serving our community since 2011, Morning Glory Health & Support is a nationally recognized, public, health care organization founded and based in Austin, Texas. The largest health system in Austin, Morning Glory exists to improve the health and well-being of our community by providing outstanding support, patient- and family-centered care to all.', 'Culinary Arts', 'Austin, Texas', 'www.cookingz.com', 'cook', '123'),
  (8, 'Software Assembly', 'Are you looking for a stable, well-paid, friendly work environment to take your software development career to the next level? Yes, you. Are you tired of dealing with mergers, acquisitions, and corporate finance? Want to work for a company where the people are genuine, and you are not just a number? Yes, you. We might be the place for you.', 'IT', ' Scottsdale, Arizona', 'www.internationalwit.com', 'hello', 'haha'),
  (9, 'Psy Incorporation', 'Regional Consulting Corporation seeks one-of-a-kind candidate for a full time position starting in March providing Clinical Psychologist - Integrated Primary Care and health care services in the United States Air Force and their families at Tinker AFB in Florida.', 'Psychology', 'Aurora, Colorado', 'www.psychologyspez.com', 'psy', 'yes'),
  (10, 'Special Case', 'We are using website and copywriting experience to collaborate with the design (CMS) and marketing team on multiple websites and projects. Candidate will also support with SEM and various technical support for corporate office users and computers.', 'SEO', 'Bunnell, Florida', 'www.seonow.com', 'seo', '123'),
  (11, 'JMH Core', 'JMH Core Firm specializes in search and trend identification and implementation of opportunities to maximize the overall revenue and minimize spend through our own CMS.', 'Hotels', 'New York, New York', 'www.jmhcore.com', 'jmh', 'user');

INSERT INTO job (id, position, description, job_company, city, company_id) VALUES
  (1, 'Junior Fullstack Developer', 'Looking for an exiting adventure? Data Collector is on currently looking for a junior full stack developer to join our team, and take part in huge role, Join today.', 'AirDaN', 'New York, New York', 4),
  (2, 'Visual Designer', 'You will have the chance to grow quickly within our rapidly scaling company. Your role may evolve as we scale, but you don’t fear change, you see opportunity. Strong communication skills are a must.', 'Design Academy', 'Newport, New Jersey', 3),
  (3, 'Corporate Revenue Manager', 'This position requires a combination of revenue management knowledge and tactical online marketing. He/She must also assist our Sales team to serve as a point of contact for all the clients needs from relationship connection, customer-service and support the customers product enhancement requirements.', 'Hospitality Group', 'Los Angeles, California',  2),
  (4, 'Hedge Fund Analyst', 'Analyst will report to our Director of Acquisitions, epresentative will use their website and copywriting experience to collaborate with the design and marketing team on multiple websites and projects. Candidate will also assist with some general technical support for office users and computers.tegration and closing of real estate transactions. 3+ years of experience.', 'Strategic Development', 'New York, New York', 1),
  (5, 'Corporate Injury Lawyer', 'Bellevue Washington law firm seeks personal corporate attorney with strong litigation and court room experiences. Strategic and corporate mind with South Washinton litigation experiences coupled with 1 -2 years experience is non-negotiable. Candidate will thrive in a fast-paced environment and not require a road to partnership to be driven as the salary is competitive with bonus and 4-week paid vacation.', 'Phazer Firm', 'Detroit, Michigan', 6),
  (6, 'MVC Second Cook', 'The Second Cook, Nights position is responsible for preparation of all food and beverage for patients and employees through production. The Second Cook, Nights also provides ongoing support to corporate department management in achieving objectives through adherence to dietary restrictions, medical support and guidelines in food preparation.', 'Morning Glory', 'San Jose, California', 7),
  (7, 'Front-End Software Developer', 'The Front-end software developer will participate in software engineering activities related to front-end web application development and maintenance for the company in the U.S. This includes reviewing system design specs, design, UX, UI, contributing to a technical design document (TSD), backend, unit testing, development-led integration testing, and defect bugs throughout testing phases.', 'Software Assembly', 'Bellevue, Washington', 8),
  (8, 'Clinical Psychologist', ' Shall have completed an ZPEE accredited internship/work experience in professional psychology or an internship/work experience acceptable to the Office of the Psychology General, U.S. Air Force International.', 'Regional Consulting Corporation', 'Austin, Texas', 9),
  (9, 'SEO Specialist', 'Seeking a yearly-based specialist who has a true understanding of Search Engine Optimization as well as the ability to troubleshoot front-end and SEM.', 'Special Case', 'Denver, Colorado', 10),
  (10, 'Account Analyst', 'Account Analyst will communicate with clients specifically on design and marketing to increate ROI year over year. Candidate will also communicate with design and front-end team for further support.', 'JMH Core', 'Atlanta, Georgia', 11);


INSERT INTO application (id, user_id, job_id) VALUES
  (1, 1, 1),
  (2, 2, 2),
  (3, 3, 4),
  (4, 4, 3);

  ALTER SEQUENCE users_id_seq RESTART WITH 5;
  ALTER SEQUENCE company_id_seq RESTART WITH 6;
  ALTER SEQUENCE job_id_seq RESTART WITH 5;
  ALTER SEQUENCE application_id_seq RESTART WITH 5;

