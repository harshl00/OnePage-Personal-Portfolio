interface ExamPattern {
    void displayExamPattern();
}

class Student {
    String name, phoneNumber;
    int rollNumber;
    
    public Student(String name, int rollNumber, String phoneNumber) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.phoneNumber = phoneNumber;
    }
}

class CSE implements ExamPattern {
    public void displayExamPattern() {
        System.out.println("CSE Exam Pattern: Multiple choice questions.");
    }
}

class ISE implements ExamPattern {
    public void displayExamPattern() {
        System.out.println("ISE Exam Pattern: Short answer and essay questions.");
    }
}

class ECE implements ExamPattern {
    public void displayExamPattern() {
        System.out.println("ECE Exam Pattern: Practical and theoretical questions.");
    }
}

public class PresidencyUniversity {
    public static void main(String[] args) {
        Student student = new Student("John Doe", 101, "1234567890");
        ExamPattern department = new CSE();
        department.displayExamPattern();
        System.out.println("Student Name: " + student.name);
        System.out.println("Roll Number: " + student.rollNumber);
        System.out.println("Phone Number: " + student.phoneNumber);
    }
}
