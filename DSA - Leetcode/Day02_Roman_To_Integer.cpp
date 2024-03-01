#include <iostream>
#include <map>
#include <cstring>
using namespace std;

class Solution
{
public:
    int romanToInt(string s)
    {
        map<char, int> roman{{'I', 1}, {'V', 5}, {'X', 10}, {'L', 50}, {'C', 100}, {'D', 500}, {'M', 1000}};
        int num = roman[s[0]];
        for (int i = 1; i < s.length(); i++)
        {
            if (roman[s[i]] > roman[s[i - 1]])
                num = (num - roman[s[i - 1]]) + (roman[s[i]] - roman[s[i - 1]]);
            else
                num = num + roman[s[i]];
        }
        return num;
    }
};

int main()
{
    string str = {"XXVII"};
    Solution S;
    cout << str << " as integer: " << S.romanToInt(str);

    return 0;
}