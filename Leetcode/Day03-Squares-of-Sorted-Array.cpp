#include <iostream>
#include <vector>
#include <algorithm>
#include <math.h>
using namespace std;

class Solution
{
public:
    vector<int> sortedSquares(vector<int> &nums)
    {
        for (int i = 0; i < nums.size(); i++)
            nums[i] = pow(nums[i], 2);
        sort(nums.begin(), nums.end());
        return nums;
    }

    void display(vector<int> &nums)
    {
        for (int i = 0; i < nums.size(); i++)
            cout << nums[i] << " ";
    }
};

int main()
{
    vector<int> nums{-4, -1, 0, 3, 10};
    Solution S;
    S.sortedSquares(nums);
    S.display(nums);

    return 0;
}