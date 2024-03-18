#include <iostream>
#include <fstream>
using namespace std;

class movie
{
    int mid;
    char mname[20];
    char dname[15];
    int ryear;
    double bud;

public:
    void accept()
    {
        cout << "enter the movie id";
        cin >> mid;
        cout << "enter the movie name";
        cin >> mname;
        cout << "enter the director name";
        cin >> dname;
        cout << "enter the budget";
        cin >> bud;
        cout << "enter the release year";
        cin >> ryear;
    }
    void display()
    {
        cout << "the movie id is" << mid;
        cout << "the movie name is" << mname;
        cout << "the director name is" << dname;
        cout << "the movie budget is" << bud;
        cout << "the movie release year is" << ryear;
    }
};

int main()
{
    movie m[5];
    int n, i;
    fstream file;
    file.open("S2b_movie.txt", ios::in | ios::out);
    cout << "enter the no of record you want -";
    cin >> n;
    for (i = 0; i <= n; i++)
    {
        m[i].accept();
        file.write((char *)&m[i], sizeof(m[i]));
    }
    cout << "\ndetails of movie from the file-";
    for (i = 0; i < n; i++)
    {
        file.read((char *)&m[i], sizeof(m[i]));
        m[i].display();
    }
    file.close();
    return 0;
}