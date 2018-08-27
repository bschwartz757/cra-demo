/*****************************************************
 *   Comment Block
 *****************************************************/
// Data for DataPage
const data1 = {
  title: 'DOCUMENTATION_DATA',
  columns: ['month', 'year'],
  data: [
    {
      month: '1',
      score: '50'
    },
    {
      month: '2',
      score: '53'
    },
    {
      month: '3',
      score: '63'
    },
    {
      month: '4',
      score: '63'
    },
    {
      month: '5',
      score: '72'
    },
    {
      month: '6',
      score: '74'
    },
    {
      month: '7',
      score: '75'
    },
    {
      month: '8',
      score: '81'
    },
    {
      month: '9',
      score: '80'
    },
    {
      month: '10',
      score: '95'
    },
    {
      month: '11',
      score: '98'
    },
    {
      month: '12',
      score: '93'
    }
  ]
};

const data2 = {
  title: 'CONDITION_DATA',
  columns: ['CONDITION_NAME', 'HISTORIC', 'CURRENT', 'CHANGE', 'CHANGE_ERROR'],
  data: [
    {
      CONDITION_NAME: 'Acute blood loss anemia',
      HISTORIC: '5',
      CURRENT: '10',
      CHANGE: '5',
      CHANGE_ERROR: '4'
    },
    {
      CONDITION_NAME: 'Acute heart failure',
      HISTORIC: '15',
      CURRENT: '7',
      CHANGE: '-8',
      CHANGE_ERROR: '3'
    }
  ]
};

// Test Questions for TestPage
const test1 = {
  title: 'QUESTIONNAIRE',
  questions: [
    {
      question: 'Which letter is A?',
      options: ['A', 'B', 'C', 'D'],
      answer: 'A'
    },
    {
      question: 'Which letter is B?',
      options: ['D', 'C', 'A', 'B'],
      answer: 'B'
    },
    {
      question: 'Which letter is C?',
      options: ['B', 'C', 'D', 'A'],
      answer: 'C'
    }
  ]
};

/*****************************************************
 *   Your Code Below
 *****************************************************/
export { data1, data2, test1 };
