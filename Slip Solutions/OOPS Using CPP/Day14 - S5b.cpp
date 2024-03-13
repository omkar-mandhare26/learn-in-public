#include <iostream>
using namespace std;
const float PI = 3.1416;

class Shape
{
public:
    virtual float area() = 0;
};

class Circle : public Shape
{
    int r;

public:
    Circle(int r) { this->r = r; }
    float area() { return PI * (r * r); }
};

class Sphere : public Shape
{
    int r;

public:
    Sphere(int r) { this->r = r; }
    float area() { return 4 * PI * (r * r); }
};

class Cylinder : public Shape
{
    int r, h;

public:
    Cylinder(int r, int h) { this->r = r, this->h = h; }
    float area() { return (2 * PI * r * h) + (2 * PI * r * r); }
};

int main()
{
    Circle obj1(5);
    Sphere obj2(7);
    Cylinder obj3(11, 4);

    cout << "Area of Circle: " << obj1.area() << endl;
    cout << "Area of Sphere: " << obj2.area() << endl;
    cout << "Area of Cylinder: " << obj3.area() << endl;

    return 0;
}