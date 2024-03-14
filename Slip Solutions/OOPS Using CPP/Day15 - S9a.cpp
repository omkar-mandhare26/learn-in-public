#include <iostream>
using namespace std;

class Person
{
    char name[20], addr[30];
    float salary, taxAmount;

public:
    void getDetails()
    {
        cout << "Enter Name: ";
        cin >> name;

        cout << "Enter Address: ";
        cin >> addr;

        cout << "Enter Salary: ";
        cin >> salary;
    }

    float calculateTax()
    {
        if (salary <= 20000)
            return 0;
        else if (salary > 20000 && salary <= 40000)
            return salary * 0.05;
        else
            return (20000 * 0.05) + ((salary - 40000) * 0.1);
    }

    void
    displayDetails()
    {
        taxAmount = calculateTax();

        cout << "Name: " << name << endl;
        cout << "Tax on salary " << salary << ": " << taxAmount << endl;
        cout << "Address: " << addr << endl;
    }
};

int main()
{
    Person emp;
    emp.getDetails();
    emp.displayDetails();

    return 0;
}