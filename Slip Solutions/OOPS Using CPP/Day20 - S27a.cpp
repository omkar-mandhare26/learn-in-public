#include <iostream>
using namespace std;

class College
{
public:
    int cId, est;
    char cName[25], UniName[25];

public:
    friend istream &operator>>(istream &input, College &clg);
    friend ostream &operator<<(ostream &output, College &clg);
};

istream &operator>>(istream &input, College &clg)
{
    cout << "Enter College ID: ";
    input >> clg.cId;

    cout << "Enter College Name: ";
    input >> clg.cName;

    cout << "Enter University Name: ";
    input >> clg.UniName;

    cout << "Enter Establishment Year: ";
    input >> clg.est;

    return input;
}

ostream &operator<<(ostream &output, College &clg)
{
    output << "College ID: " << clg.cId << endl;
    output << "College Name: " << clg.cName << endl;
    output << "College Establishment Year: " << clg.est << endl;
    output << "University Name: " << clg.UniName << endl;

    return output;
}

int main()
{
    College clg;
    cin >> clg;

    cout << "\nCollge Details: " << endl;
    cout << clg;

    return 0;
}