/*****************************************************
 *   Comment Block
 *****************************************************/
// Data for DataPage
const data1 = {
  DOCUMENTATION_DATA: {
    month: '[1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12]',
    score: '[50, 53, 63, 63, 72, 74, 75, 81, 80, 95, 98, 93]'
  }
};

const data2 = {
  CONDITION_DATA: [
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
  question1: {
    questions: ['Which letter is A?'],
    options: [['A', 'B', 'C', 'D']],
    answer: ['A']
  },
  question2: {
    questions: ['Which letter is B?'],
    options: [['D', 'C', 'A', 'B']],
    answer: ['B']
  },
  question3: {
    questions: ['Which letter is C?'],
    options: [['B', 'C', 'D', 'A']],
    answer: ['C']
  }
};

/*****************************************************
 *   Your Code Below
 *****************************************************/
export { data1, data2, test1 };
