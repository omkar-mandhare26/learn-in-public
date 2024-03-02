#include <iostream>
using namespace std;

class Solution
{
public:
    bool isPowerOfTwo(int n)
    {
        if (n == 0)
            return false;
        while (n % 2 == 0)
            n /= 2;
        return n == 1;
    }
};

int main()
{
    Solution S;
    int n = 6;
    cout << S.isPowerOfTwo(n);

    return 0;
}