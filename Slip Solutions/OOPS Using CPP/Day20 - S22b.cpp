#include <iostream>
#include <string>
#include <cstring>
using namespace std;

class String
{
public:
    void display_str(char *s)
    {
        cout << "String in Double Quotes: " << endl;
        cout << "\"" << s << "\"\n\n";
    }
    void display_str(int n, char *s)
    {
        string str(s);
        cout << "Substring of String till " << n << " position: " << endl;
        cout << str.substr(0, n) << "\n\n";
    }
    void display_str(int m, int n, char *s)
    {
        string str(s);
        cout << "Substring of String from " << m << " to" << n << " position: " << endl;
        cout << str.substr(m, n) << "\n\n";
    }
};

int main()
{
    char str[100];
    cout << "Enter String: ";
    cin >> str;
    String s;

    s.display_str(str);
    s.display_str(4, str);
    s.display_str(4, 8, str);

    return 0;
}