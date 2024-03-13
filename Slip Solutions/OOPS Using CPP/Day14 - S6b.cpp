#include <iostream>
using namespace std;

class Matrix
{
    int **p;
    int r, c;

public:
    void getMatrix()
    {
        cout << "Enter No of Rows and Columns: ";
        cin >> r >> c;

        p = new int *[r];

        for (int i = 0; i < r; i++)
            p[i] = new int[c];

        cout << "Enter Matrix Elements: (" << r * c << " elements): ";
        for (int i = 0; i < r; i++)
            for (int j = 0; j < c; j++)
                cin >> p[i][j];
    }

    void displayMatrix()
    {
        cout << "Matrix: " << endl;
        for (int i = 0; i < r; i++)
        {
            for (int j = 0; j < c; j++)
                cout << p[i][j] << " ";
            cout << endl;
        }
        cout << endl;
    }

    void transposeMatrix()
    {
        cout << "Transpose of the Given Matrix: " << endl;
        for (int i = 0; i < r; i++)
        {
            for (int j = 0; j < c; j++)
                cout << p[j][i] << " ";
            cout << endl;
        }
        cout << endl;
    }
};

int main()
{
    Matrix m;
    m.getMatrix();
    m.displayMatrix();
    m.transposeMatrix();

    return 0;
}