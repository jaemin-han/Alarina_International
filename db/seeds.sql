INSERT INTO users (id, f_name, l_name, email, college, degree, username, password) VALUES
  (1, 'jaemin', 'han', 'jaemin@gmail.com', 'UGA', 'bachelors of computer science', 'jaemin', 'han'),
  (2, 'grace', 'moon', 'grace@gmail.com', 'SVA', 'bachelors of arts', 'grace', 'moon'),
  (3, 'dawa', 'sherpa', 'dawa@gmail.com', 'University of Washington', 'bachelors of business', 'dawa', 'sherpa'),
  (4, 'alex', 'tong', 'alex@gmail.com', 'Rutgers University', 'bachelors of computer science', 'alex', 'tong');

INSERT INTO company (id, company_name, company_description, industry, city, website, username, password) VALUES
  (1, 'Strategic Development', 'Strategic development is about change. How management handles the new realities in technology, information flow, global competition and political accountability is key to success.', 'finance', 'seattle', 'www.strategicdevelopment.com', 'strategic', '123'),
  (2, 'Hospitality Group', 'As a leading global F&B and hospitality recruitment consultancy company, we hire best of the best.', 'hospitality', 'new york', 'www.hospitalitygroup.com', 'hospitality', '123'),
  (3, 'Design Academy', 'Specializing in web, print, identity and modern contemporary design. Offers in-house conceptual consulting, search engine optimization, web development.', 'Design', 'new york', 'www.designacademy.com', 'Design', '123'),
  (4, 'Data Collector', 'Digital Agency that specializes in website design, custom design development, mobile apps.Top rated web design company.', 'web development', 'san francisco', 'www.datacoder.com', 'Data', '123'),
  (5, 'AirDaN', 'Hospitality company specializes in space sharing all over the world', 'hospitality', 'california', 'www.airdan.com', 'AirDaN', '123');

INSERT INTO job (id, position, description, company_id) VALUES
  (1, 'junior fullstack developer', 'Looking for an exiting adventure? Data Collector is on currently looking for a junior full stack developer to join our team, and take part in huge role, Join today.', 4),
  (2, 'visual designer', 'You will have the chance to grow quickly within our rapidly scaling company. Your role may evolve as we scale, but you don’t fear change, you see opportunity. Strong communication skills are a must.', 3),
  (3, 'revenue manager', 'This position requires a combination of revenue management knowledge and tactical online marketing. He/She must also assist our Sales team to serve as a point of contact for all the clients needs from relationship connection, customer-service and support the customers product enhancement requirements.', 2),
  (4, 'Hedge Fund', 'Analyst will report to our Director of Acquisitions, the Hedge Fund Analyst will also support the evaluation, corporate management, due diligence, risk management, integration and closing of real estate transactions. 3+ years of experience.', 1);

INSERT INTO application (id, user_id, job_id) VALUES
  (1, 1, 1),
  (2, 2, 2),
  (3, 3, 4),
  (4, 4, 3);

  ALTER SEQUENCE users_id_seq RESTART WITH 5;
  ALTER SEQUENCE company_id_seq RESTART WITH 6;
  ALTER SEQUENCE job_id_seq RESTART WITH 5;
  ALTER SEQUENCE application_id_seq RESTART WITH 5;

