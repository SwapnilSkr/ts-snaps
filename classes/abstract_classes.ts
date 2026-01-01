type Holiday = {
  date: Date;
  reason: string;
};

abstract class Department {
  protected abstract holidays: Holiday[];
  protected constructor(protected name: string) {}
}

class ITDepartment extends Department {
  protected holidays: Holiday[] = [];
  constructor() {
    super("IT Department");
  }
}

class HRDepartment extends Department {
  protected holidays: Holiday[] = [];
  constructor() {
    super("HR Department");
  }
}

const itDepartment: ITDepartment = new ITDepartment();
