#include <iostream>
#include <string>
#include <cstring>
#include <cctype>
using namespace std;

class MyString
{
public:
    int strLen;
    char *str;

public:
    MyString()
    {
        strLen = 25;
        str = new char[strLen];
    }
    void getStr()
    {
        cout << "Enter String Length: ";
        cin >> strLen;
        str = new char[strLen];

        cout << "Enter String: ";
        cin >> str;
    }

    void display()
    {
        cout << "String: " << str << endl;
    }

    void operator!()
    {
        for (int i = 0; i < strlen(str); i++)
        {
            if (isalpha(str[i]))
            {
                if (islower(str[i]))
                    str[i] = toupper(str[i]);
                else if (isupper(str[i]))
                    str[i] = tolower(str[i]);
            }
        }
    }
    int operator<(MyString obj)
    {
        return strcmp(str, obj.str);
    }

    MyString operator+(int n)
    {
        MyString temp;
        for (int i = 0; i < strlen(str); i++)
            temp.str[i] += n;

        return temp;
    }

    ~MyString()
    {
        delete[] str;
    }
};

int main()
{
    int constant;
    MyString obj1, obj2, obj3;
    obj1.getStr();
    obj1.display();

    !obj1;
    obj1.display();

    int result = obj1 < obj1;

    cout << "Comparing string: " << result << "\n\n";

    cout << "Enter Constent: ";
    cin >> constant;

    obj2 = obj1 + constant;
    cout << "String After Adding Constant: " << endl;
    obj2.display();

    return 0;
}