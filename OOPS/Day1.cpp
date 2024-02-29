#include <iostream>
using namespace std;

class Car
{
public:
    int year;
    char *brand, *model;

public:
    Car(){};
    Car(int yr, char *brand, char *model)
    {
        year = yr;
        this->brand = brand;
        this->model = model;
    };

    char *getBrand() { return brand; };
    char *getModel() { return model; };
    int getYear() { return year; };
};

int main()
{
    char brand[] = "TATA", model[] = "Harrier";
    Car Tata(2023, brand, model);
    return 0;
}