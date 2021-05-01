/*
  board and table default value initialse here
*/

const data={
    'task-1': { id: 'task-1', content: 'Project City Trees',day:'yesterday' },
    'task-2': { id: 'task-2', content: 'Watch my favorite show',day:'Today' },
    'task-3': { id: 'task-3', content: 'Charge my phone',day:'Tomorrow' },
    'task-4': { id: 'task-4', content: 'Cook dinner',day:'yesterday' },
    'task-5': { id: 'task-5', content: 'Take out the garbage',day:'Today' },
    'task-6': { id: 'task-6', content: 'Last Time I Committed' ,day:'Today'},
    'task-7': { id: 'task-7', content: 'Seinfeld Last Time',day:'Today' },
    'task-8': { id: 'task-8', content: 'Youth Without Youth',day:'Tomorrow' },
    'task-9': { id: 'task-9', content: 'Happy Here and Now',day:'yesterday' },
    'task-10': { id: 'task-10', content: 'Wedding in Blood',day:'Today' },
    'task-11': { id: 'task-11', content: 'Monty Python',day:'Tomorrow' },
    'task-12': { id: 'task-12', content: 'Trip, The',day:'yesterday' },
  }
  
const LeadinitialData = {
  tasks: data,
  columns: {
    "column-1": {
      id: "column-1",
      title: "APPOINTMENT SCHEDULED",
      taskIds: ["task-1", "task-6", "task-7", "task-12"]
    },
    "column-2": {
      id: "column-2",
      title: "QUALIFIED TO BUY ",
      taskIds: ["task-3", "task-4"]
    },
    "column-3": {
      id: "column-3",
      title: "PRESENTATION SCHEDULED",
      taskIds: ["task-2", "task-5"]
    },
    "column-4": {
      id: "column-4",
      title: "DECISION MAKER BOUGHT-IN",
      taskIds: ["task-8", "task-9", "task-10"]
    },
    "column-5": {
      id: "column-5",
      title: "CONTRACT SENT",
      taskIds: ["task-11"]
    },
    "column-6": {
      id: "column-6",
      title: "COMPLETED",
      taskIds: []
    }
  },
  columnOrder: [
    "column-1",
    "column-2",
    "column-3",
    "column-4",
    "column-5",
    "column-6"
  ]
};

export default LeadinitialData;