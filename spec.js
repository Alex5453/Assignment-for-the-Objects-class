describe("Класс Student", function () {
  it("должен корректно инициализировать свойства", function () {
    const student = new Student("Иван", "мужской", 21);
    expect(student.name).toBe("Иван");
    expect(student.gender).toBe("мужской");
    expect(student.age).toBe(21);
    expect(student.marks).toEqual([]);
  });

  it("должен устанавливать предмет", function () {
    const student = new Student("Анна", "женский", 22);
    student.setSubject("Математика");
    expect(student.subject).toBe("Математика");
  });

  it("должен добавлять оценки", function () {
    const student = new Student("Олег", "мужской", 23);
    student.addMarks(5, 4, 3);
    expect(student.marks).toEqual([5, 4, 3]);
  });

  it("должен корректно считать среднюю оценку", function () {
    const student = new Student("Мария", "женский", 19);
    student.addMarks(4, 4, 5);
    expect(student.getAverage()).toBeCloseTo(4.33, 2);
  });

  it("должен возвращать 0 при отсутствии оценок", function () {
    const student = new Student("Дима", "мужской", 20);
    expect(student.getAverage()).toBe(0);
  });

  it("должен исключать студента и удалять subject и marks", function () {
    const student = new Student("Юлия", "женский", 20);
    student.setSubject("История");
    student.addMarks(5, 3);
    student.exclude("плохая успеваемость");

    expect(student.subject).toBeUndefined();
    expect(student.marks).toBeUndefined();
    expect(student.excluded).toBe("плохая успеваемость");
  });
});
