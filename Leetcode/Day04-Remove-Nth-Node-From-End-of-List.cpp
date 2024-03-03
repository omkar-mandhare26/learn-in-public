#include <iostream>
using namespace std;

struct ListNode
{
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

class Solution
{
public:
    ListNode *removeNthFromEnd(ListNode *head, int n)
    {
        int len = 0;
        ListNode *cur = head;
        while (cur != nullptr)
        {
            len++;
            cur = cur->next;
        }

        int end = len - n - 1;
        if (end == -1)
        {
            ListNode *temp = head;
            head = head->next;
            delete temp;
            return head;
        }

        cur = head;
        for (int i = 0; i < end; i++)
            cur = cur->next;

        ListNode *temp = cur->next;
        cur->next = cur->next->next;
        delete temp;
        return head;
    }
};

int main()
{
    ListNode *head = new ListNode(1);
    head->next = new ListNode(2);
    head->next->next = new ListNode(3);
    head->next->next->next = new ListNode(4);
    head->next->next->next->next = new ListNode(5);

    Solution solution;
    int n = 2;

    head = solution.removeNthFromEnd(head, n);
    return 0;
}
