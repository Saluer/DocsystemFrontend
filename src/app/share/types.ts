interface Assignment {
  subject: string;
  authorId: number;
  //   operators;
  deadline: string;
  controlSign: boolean;
  operateSign: boolean;
  content?: string;
}

type Assignments = Assignment[];

interface Employee {
  firstname: string;
  patronimic: string;
  surname: string;
  position: string;
}

type Employees = Employee[];
