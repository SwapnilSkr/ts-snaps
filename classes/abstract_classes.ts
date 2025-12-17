type Holiday = {
  date: Date;
  reason: string;
};

abstract class Department {
  protected abstract holidays: Holiday[];
  constructor(protected name: string) {}
}

class ITDepartment extends Department {
  protected holidays: Holiday[] = [];
}

class HRDepartment extends Department {
  protected holidays: Holiday[] = [];
}
