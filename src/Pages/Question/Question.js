import React from 'react';
import Accordion from 'react-bootstrap/Accordion';


const Question = () => {
    return (
        <div>
            <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>How i train?</Accordion.Header>
        <Accordion.Body>
        Fitness trainers and instructors lead, instruct, and motivate individuals or groups in exercise activities, including cardiovascular workouts (for the heart and blood circulation), strength training, and stretching. They work with people of all ages and skill levels.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How i provide services?</Accordion.Header>
        <Accordion.Body>
          Here i provide my service throught online and offline.I have training center in chawkbazar,chittagong.Which is well furnshied and almost every equipment by which i train students.In online i take session on mental fitness and basic physical fitness.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>My qualification.</Accordion.Header>
        <Accordion.Body>
        I have  recognised qualification like: Level 2 Certificate in Fitness Instructing. Level 2 Diploma in Instructing Exercise and Fitness. Level 3 Diploma in Fitness Instructing and Personal Training.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
    );
};

export default Question;