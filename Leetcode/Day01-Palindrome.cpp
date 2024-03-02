#include <iostream>
using namespace std;

class Solution
{
public:
    Solution(){};
    bool isPalindrome(int x)
    {
        if (x < 0)
            return false;
        int temp = x;
        long rev = 0;
        while (temp != 0)
        {
            int rem = temp % 10;
            rev = (rev * 10) + rem;
            temp /= 10;
        }
        return (rev == x);
    }
};

int main()
{
    int x = -151;
    Solution s;
    if (s.isPalindrome(x))
        cout << x << " is a Palindrome";
    else
        cout << x << " is not a Palindrome";

    return 0;
}