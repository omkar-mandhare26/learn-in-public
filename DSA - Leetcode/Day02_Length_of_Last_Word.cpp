#include <iostream>
#include <cstring>
using namespace std;

class Solution
{
public:
    Solution(){};
    int lengthOfLastWord(string s)
    {
        int i = s.length() - 1, count = 0;
        while (i >= 0 && s[i] == ' ')
            i--;

        while (i >= 0 && s[i--] != ' ')
            count++;

        return count;
    }
};

int main()
{
    string str = {"day"};
    Solution S;
    cout << "Length of last word: " << S.lengthOfLastWord(str);

    return 0;
}