#include <iostream>
#include <vector>
using namespace std;
class solution
{
public:
    solution() {}
    vector<int> twoSum(vector<int> &nums, int target)
    {
        int i, j, size = nums.size();
        for (i = 0; i < size; i++)
            for (j = i + 1; j < size; j++)
                if (nums[i] + nums[j] == target)
                    return {i, j};
        return {-1, -1};
    }
};

int main()
{
    int target = 9;
    vector<int> arr{2, 7, 11, 15};
    solution s;
    vector<int> result = s.twoSum(arr, target);
    cout << "\nSolution: Index no : ";
    for (int i = 0; i < result.size(); i++)
        cout << result[i] << " ";

    return 0;
}