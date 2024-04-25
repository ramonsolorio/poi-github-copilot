
//Inline copilot promt: Use the provided legacy code, and optimize it to better code quality and/or performance

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX 100

void appendDataToFile(const char* filename) {
    char data[MAX];
    FILE* file;

    file = fopen(filename, "a");
    if (file == NULL) {
        printf("Unable to open the file.\n");
        exit(1);
    }

    printf("Enter data: ");
    fgets(data, MAX, stdin);
    fputs(data, file);
    fclose(file);
}

void readDataFromFile(const char* filename) {
    char data[MAX];
    FILE* file;

    file = fopen(filename, "r");
    if (file == NULL) {
        printf("Unable to open the file.\n");
        exit(1);
    }

    printf("Data in the file:\n");
    while (fgets(data, MAX, file) != NULL)
        printf("%s", data);
    fclose(file);
}

void updateDataInFile(const char* filename) {
    char oldData[MAX], newData[MAX];
    FILE* inputFile, *tempFile;
    int found = 0;

    inputFile = fopen(filename, "r");
    tempFile = fopen("temp.txt", "w");

    printf("Enter data to be updated: ");
    fgets(oldData, MAX, stdin);
    printf("Enter new data: ");
    fgets(newData, MAX, stdin);

    char line[MAX];
    while (fgets(line, MAX, inputFile) != NULL) {
        if (strcmp(line, oldData) == 0) {
            fputs(newData, tempFile);
            found = 1;
        } else {
            fputs(line, tempFile);
        }
    }

    fclose(inputFile);
    fclose(tempFile);

    remove(filename);
    rename("temp.txt", filename);

    if (found == 0)
        printf("Data not found.\n");
    else
        printf("Data updated successfully.\n");
}

void deleteDataFromFile(const char* filename) {
    char data[MAX];
    FILE* inputFile, *tempFile;
    int found = 0;

    inputFile = fopen(filename, "r");
    tempFile = fopen("temp.txt", "w");

    printf("Enter data to be deleted: ");
    fgets(data, MAX, stdin);

    char line[MAX];
    while (fgets(line, MAX, inputFile) != NULL) {
        if (strcmp(line, data) != 0)
            fputs(line, tempFile);
        else
            found = 1;
    }

    fclose(inputFile);
    fclose(tempFile);

    remove(filename);
    rename("temp.txt", filename);

    if (found == 0)
        printf("Data not found.\n");
    else
        printf("Data deleted successfully.\n");
}

int main() {
    int choice;

    while (1) {
        printf("\n1. Create\n2. Read\n3. Update\n4. Delete\n5. Exit\nEnter your choice: ");
        scanf("%d", &choice);
        getchar();  // To consume newline character

        switch (choice) {
            case 1:
                appendDataToFile("crud.txt");
                break;
            case 2:
                readDataFromFile("crud.txt");
                break;
            case 3:
                updateDataInFile("crud.txt");
                break;
            case 4:
                deleteDataFromFile("crud.txt");
                break;
            case 5:
                exit(0);
            default:
                printf("Invalid choice.\n");
        }
    }

    return 0;
}
