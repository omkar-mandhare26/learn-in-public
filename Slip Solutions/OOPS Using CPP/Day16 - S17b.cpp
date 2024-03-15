#include <iostream>
#include <algorithm>
using namespace std;

class Student
{
public:
    int sId;
    char sName[10], sClass[5];

public:
    void getStudDetails()
    {
        cout << "Enter Student ID: ";
        cin >> sId;

        cout << "Enter Student Name: ";
        cin >> sName;

        cout << "Enter Student Class: ";
        cin >> sClass;
    }

    void displayStud()
    {
        cout << "Student ID: " << sId << endl;
        cout << "Student Name: " << sName << endl;
        cout << "Student Class: " << sClass << endl;
    }
};

class Competition
{
public:
    int cId;
    char cName[10];

public:
    void getCompDetails()
    {
        cout << "Enter Competition ID: ";
        cin >> cId;

        cout << "Enter Competition Name: ";
        cin >> cName;
    }

    void displayComp()
    {
        cout << "Competition ID: " << cId << endl;
        cout << "Competition Name: " << cName << endl;
    }
};

class Stud_Comp : public Student, public Competition
{
public:
    int rank;

public:
    void getDetails()
    {
        getStudDetails();
        getCompDetails();
        cout << "Enter Rank of Student " << sName << ": ";
        cin >> rank;
        cout << endl;
    }

    void displayDetails()
    {
        displayStud();
        displayComp();
        cout << "Rank: " << rank << "\n\n";
    }
};

bool compareByRank(const Stud_Comp &a, const Stud_Comp &b)
{
    return a.rank < b.rank;
}

int main()
{
    int n;
    cout << "Enter No of Student: ";
    cin >> n;

    Stud_Comp *Students = new Stud_Comp[n];

    cout << "Enter Student Details: " << endl;
    for (int i = 0; i < n; i++)
        Students[i].getDetails();

    sort(Students, Students + n, compareByRank);

    cout << "Student Details by Rank: " << endl;
    for (int i = 0; i < n; i++)
        Students[i].displayDetails();

    delete[] Students;

    return 0;
}
