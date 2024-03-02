// hierarchical & Multiple
#include <iostream>
using namespace std;

class Student
{
protected:
    int rollNo;
    char *name;

protected:
    void getStudentDetails()
    {
        cout << "Enter Student Roll No: ";
        cin >> rollNo;
        cout << "Enter Student Name: ";
        cin >> name;
    }

    void displayStudentInfo()
    {
        cout << "Student Roll No: " << rollNo << endl;
        cout << "Student Name: " << name << "\n\n";
    }
};

class Theory : protected virtual Student
{
protected:
    int m1, m2, m3, m4;

protected:
    void getTheoryMarks()
    {
        cout << "Enter Thoery Marks for 4 Subjects: ";
        cin >> m1 >> m2 >> m3 >> m4;
    }

    void displayTheoryMarks()
    {
        cout << "Theory Marks: " << m1 << ", " << m2 << ", " << m3 << ", " << m4 << endl;
    }

    int getTheoryTotal() { return (m1 + m2 + m3 + m4); }
};

class Practical : protected virtual Student
{
protected:
    int p1, p2;

protected:
    void getPracticalMarks()
    {
        cout << "Enter Practical Marks for 2 Subjects: ";
        cin >> p1 >> p2;
    }

    void displayPracticalMarks()
    {
        cout << "Practical Marks: " << p1 << ", " << p2 << endl;
    }

    int getPracticalTotal() { return (p1 + p2); }
};

class Result : protected Theory, protected Practical
{
protected:
    int totalMarks;
    float per;
    char grade;

public:
    void getDetails()
    {
        getStudentDetails();
        getTheoryMarks();
        getPracticalMarks();
    }

    void getResult()
    {
        totalMarks = getTheoryTotal() + getPracticalTotal();
        per = totalMarks / 6.0;
        if (per >= 90.0)
            grade = 'O';
        else if (per < 90.0 && per >= 80.0)
            grade = 'A';
        else if (per < 80.0 && per >= 70.0)
            grade = 'B';
        else if (per < 70.0 && per >= 60.0)
            grade = 'C';
        else if (per < 60.0 && per >= 40.0)
            grade = 'D';
        else if (per < 40.0)
            grade = 'F';
    }

    void displayResult()
    {

        displayStudentInfo();

        getResult();
        cout << "Total Marks: " << totalMarks << endl;
        cout << "Percentage: " << per << "%" << endl;
        cout << "Grade: " << grade << "\n\n";

        displayTheoryMarks();
        displayPracticalMarks();
    }
};

int main()
{
    Result student;
    student.getDetails();
    student.displayResult();

    return 0;
}