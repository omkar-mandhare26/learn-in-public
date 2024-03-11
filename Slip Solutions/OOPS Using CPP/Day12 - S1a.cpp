#include <iostream>
using namespace std;

inline int max(int n1, int n2)
{
    return n1 > n2 ? 1 : 0;
}

int main()
{
    int n1, n2;
    cout << "Enter 2 Integers: ";
    cin >> n1 >> n2;

    if (max(n1, n2))
        cout << n1 << " is maximum & " << n2 << " is minimium" << endl;
    else
        cout << n2 << " is maximum & " << n1 << " is minimium" << endl;

    return 0;
}