#include <iostream>
using namespace std;

class MyMatrix
{
public:
    int r, c;
    int ptr[5][5];

public:
    void getMatrix()
    {
        int i, j;
        cout << "Enter No of Rows & Columns: ";
        cin >> r >> c;

        cout << "Enter " << r * c << " Elements: ";
        for (i = 0; i < r; i++)
            for (j = 0; j < c; j++)
                cin >> ptr[i][j];
    }

    void displayMatrix()
    {
        for (int i = 0; i < r; i++)
        {
            for (int j = 0; j < c; j++)
                cout << ptr[i][j] << " ";
            cout << endl;
        }
        cout << endl;
    }

    MyMatrix operator-(MyMatrix M)
    {
        MyMatrix temp;
        if (r != M.r || c != M.c)
            return {-1, -1};

        temp.r = r;
        temp.c = c;

        for (int i = 0; i < r; i++)
            for (int j = 0; j < c; j++)
                temp.ptr[i][j] = ptr[i][j] - M.ptr[i][j];

        return temp;
    }
};

int main()
{
    MyMatrix m1, m2, m3;

    m1.getMatrix();
    m2.getMatrix();

    cout << "Matrix1:\n";
    m1.displayMatrix();
    cout << "Matrix2:\n";
    m2.displayMatrix();

    m3 = m1 - m2;
    cout << "Subtraction of Both matrices:\n";
    m3.displayMatrix();
    return 0;
}